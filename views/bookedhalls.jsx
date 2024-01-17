const React = require('react')

export default function update({myComments}) {
  
   
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
          <li> <a style={{textDecoration:'none',color: 'white'}}href="/Elle/bookedhalls">Booked Hall</a></li>
        </ul>
      </nav>
    </header>
        
      <div style={{...styles.sectionContainer}}>
        <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
        <section>
            <div>
            <div>

        <h1 style={{ fontFamily:'Garamond',fontSize:'xx-large',textAlign:'center'}}>Booked Hall</h1>
    <ul style={{listStyle:"none"}}>
  {myComments.map((comment) => (
    <li key={comment._id}>
      <div style={{textAlign:'center'}}>
        <p><strong>Location:</strong> {comment.location}</p>
        <p><strong>Date:</strong> {comment.date instanceof Date ? comment.date.toLocaleString() : comment.date}</p>
        <p><strong>Time:</strong> {comment.time}</p>
        <div style={{display:'flex',FlexDirection: 'row', justifyContent:'space-between'}}>
          <button style={{...styles.myButton}}>
            <a style={{ textDecoration:'none',color:'white'}}href={`/Elle/edit/${comment._id}`}>
              Update booking plan
            </a>
          </button>  

          <button style={{...styles.myButton}}>
            <a  style={{ textDecoration:'none', color:'white'}}href={`/Elle/delete/${comment._id}`}>
              Delete booking plan
            </a>
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>

            </div>
             </div>
             </section>
             
             </section>
    
             </div> 
             </div>
  )
}      