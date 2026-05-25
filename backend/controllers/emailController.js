const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'SendGrid' etc
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, company, email, phone, interest, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'f223419@cfd.nu.edu.pk',
      subject: `New Enterprise Inquiry from ${name} at ${company}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Area of Interest:</strong> ${interest}</p>
        <hr />
        <p><strong>Technical Brief:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email dispatched successfully.' });
  } catch (error) {
    console.error('Email Dispatch Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Please check server configuration.' });
  }
};
