// //THIS MIGHT ALL NEED TO GO INTO THE SERVER JS FILE




// // Import the Nodemailer library
// const nodemailer = require('nodemailer');

// // Create a transporter object
// async function main (){



// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false, // use false for STARTTLS; true for SSL on port 465
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,             
//   }
// });
// const info = await transporter.sendMail({
//   from: process.env.GMAIL_USER,
//   to: 'reviewergeneric90@gmail.com',
//   subject: 'Signup successful!',
//   text: 'Thanks for signiing up for Reel Insights, the best place to post your worst movie opinions!'
// })
// console.log("message sent:" + info.messageId)

// // Configure the mailoptions object
// // const info = {
// //   from: process.env.GMAIL_USER,
// //   to: 'reviewergeneric90@gmail.com',
// //   subject: 'Signup successful!',
// //   text: 'Thanks for signiing up for Reel Insights, the best place to post your worst movie opinions!'
// // };

// }

// main().catch(error => console.log(error))

// // await transporter.sendMail(mailOptions, function(error, info){
// //   if (error) {
// //     console.log('Error:', error);
// //   } else {
// //     console.log('Email sent: ', info.response);
// //   }
// // });