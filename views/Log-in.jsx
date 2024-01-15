const React =require('react');
export default function Login({messages, color}) {
  const styles = {
    HeroNav: {
      height: '500px',
      width: 'auto',
      backgroundImage: 'url("https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8fDA%3D")',
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
      fontSize:'xx-large',
      fontFamily:'Arial',
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
          <li><img src="" alt="none" /> dericol flowers</li>
          <li>about us</li>
          <li>what we stand for</li>
          <li>Drop a comment</li>
        </ul>
      </nav>
    </header>
    
  <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
    <section>
        <div>
        <h2 style={{...styles.subconched,fontFamily:'Arial',fontSize:'50px'}}>Log in</h2>
            <h3 style={{color:color,textAlign:'center'}}> {messages}</h3>
         <div class="form-container">
            <form style={{...styles.form}} action="/Elle/loginsite" method='post'>
                <label htmlFor="email">email:</label>
                <input type="email"  name="email" placeholder="enter your email" required/>
                <label htmlFor="password">Password:</label>
                <input type="password"  name="password" placeholder="enter your password"s required/>
                <button style={{backgroundColor:'rgb(10, 33, 107)',color:'#fff'}} type="submit">submit</button>
            </form>
         </div>
         
         </div>
         </section>
         </section>
              
         </div>      
         <footer style={{...styles.Footer}}>
    <p style={{...styles.FooterCopyRight}}>&copy; 2024 Your Company</p>
  </footer>

  </div>

    
  );
  
}  