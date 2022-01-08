const nodemailer = require('nodemailer');

//nodemail function creat transports and send emails
//here I have used ethereal email, their emails are not delivers but stores in their system

const nodemail = (reqbody) => {
    const url = `http://localhost:3000/verify/${reqbody.email}`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',

        auth: {
            user: 'btvqjupujk6m3s33@ethereal.email',
            pass: 'NRzWZc9wQhR6f1dnQg'
        }
    });

    var mailOptions = {
        from: 'btvqjupujk6m3s33@ethereal.email',
        to: reqbody.email,
        subject: 'Activate your xyz.email account',
        html: `   <h1>Please verify your account by clicking on following link</h1> <h3><a href= ${url} >verify</a></h3>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = nodemail;