const router = require('express').Router()
const nodemailer = require('nodemailer')
module.exports = router

router.post('/', (req, res, next) => {
  console.log('dfhuashf', req)
  const {name, subject, details} = req.body

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'testnodemail14@gmail.com',
      pass: process.env.GMAILPW
    }
  })
  let mailOptions = {
    to: 'testnodemail14@gmail.com',

    from: 'testnodemail14@gmail.com',
    subject: `A Booking Request From ${name}: ${subject}`,
    text: details
  }
  transporter.sendMail(mailOptions, function(err) {
    err ? next(err) : res.sendStatus(200)
  })
})
