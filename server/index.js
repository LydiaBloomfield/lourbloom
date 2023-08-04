const path = require('path')
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.resolve(__dirname, '../build')))
app.use(cors())
app.use(bodyParser.json())

const URL = "https://portfolio-contact-form-vv0z.onrender.com"

app.get(URL + "/", (req,res) =>{
    res.json({message: "Hello from server"})
})


app.get(URL + "/api", (req,res) =>{
    res.json({message: "Hello from server"})
})

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
})

contactEmail.verify((error) =>{
    if(error){
        console.log(error)
    } else{
        console.log("Ready to send")
    }
})

app.post(URL + "/api/contact", bodyParser.urlencoded({extended: false}), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body. message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
        `
    }
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error);
        }else{
            res.json({code:200, status: "Message sent"})
        }
    })
})

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../build", 'index.html'))
})

app.listen(PORT, ()=> {
    console.log(PORT)
})