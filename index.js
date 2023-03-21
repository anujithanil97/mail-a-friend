const nodemailer = require ("nodemailer");
let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:"anujithanil24@gmail.com",
        pass:"wapj wcpl hcvj lucq"
    }
})

let details = {
    from: "anujithanil24@gmail.com",
    to:"anilanujith07@gmail.com",
    subject: "Testing nodemailer",
    text: "testing our first sender"
}

mailTransporter.sendMail(details,err =>{
    if (err) {
        console.log("it has an error!!",err)
    }
    else{
        console.log("email sent")
    }
})