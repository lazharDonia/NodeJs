
import dotenv from 'dotenv';

import { createTransport  } from 'nodemailer';

dotenv.config();

const usermail = process.env.AUTH_EMAIL

const userPass = process.env.AUTH_PASSWORD
console.log(userPass);

const  transporter = createTransport({
  service: "gmail",
  auth: {
    user: usermail,
    pass: userPass
  }
});

const mailOptions = {
  from:usermail,
  to: 'lazhar.donia95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});