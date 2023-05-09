const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const db = new sqlite3.Database('./my_database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the my_database database.');
});

app.get('/api/login', (req, res) => {
  const sql = 'SELECT * FROM user_login';

  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(rows);
  });
});

app.post('/api/login', (req, res) => {
  // Handle login request here
});

const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// create a nodemailer transporter with your email credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// create a route to handle orders
router.post('/api/orders', async (req, res) => {
  try {
    // get the order data from the request body
    const {
      businessname,
      name,
      flowertype,
      flowercolor,
      flower_amount,
      description,
      deliverydate,
    } = req.body;

    // send email to standing order email address
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'standing-order-email-address@gmail.com',
      subject: `New standing order from ${businessname}`,
      html: `
        <h1>New standing order from ${businessname}</h1>
        <p>Customer name: ${name}</p>
        <p>Flower type: ${flowertype}</p>
        <p>Flower color: ${flowercolor}</p>
        <p>Flower amount: ${flower_amount}</p>
        <p>Description: ${description}</p>
        <p>Delivery date: ${deliverydate}</p>
      `,
    });

    // send email to event/wedding order email address
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'event-wedding-order-email-address@gmail.com',
      subject: `New event/wedding order from ${businessname}`,
      html: `
        <h1>New event/wedding order from ${businessname}</h1>
        <p>Customer name: ${name}</p>
        <p>Flower type: ${flowertype}</p>
        <p>Flower color: ${flowercolor}</p>
        <p>Flower amount: ${flower_amount}</p>
        <p>Description: ${description}</p>
        <p>Delivery date: ${deliverydate}</p>
      `,
    });

    // send response to client
    res.status(200).json({ message: 'Order created successfully!' });
  } catch (error) {
    // send error response to client
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
