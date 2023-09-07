// Imports
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Configurações
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Rota para receber dados do form
app.post('/sendmail', (req, res) => {

  // obtém dados do form
  const { name, email, message } = req.body;
  
  // Cria transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    auth: {
      user: 'myemail@example.com',
      pass: 'senha'
    }
  });

  // Envia email
  transporter.sendMail({
    from: 'myemail@example.com', 
    to: 'destinatario@email.com',
    subject: 'Contato do Site',
    html: `<p>${name}</p>
           <p>${email}</p>
           <p>${message}</p>`
  });

  res.send('Enviado');

});

// Inicia servidor
app.listen(3000);