const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./mongo/connect.js');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Logmarkup = require('./routes/routes.js');
require('dotenv').config();
const app = express();
// Middleware
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
app.use('/Elle', Logmarkup);

// Database Connection
connectDB();
// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});