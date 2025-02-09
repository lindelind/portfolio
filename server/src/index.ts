
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://alinde-ost.web.app"] // Produktion
    : ["http://localhost:5173"]; // Utveckling

app.use(express.json());
app.use(
  cors({
    origin: (origin: any, callback: any) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`Unexpected origin: ${origin}`);
        callback(null, true);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/api/send-email", (req: any, res: any) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: { email },
    to: process.env.EMAIL_USER,
    subject: "Kontaktformulär - Alinde Portfolio",
    text: `Från: ${name} (${email})\n\n${message}`,
    html: `<p><strong>Från:</strong> ${name} (${email})</p><p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email", error });
    }
    res.json({ message: "Email sent successfully", info });
  });
});


const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
