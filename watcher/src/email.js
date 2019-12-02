var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'jacky.bot@gifi.fr',
    pass: 'Jacky0210!'
  }
});

var mailOptions = {
  from: 'jacky.bot@gifi.fr',
  to: 'renaud.henry@gifi.fr',
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