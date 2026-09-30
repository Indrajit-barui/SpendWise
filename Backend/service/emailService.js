const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendResetEmail = async (to, resetLink) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [to],
    subject: "Reset your SpendWise password",
    html: `
      <h2>Reset your SpendWise password</h2>

      <p>You requested to reset your SpendWise password.</p>

      <p>
        <a href="${resetLink}">
          Reset Password
        </a>
      </p>

      <p>This link will expire in 15 minutes.</p>

      <p>If you didn't request this, you can ignore this email.</p>
    `,
  });

  if (error) {
    console.log(error);
    return false;
  }

  console.log("Reset email sent:", data);
  return true;
};

module.exports = { sendResetEmail };

