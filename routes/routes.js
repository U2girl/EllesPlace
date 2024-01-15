const express = require('express');
const routes = express.Router();
const SignIN = require('../mongo/models/signin/signIn.js');



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
    
    



module.exports = routes;