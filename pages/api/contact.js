require('dotenv').config();


export default function handler(req, res) {
    const body = JSON.parse(req.body)
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: "gmail",
        user: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "login",
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        }
    })

    const mailData= {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_EMAIL,
        subject: `Message From ${body.name} via contact form`,
        text: body.message + " | Sent from: " + body.email,
        html: `<div>${body.message}</div><p>Sent from:
        ${body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            res.status(405).json({err})
        else
            res.status(200).json({info})
      })
};