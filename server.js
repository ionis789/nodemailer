const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 456,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL, //Sender gmail address
        pass: process.env.APP_PASSWORD, // App password from Gmail account
    },
});

const mailOptions = {
    from: {
        name: "Ion Socol CEO",
        address: process.env.MAIL
    },
    to: "ionionis789@gmail.com", // list of receivers
    subject: "Salut de la Felix ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
};

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent!");
    } catch (error) {
        console.error(error);
    }
}
sendMail(transporter, mailOptions);