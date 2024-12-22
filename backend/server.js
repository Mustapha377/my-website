
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

// dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const Port =5000;
// const emailUser =import.meta.env.EMAIL_USER;
// const emailpass =import.meta.env.EMAIL_PASSWORD;
 
app.use(
    cors({
        origin:
       "http://localhost:3000/my-website/"
    })
)


const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.ethereal.email",
  port: 5000,
  secure: false, 
  auth: {
    user:   "mustaphaado377@gmail.com",
    pass: "37849695",
  },
});

app.post("/send", (req, res) => {
  const { user_name, user_email, message } = req.body;

  const mailOptions = {
    from: user_email,
    to: emailUser,
    subject: `Message from ${user_name}`,
    text:` tou have a new message from ${user_name}
  (${user_email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Email not sent!");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

app.listen(Port, "0.0.0.0", 
    () => {console.log(`Server running on port ${Port}`)});
