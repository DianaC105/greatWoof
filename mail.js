const nodemailer = require("nodemailer");
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.MG_API,
        domain: process.env.MG_DM
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

//chunk 4
//dynamic stuff
//email, text, from
const sendMail = (subject, mailform, cb) => {
    const mailOptions = {
        from: 'lodgegreatwoof@gmail.com',
        to: 'lodgegreatwoof@gmail.com',
        subject: subject,
        text: mailform
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null);
        } else{
            cb(null, data);
        }
    });

}

module.exports = sendMail;