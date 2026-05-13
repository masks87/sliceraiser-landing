import { Router, type IRouter } from "express";
import { Resend } from "resend";
import {
  SubmitContactBody,
  SubmitMeetingRequestBody,
} from "@workspace/api-zod";

const router: IRouter = Router();

const FROM = "SliceRaiser <admin@sliceraiser.com>";

// Internal recipient: set CONTACT_RECIPIENT_EMAIL in environment — never exposed to frontend
function getRecipient(): string {
  return process.env.CONTACT_RECIPIENT_EMAIL || "contact@sliceraiser.com";
}

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

function buildInternalHtml(title: string, rows: Array<[string, string]>): string {
  const rowsHtml = rows
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:6px 12px 6px 0;color:#8e9196;font-size:13px;vertical-align:top;white-space:nowrap;font-weight:600;">${escapeHtml(k)}</td>
          <td style="padding:6px 0;color:#020817;font-size:14px;">${escapeHtml(v || "—")}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;background:#f7f9ff;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:28px;border:1px solid #e5e7eb;">
      <div style="font-size:12px;letter-spacing:.12em;color:#4285f4;font-weight:700;text-transform:uppercase;">SliceRaiser — Internal Notification</div>
      <h1 style="margin:6px 0 18px;color:#082f6f;font-size:22px;">${escapeHtml(title)}</h1>
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
    </div>
  </body></html>`;
}

function buildAutoReplyHtml(requesterName: string, autoReplyMessage: string): string {
  return `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;background:#f7f9ff;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:28px;border:1px solid #e5e7eb;">
      <div style="font-size:12px;letter-spacing:.12em;color:#4285f4;font-weight:700;text-transform:uppercase;">SliceRaiser</div>
      <h1 style="margin:6px 0 10px;color:#082f6f;font-size:22px;">Thank you, ${escapeHtml(requesterName)}</h1>
      <p style="color:#374151;font-size:15px;line-height:1.7;">${escapeHtml(autoReplyMessage)}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
      <p style="color:#8e9196;font-size:12px;">SliceRaiser — <a href="https://sliceraiser.com" style="color:#4285f4;">sliceraiser.com</a></p>
    </div>
  </body></html>`;
}

const AUTO_REPLY_MESSAGE =
  "Thank you for contacting SliceRaiser. We have received your request and our team will review it. If the request is suitable, we will contact you with the next steps.";

const AUTO_REPLY_SUBJECT = "We received your message — SliceRaiser";

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

  const submittedAt = new Date().toUTCString();
  const rows: Array<[string, string]> = [
    ["Inquiry type", inquiryType],
    ...fields.map((f): [string, string] => [f.label, f.value || "—"]),
    ["Submitted at", submittedAt],
  ];

  const internalHtml = buildInternalHtml(
    `New Contact Request — ${inquiryType}`,
    rows,
  );
  const internalText = `New SliceRaiser Contact Request - ${inquiryType}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;

  // Extract requester email and name from fields for auto-reply
  const requesterEmail = fields.find(
    (f) => f.label.toLowerCase().includes("email"),
  )?.value ?? "";
  const requesterName = fields.find(
    (f) => f.label.toLowerCase().includes("name"),
  )?.value ?? "there";

  try {
    // 1. Internal notification to private recipient
    await resend.emails.send({
      from: FROM,
      to: getRecipient(),
      subject: `New SliceRaiser Contact Request - ${inquiryType}`,
      html: internalHtml,
      text: internalText,
    });

    // 2. Auto-reply confirmation to requester (only if we have their email)
    if (requesterEmail) {
      await resend.emails.send({
        from: FROM,
        to: requesterEmail,
        subject: AUTO_REPLY_SUBJECT,
        html: buildAutoReplyHtml(requesterName, AUTO_REPLY_MESSAGE),
        text: `${AUTO_REPLY_MESSAGE}\n\nSliceRaiser — https://sliceraiser.com`,
      });
    }

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

  const submittedAt = new Date().toUTCString();
  const rows: Array<[string, string]> = [
    ["Full name", fullName],
    ["Email", email],
    ["Purpose of meeting", purpose],
    ["Preferred date & time", preferredDateTime],
    ["Submitted at", submittedAt],
  ];

  const internalHtml = buildInternalHtml("Meeting Request", rows);
  const internalText = `New SliceRaiser Contact Request - Meeting Request\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;

  try {
    // 1. Internal notification
    await resend.emails.send({
      from: FROM,
      to: getRecipient(),
      subject: "New SliceRaiser Contact Request - Meeting Request",
      html: internalHtml,
      text: internalText,
    });

    // 2. Auto-reply to requester
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: AUTO_REPLY_SUBJECT,
      html: buildAutoReplyHtml(fullName, AUTO_REPLY_MESSAGE),
      text: `${AUTO_REPLY_MESSAGE}\n\nSliceRaiser — https://sliceraiser.com`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send meeting-request email");
    return res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
