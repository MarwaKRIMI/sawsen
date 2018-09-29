import React from 'react'
import Club from "./club/club"
import Propos from '../AdminInterfaces/Propos'
import Banner from './banner/banner-slider'
import Evenement from '../AdminInterfaces/Evenement'
import Navbar from './navbar-user/navbar-user'
import Contact from '../AdminInterfaces/ContactPage'
import Footer from '../Footer'
class HomeUser extends React.Component{
    render() {
        return <div> 
              <Navbar/>
              <Banner/>
              <Propos id='à propos' />
              <Evenement id='evenement'/>
            
              <h1 className='clubss-title' style={{textAlign: 'center',
        marginTop: '50px',
        fontFamily:'Circular,Helvetica,Arial,sans-serif',
        backgroundColor: 'beige',
        width:'80%',
        marginLeft:'10%' }}>Clubs</h1>
              <Club id='clubs'/>
              <h1 className='clubss-title' style={{textAlign: 'center',
        marginTop: '50px',
        fontFamily:'Circular,Helvetica,Arial,sans-serif',
        backgroundColor: 'beige',
        width:'80%',
        marginLeft:'10%' }}>Contact</h1>
              <Contact id='contact'/>
              <Footer/>
             </div>
    }
}


export default HomeUser