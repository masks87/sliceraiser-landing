import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { z } from "zod";

const router: IRouter = Router();

const FROM = "SliceRaiser <admin@sliceraiser.com>";
const TO = "contact@sliceraiser.com";

const IRInquiryBody = z.object({
  inquiryType: z.string().min(1).max(200),
  fullName: z.string().min(1).max(200),
  organization: z.string().max(200).optional().default(""),
  role: z.string().max(200).optional().default(""),
  email: z.string().email().max(200),
  phone: z.string().max(60).optional().default(""),
  engagementSize: z.string().max(60).optional().default(""),
  message: z.string().max(5000).optional().default(""),
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

router.post("/ir-inquiry", async (req, res) => {
  const parsed = IRInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const data = parsed.data;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    req.log.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service not configured" });
  }
  const resend = new Resend(key);

  const rows: Array<[string, string]> = [
    ["Inquiry type", data.inquiryType],
    ["Full name", data.fullName],
    ["Organization / fund", data.organization || "—"],
    ["Role / title", data.role || "—"],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Engagement size", data.engagementSize || "—"],
    ["Message", data.message || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#8e9196;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0;color:#020817;font-size:14px;white-space:pre-wrap;">${escapeHtml(
          v,
        )}</td></tr>`,
    )
    .join("");

  const rowsText = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const html = `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;background:#f7f9ff;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:16px;padding:28px;border:1px solid #e5e7eb;">
      <div style="font-size:12px;letter-spacing:.12em;color:#1E3A8A;font-weight:700;text-transform:uppercase;">SliceRaiser Investor Relations</div>
      <h1 style="margin:6px 0 18px;color:#1E3A8A;font-size:22px;">${escapeHtml(data.inquiryType)}</h1>
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
    </div>
  </body></html>`;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `IR Inquiry - ${data.inquiryType} - SliceRaiser`,
      html,
      text: `IR Inquiry - ${data.inquiryType} - SliceRaiser\n\n${rowsText}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send IR inquiry email");
    return res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
