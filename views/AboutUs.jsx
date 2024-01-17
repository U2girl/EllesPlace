const React = require('react');

// Define your styled components with media queries

export default function HomeView() {
const styles = {
HeroNav: {
height: '500px',
width: 'auto',
backgroundImage: 'url("https://www.princehotels.com/shinyokohama/wp-content/uploads/sites/8/2019/06/Z7T7769%E5%B0%8F.jpg")',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
},
HeaderNav: {
display: 'flex',
flexDirection: 'row-reverse',
},
Navul: {
height: '30%',
width: '100%',
padding: '50px',
display: 'flex',
justifyContent: 'space-around',
listStyle: 'none',
fontSize:'large',
fontFamily:'Georgia',
color:'white',
},
sectionContainer: {
marginTop: '50px',
},
section: {
marginTop: '1px',
height: 'auto',
border: '2px solid ',
display: 'flex',
flexDirection:'column',
justifyContent: 'space-between',
alignItems: 'center',
padding: '80px',
boxSizing: 'border-box',
},
textContent: {
flex: '1',
padding: '0 20px',
},
header:{
textAlign:'center',
},
sectionContainerintro: {
flex: '1',
paddingRight: '1px',
},
myImage: {
textAlign: 'center',
},
Image: {
maxWidth: '500px',
height: 'auto',
borderRadius: '8px',
marginBottom: '20px',
boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
},
imageAndButtonContainer: {
position: 'relative',
padding: '20px',
},
myButton: {
position: 'absolute',
top: '-10px',
right: '-30px',
backgroundColor: '#3498db',
color: '#fff',
padding: '30px 20px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
},
subContainerDiv: {
display: 'grid',
backgroundColor: '#390c0c',
color: 'white',
gridTemplateColumns: '1fr 1fr 1fr',
gridTemplateRows: 'auto',
gap: '5px',
margin: '10px 0',
},
subContainerCard: {
maxWidth: '100%',
height: 'auto',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
},
subContainerImage: {
maxWidth: 'auto',
height: '100px',
paddingTop: '20px',
borderRadius: '50px',
marginBottom: '20px',
},
subContainerParagraph: {
textAlign: 'center',
margin: '0',
padding: '10px',
fontFamily: 'OldStandardTT, sans-serif',
fontFize: 'small',
},
subContainerButton: {
backgroundColor: '#3498db',
color: '#fff',
padding: '10px 10px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
},
subconched: {
color: '#fff',
textAlign: 'center',
backgroundColor: '#390c0c',
padding: '20px',
},
paragraph:{
lineHeight:"40px",
textAlign: 'center',
},
Footer: {
backgroundColor:'rgb(10, 33, 107)',
color: '#fff',
padding: '20px',
textAlign:'center',
},

FooterA: {
color: 'red',
textDecoration: 'none',
textAlign:'center',
},
};

const mediaQuerystylesMobile = {
'@media only screen and (max-width: 768px)': {
HeroNav: {
height: '200px',
},
Navul: {
padding: '10px',
display: 'flex',
},
section: {
display: 'flex',
flexDirection: 'column',
padding: '10px',
alignItems: 'center', // Align items to the center in column layout
},
Image: {
height: 'auto',
width: '10%', // Set the width to 100% for full responsiveness
marginBottom: '40px', // Fix the typo here
},
imageAndButtonContainer: {
padding: '5px',
display: 'flex',
// Align items to the center in column layout
},
myButton: {
top: '10px', // Adjusted top value
right: '0', // Adjusted right value
padding: '10px',
position: 'static', // Adjusted position to static
},
},
};
return (
    <div>
    <header style={{...styles.HeroNav,...mediaQuerystylesMobile.HeroNav}} className="hero-nav">
      <nav style={styles.HeaderNav}>
        <ul style={{...styles.Navul,...mediaQuerystylesMobile.Navul}}>
          <li><a style={{textDecoration:'none',color: 'white'}}href="/Elle"><img style={{height: '30px', width: '30px'}} src="https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg" alt="none" /> Elle's Place</a></li>
          <li> <a style={{textDecoration:'none',color: 'white'}}href="/Elle/AboutUs">About us</a></li>
          <li> <a style={{textDecoration:'none',color: 'white'}}href="/Elle/login">Log In</a></li>
          <li> <a style={{textDecoration:'none',color: 'dark purple'}}href="/Elle/SignIn">Sign In</a></li>
          <li> <a style={{textDecoration:'none',color: 'white'}}href="/Elle/login">Log Out</a></li>
          <li> <a style={{textDecoration:'none',color: 'white'}}href="/Elle/bookedhalls">Book Hall</a></li>
        </ul>
      </nav>
    </header>
    
  <div style={{...styles.sectionContainer}}>
   
    <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
       <div style={{...styles.textContent,...styles.sectionContainerintro}}>
        <h2 style={{...styles.header}}> About Us</h2> 
       <p style={{...styles.paragraph}}> Elle's Place is a modern industrial event venue in the heart of Italian Village in downtown Columbus, Ohio. The urban event space features an open floor plan and an outdoor courtyard.

Constructed in a historic early 1900s industrial building, the venue features exposed brick, high ceilings, arched windows, and polished concrete floors. Modern fixtures and décor highlight the original structure, including the wood trellis wall with preserved moss, globe lights, and the built-in statement bar with a reclaimed bar front.

With over twenty years of experience planning and executing events, excellence is part of everything we do. Our dedicated staff takes pride in the details and will be there to make your day stress-free.
                       

        </p>
        
    </div>
    </section>
   

    

 <footer style={{...styles.Footer}}>
    <p style={{...styles.FooterCopyRight}}>&copy; 2024 Elle's Place</p>
   
  </footer>

  </div>
  </div>
  </div>

    
  );
  
}