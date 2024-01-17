const React =require('react');
export default function Login({messages, color}) {
  const styles = {
    HeroNav: {
      height: '500px',
      width: 'auto',
      backgroundImage: 'url("https://media.istockphoto.com/id/584573082/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=1024x1024&w=is&k=20&c=3N_VEsZpgLNpYC8QFvBi7FsjEJfDeFJup5c5zBjwqhs=")',
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
      color:'brown',
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
    sectionContainerintro: {
      flex: '1',
      paddingRight: '1px',
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
      color: '#390c0c',
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
      borderRadius:'20px',
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
     
    },

    form:{
        display: 'flex',
        flexDirection: 'column',
        padding:'40px',
        border:'2px white solid',
        color:'rgb(10, 33, 107)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
    
    }
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
          <li><a style={{textDecoration:'none',color: 'white'}}href="/Elle"><img style={{height: '30px', width: '30px'}} src="https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg" alt="none" /> Elles Bookings</a></li>
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
    <section>
    <div>
    <h2 style={{ ...styles.subconched, fontFamily: 'Arial', fontSize: '50px' }}>Log in</h2>
    <h3 style={{ color: color, textAlign: 'center' }}>{messages}</h3>
    <div class="form-container">
        <form style={{ ...styles.form }} action="/Elle/BookAHall" method='post'>
            <label htmlFor="name">Name:</label>
            <input type="name" name="name" placeholder="Enter your name" required /> 
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="location">Venue:</label>
            <select name="location" required>
                <option value="Hall 1">Hall 1</option>
                <option value="Hall 2">Hall 2</option>
                <option value="Hall 3">Hall 3</option>
                <option value="Hall 4">Hall 4</option>
                {/* Add more options as needed */}
            </select>

            <label htmlFor="date">Date:</label>
            <input type="date" name="date" required />

            <label htmlFor="time">Time:</label>
            <input type="time" name="time" required />

            <button style={{ backgroundColor: 'rgb(10, 33, 107)', color: '#fff' }} type="submit">Book</button>
            <button style={{ backgroundColor: 'rgb(10, 33, 107)', color: '#fff' }} type="submit">Update</button>
            <button style={{ backgroundColor: 'rgb(10, 33, 107)', color: '#fff' }} type="submit">Cancel</button>
            
        </form>
    </div>
</div>

         
         
         </section>
         </section>
              
         </div>
           
        
 <footer style={{...styles.Footer}}>
    <p style={{...styles.FooterCopyRight}}>&copy; 2024 Elle's Place</p>
  </footer>

  </div>

    
  );
  
}