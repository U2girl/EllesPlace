const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');
const SignIN = require('../mongo/models/signin/signIn.js');
const BookAHall = require('../mongo/models/booking/booking.js');



routes.use(express.json());
routes.get('/', (req, res) => {
    res.render('Homepage');
})




routes.get('/SignIn',(req,res)=>{
    res.render('Sign-in');
    
    })
    
    routes.post('/SignInClient', async (req, res) => {
      try {
          const { name, email, password } = req.body;
  
          // Validate that required fields are present
          if (!name || !email || !password) {
              const message = "Please provide all required fields.";
              return res.status(400).render('Sign-in', { messages: message, color: "red" });
          }
  
          // Hash the password
          bcrypt.hash(password, 10, async (err, hashedPassword) => {
              if (err) {
                  console.error('Error generating hash:', err);
                  return res.status(500).render('Sign-in', { messages: "Internal Server Error" });
              }
  
              // Save the user with the hashed password
              try {
                  const newMember = new SignIN({ name, email, password: hashedPassword });
                  const savedMember = await newMember.save();
                  console.log(savedMember);
  
                  const message = "Registration successful!";
                  return res.render('Sign-in', { messages: message, color: "green" });
              } catch (error) {
                  console.error('Error saving user to the database:', error);
                  return res.status(500).render('Sign-in', { messages: "Internal Server Error" });
              }
          });
      } catch (error) {
          const message = "Oops! Something went wrong. Please try again.";
          console.error(error);
          return res.status(500).render('Sign-in', { messages: message });
      }
  });
    routes.get('/AboutUs', (req, res) => {
        res.render('AboutUs');
      });
    

    routes.get('/login', (req, res) => {
        res.render('Log-in');
      });
      
      routes.post('/loginsite', async (req, res) => {
        try {
            const { email, password } = req.body;
    
            // Validate that required fields are present
            if (!email || !password) {
                const message = "Please provide both email and password.";
                return res.status(400).render('Sign-in', { messages: message, color: "red" });
            }
    
            // Find the user by email
            const user = await SignIN.findOne({ email });
    
            if (!user) {
                const message = "You are not a member of this site, sign up here";
                return res.render('Sign-in', { messages: message, color: "red" });
            }
    
            // Compare the provided password with the hashed password using bcrypt
            bcrypt.compare(password, user.password, (err, passwordMatch) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    return res.status(500).render('Sign-in', { messages: "Invalid input" });
                }
    
                if (passwordMatch) {
                    // Passwords match, render the HomeView
                    res.render('Homepage', { message: user });
                } else {
                    // Passwords do not match
                    const message = "Incorrect password. Please try again.";
                    res.render('Sign-in', { messages: message, color: "red" });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });
//.......................Booking Section.................................
      routes.get('/Book', async (req, res) => { 
        res.render('Booking');
      });




routes.post('/BookAHall', async (req, res) => {
    try {
        const{name,email,location,date,time}=req.body;
       const  newBooking=new BookAHall({
        name,
        email,
        location,
        date,
        time
  
      })  
      const val=await newBooking.save();
      console.log(val);
       const message="Booked,thanks for your patronage!:)";
       res.render('Booking',{messages:message, color:"green"});
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  });

//.......................Delete.................................
routes.get('/delete/:id', async (req, res) => {
  try {
    await BookAHall.findByIdAndDelete(req.params.id);
    res.render('Homepage')
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});
//.......................Update.................................

routes.get('/edit/:id', async (req, res) => {
  try {
    const myId = req.params.id;
    const myOutput = await BookAHall.findById(myId);
    if(!myOutput){ res.render('Sign-in',{messages:"Sign up needed"})}
    res.render('Updates', {myOutput }); 

  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

//.......................Update Form.................................
routes.post('/update/:id', async (req, res) => {
  try {
    const {  name,email,location,date,time } = req.body;
    
    // Convert "on" to true and an empty string to false

     await BookAHall.findByIdAndUpdate(req.params.id, { name,email,location,date,time})
     res.render('Homepage')
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

//........................Booked List.....................................................
routes.get('/BookedHalls',async(req, res) => {
  const allComments=  await BookAHall.find();
   res.render('bookedhalls',{myComments:allComments})
 
 })


module.exports = routes;