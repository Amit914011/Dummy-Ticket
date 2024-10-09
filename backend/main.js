const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const db=require('./dbConfig.js')
const loginRoute= require('./route/route')

const app = express();
const PORT = 3000;
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(express.json())

// Data base Connection
db.connect((err,result)=>{
  if(err) throw err
  else{
      console.log("DataBase connected")
  }
})


// Route to send OTP via email
app.post('/send-sms', async (req, res) => {
  const { email, name,number,from,to, departureDate,adults,children,travelClass,type } = req.body;

  // Create a transporter for NodeMailer using your email credentials
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amitmrj914011@gmail.com', // Your email
      pass: 'azsw pqru lywb hcxt', // Your email password (or app-specific password)
    },
  });

  let mailOptions = {
    from: 'amit@techxpert.in', // Sender email
    to: email, // Receiver's email (from frontend)
    subject: 'Dummy Ticket Confirmation Email',
    text: `Hello ${name} Number ${number} email ${email} from ${from} to ${to} departureDate ${departureDate} adults ${adults} children ${children} travelClass ${travelClass} type ${type}`,
    html:`<h1>Hello! - ${name} </h1>
    <table border="1">
    <tr>
    <th>Name</th><th>Number</th><th>Email</th><th>From</th><th>To</th><th>DepartureDate</th><th>Adults</th>  <th>Children</th><th>TravelClass</th><th>Type</th>
    </tr>
    <tr>
    <td>${name}</td><td>${number}</td><td>${email}</td><td>${from}</td><td>${to}</td><td>${departureDate}</td>
    <td>${adults}</td><td>${children}</td><td>${travelClass}</td><td>${type}</td>
    </tr>
    </table>` // Email content
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Confirm your order successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error sending email');
  }
});

app.use('/api',loginRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
