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
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
       <div style={{...styles.textContent,...styles.sectionContainerintro}}>
        <h2 style={{...styles.header}}> The Topiary Room</h2> 
      <p style={{...styles.paragraph}}> Book the Topiary Room for your next event! The Topiary room is our largest meeting space at 3000 square feet. It’s a large open environment with a maximum capacity of 250 guests that can be divided into two sections. The Blossoms room is great for trade shows, job fairs, gaming groups, political conventions, graduations, church and religious events, speaker events for marketing groups and much more. Exhibit space is located directly next to the Edison Room.  All of our meeting rooms offer state the art technology, with high speed wired and wireless internet!                   

        </p>
    </div>
    <div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
        <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
            <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://thestarsinside.com/wp-content/uploads/2020/04/gorgeous-tall-tree-wedding-centerpieces-To-impress-your-guests.jpg" alt="2"/>
            
             <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}><a href="/Elle/Book">Book Hall</a></button>
         </div>
    </div>
    </section>
    <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
       <div style={{...styles.textContent,...styles.sectionContainerintro}}>
        <h2 style={{...styles.header}}> The Canopy Room</h2> 
       <p style={{...styles.paragraph}}> Perfect for company meetings, presentations, lectures, religious sermons and retreats, large team building events, gaming groups, large classes, group discussions, small fitness or yoga classes, club meetings and much more. Our medium sized meeting rooms provide the perfect space to accommodate up to 70 guests. If you’d like help arranging your meeting room in Columbus, then be sure to ask us how we can help you setup your meeting space. 
                       

        </p>
    </div>
    <div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
        <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
            <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://www.brides.com/thmb/pWUR57Zp2HiN_d9t47Wdr5HrazI=/1050x1050/filters:no_upscale():max_bytes(150000):strip_icc()/re-2da7cd5dab5a453fb4fdf0fcb5ef9611.jpg" alt="2"/>
            
            <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}><a href="/Elle/Book">Book Hall</a></button>
         </div>
    </div>
    </section>
    <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
       <div style={{...styles.textContent,...styles.sectionContainerintro}}>
        <h2 style={{...styles.header}}> The Glass Room</h2> 
       <p style={{...styles.paragraph}}> Perfect for job fairs, political conventions, trade shows, awards celebrations, large lectures, casino events, town hall meetings, religious sermons and retreats, large fitness or yoga classes and much more. If you have any questions about the availability of our meeting rooms, then be sure to contact us to find out if the combined meeting rooms are available.
                       

        </p>
    </div>
    <div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
        <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
            <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://www.theknot.com/tk-media/images/2c80fca0-cd62-4404-8bab-7152674314c1" alt="2"/>
            
            <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}><a href="/Elle/Book">Book Hall</a></button>
         </div>
    </div>
    </section>
    </div>
    <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
       <div style={{...styles.textContent,...styles.sectionContainerintro}}>
        <h2 style={{...styles.header}}> The Pastel Room</h2> 
       <p style={{...styles.paragraph}}> Perfect for job fairs, political conventions, trade shows, awards celebrations, large lectures, casino events, town hall meetings, religious sermons and retreats, large fitness or yoga classes and much more. If you have any questions about the availability of our meeting rooms, then be sure to contact us to find out if the combined meeting rooms are available.
                       

        </p>
    </div>
    <div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
        <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
            <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://onefabday.com/wp-content/uploads/2016/07/Virginia-Park-Lodge-Large-wedding-venues-in-Ireland-wedding-venues-200-capacity-Ireland-wedding-venues-300-capacity-2.jpg" alt="2"/>
            
            <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}><a href="/Elle/Book">Book Hall</a></button>
         </div>
    </div>
    </section>
    </div>
    <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
       <div style={{...styles.textContent,...styles.sectionContainerintro}}>
        <h2 style={{...styles.header}}> The Swan Room</h2> 
       <p style={{...styles.paragraph}}> Perfect for job fairs, political conventions, trade shows, awards celebrations, large lectures, casino events, town hall meetings, religious sermons and retreats, large fitness or yoga classes and much more. If you have any questions about the availability of our meeting rooms, then be sure to contact us to find out if the combined meeting rooms are available.
                       

        </p>
    </div>
    <div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
        <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
            <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://www.shutterstock.com/image-photo/wedding-hall-decoration-260nw-1349108369.jpg" alt="2"/>
            
            <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}><a href="/Elle/Book">Book Hall</a></button>
         </div>
    </div>
    </section>
    </div>
    <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
       <div style={{...styles.textContent,...styles.sectionContainerintro}}>
        <h2 style={{...styles.header}}> The Polaris Room</h2> 
       <p style={{...styles.paragraph}}> Perfect for job fairs, political conventions, trade shows, awards celebrations, large lectures, casino events, town hall meetings, religious sermons and retreats, large fitness or yoga classes and much more. If you have any questions about the availability of our meeting rooms, then be sure to contact us to find out if the combined meeting rooms are available.
                       

        </p>
    </div>
    <div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
        <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
            <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="data:image/jpeg;base64,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" alt="2"/>
            
            <a href="/Elle/Booking"><button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}>Book Hall</button></a>
         </div>
    </div>
    </section>
    </div>

    

 <footer style={{...styles.Footer}}>
    <p style={{...styles.FooterCopyRight}}>&copy; 2024 Elle's Place</p>
   
  </footer>

  </div>
  </div>
  </div>

    
  );
  
}