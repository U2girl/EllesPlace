const express = require('express');
const routes = express.Router();
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
            return res.status(400).render('Homepage', { messages: message, color:"red"});
        }
    
        const newMember = new SignIN({ name, email, password });
        const val= await newMember.save();
        console.log(val);
    
        const message = "Registration successful!";
        return res.render('Sign-in', { messages: message, color:"green"});
    } catch (error) {
        const message = "Oops! Something went wrong. Please try again.";
        console.error(error);
        return res.status(500).render('Sign-in', { messages: message });
    }
    });
    
    

    routes.get('/login', (req, res) => {
        res.render('Log-in');
      });
      
      routes.post('/loginsite', async (req, res) => {
        try {
            const LoginDetails = await SignIN.find();
           const result= LoginDetails.filter((details)=>{
            return req.body.password===details.password
            })
             console.log(result);
          
      
            if (result==0 || result== []) {
                const message = "You are not a member of this site, sign up here";
                return res.render('Sign-in', { messages: message, color: "red" });
            }
      
            // Check if password matches (you need to implement password comparison logic)
            // For simplicity, assuming password comparison function is named comparePasswords
            // Replace this with your actual logic.
      
            // If the email and password are correct, render the HomeView
             res.render('Homepage', { message:result});
      
        } catch (error) {
            console.log(error);
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




module.exports = routes;