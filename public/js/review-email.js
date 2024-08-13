// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use false for STARTTLS; true for SSL on port 465
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,             
  }
});

// Configure the mailoptions object
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: 'reviewergeneric90@gmail.com',
  subject: 'Your review has been submitted successfully',
  text: 'Your review has been posted!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent: ', info.response);
  }
});