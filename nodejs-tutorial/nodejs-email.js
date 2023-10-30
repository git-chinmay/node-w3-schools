const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'myemail@gmail.com',
      pass: 'xxxx'
    }
  });

  const mailOptions = {
    from: 'myemail@gmail.com',
    to: 'yu@hotmail.com',
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