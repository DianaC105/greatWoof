const nodemailer = require("nodemailer");
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '0b4d1aec005db8c006086257c722ce7a-de7062c6-b05bf527',
        domain: 'sandbox2c99dd22c2f04eae97576e0e1f6ce1df.mailgun.org'
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