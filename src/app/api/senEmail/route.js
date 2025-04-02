import nodemailer from "nodemailer";

export async function POST(req) {
  // Check if the request method is POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: `Method ${req.method} not allowed` }), { status: 405 });
  }

  try {
    // Parse the request body
    const { name, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use the configured email as sender
      to: process.env.MY_EMAIL, // Your recipient email
      subject: `Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, message: "Email failed to send.", error: error.message }), { status: 500 });
  }
}
