const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');


app.use(bodyParser.urlencoded({ extended: true }));
//app.use(methodOverride('_method'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(morgan('tiny'));
app.use(express.json());



app.get('/Sign-In', (req, res) => {
    res.render('Sign-In');
  });

  app.get('/Log-In', (req, res) => {
    res.render('Log-In');
  });
  
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });