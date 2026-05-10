import { Router, type IRouter } from "express";
import { Resend } from "resend";
import {
  SubmitContactBody,
  SubmitMeetingRequestBody,
} from "@workspace/api-zod";

const router: IRouter = Router();

const FROM = "SliceRaiser <admin@sliceraiser.com>";
const TO = "mamoon@sliceraiser.com";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getResend(log: { error: (...args: unknown[]) => void }): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    log.error("RESEND_API_KEY is not set");
    return null;
  }
  return new Resend(key);
}

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const { inquiryType, fields } = parsed.data;

  const resend = getResend(req.log);
  if (!resend) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  const rowsHtml = fields
    .map(
      (f) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#8e9196;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
          f.label,
        )}</td><td style="padding:6px 0;color:#020817;font-size:14px;">${escapeHtml(
          f.value || "—",
        )}</td></tr>`,
    )
    .join("");

  const rowsText = fields.map((f) => `${f.label}: ${f.value || "—"}`).join("\n");

  const html = `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;background:#f7f9ff;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:28px;border:1px solid #e5e7eb;">
      <div style="font-size:12px;letter-spacing:.12em;color:#4285f4;font-weight:700;text-transform:uppercase;">SliceRaiser Inquiry</div>
      <h1 style="margin:6px 0 18px;color:#082f6f;font-size:22px;">${escapeHtml(inquiryType)}</h1>
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
    </div>
  </body></html>`;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `SliceRaiser Inquiry — ${inquiryType}`,
      html,
      text: `New SliceRaiser inquiry: ${inquiryType}\n\n${rowsText}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    return res.status(500).json({ error: "Failed to send email" });
  }
});

router.post("/meeting-request", async (req, res) => {
  const parsed = SubmitMeetingRequestBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const { fullName, email, purpose, preferredDateTime } = parsed.data;

  const resend = getResend(req.log);
  if (!resend) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  const rows: Array<[string, string]> = [
    ["Full name", fullName],
    ["Email", email],
    ["Purpose of meeting", purpose],
    ["Preferred date & time", preferredDateTime],
  ];
  const rowsHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#8e9196;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0;color:#020817;font-size:14px;">${escapeHtml(
          v,
        )}</td></tr>`,
    )
    .join("");
  const rowsText = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const html = `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;background:#f7f9ff;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:28px;border:1px solid #e5e7eb;">
      <div style="font-size:12px;letter-spacing:.12em;color:#4285f4;font-weight:700;text-transform:uppercase;">SliceRaiser</div>
      <h1 style="margin:6px 0 18px;color:#082f6f;font-size:22px;">Meeting Request</h1>
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
    </div>
  </body></html>`;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: "Meeting Request - SliceRaiser",
      html,
      text: `Meeting Request - SliceRaiser\n\n${rowsText}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send meeting-request email");
    return res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
