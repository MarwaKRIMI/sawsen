import React from 'react'
import '../App.css'
import Propos from './Propos'

import Evenement from './Evenement'
import HomePage from './HomePage'
import Example from '../Example'
import Footer from '../Footer'
import Banner from '../UserInterfaces/banner/banner-slider'
class HomeAdmin extends React.Component{
    render() {
        return <div>
         
            <Example/>
            
            <Banner id='galery'/>
            <Propos id='propos'/>
            <Evenement id='evenement'/>
            <h1 className='clubss-title' style={{textAlign: 'center',
        marginTop: '50px',
        fontFamily:'Circular,Helvetica,Arial,sans-serif',
        backgroundColor: 'beige',
        width:'80%',
        marginLeft:'10%' }}>Clubs</h1>
            <HomePage id='club'/>
            <Footer/>

            </div>
    }
}

export default HomeAdmin