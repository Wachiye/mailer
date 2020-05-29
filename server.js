const nodemailer = require('nodemailer'); 

  

  
let mailTransporter = nodemailer.createTransport({ 

    service: 'gmail', 

    auth: { 

        user: process.env.USERNAME, 

        pass: process.env.PASSWORD

    } 
}); 

  
let mailDetails = { 

    from: 'jerrysirah8@gmail.com', 

    to: 'siranjofuw@gmail.com', 

    subject: 'Test mail', 

    text: 'Node.js testing mail functionality'
}; 

  

mailTransporter.sendMail(mailDetails, function(err, data) { 

    if(err) { 

        console.log('Error Occurs'); 

    } else { 

        console.log('Email sent successfully'); 

    } 
}); 
