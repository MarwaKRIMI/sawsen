
import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from'reactstrap';
import echange from '../images/12400905_955801001156022_2687045831302683993_n.jpg'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './Evenements.css'
const Evenement = (props) => {
  return (
    <div id='evenement'>
        <h1 className='event-title' >Evenement</h1>
     <div style={{display:'flex' ,justifyContent:'space-around',marginTop:'10%'}}>
   
      <Card className="card-style" style={{width:"30%"}}>
    
        <CardImg  width="10%" height='50%' src="http://www.brousselechateau.net/userfile/images/ACTU/jeuxbois2.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Compétitions construction en bois</CardTitle>
          <CardSubtitle>Le 25 November 2019 09:00 am - 14:00 pm</CardSubtitle>
         
          <CardText   style={{fontSize:'15px'}} className='event-txt'>La maison des jeunes organisera des une compétitions sous le thème construction 
            en bois 
          </CardText>
    
          <button type="button" className="btn-event">Details</button>
       
        </CardBody>
      </Card>
      <Card className="card-style" style={{width:"30%"}}>
  
        <CardImg  
        width="10%" height='50%' src={echange} alt="Card image cap" />
        <CardBody>
          <CardTitle>Echange culturel</CardTitle>
          <CardSubtitle>23 - 24 December 2018</CardSubtitle>
          <CardText  style={{fontSize:'15px'}} className='event-txt'> Nous avons choisi  la maison des jeunes de Tozeur avec qui on va faire un échange culturel</CardText>
          <button type="button" className="btn-event">Details</button>
        </CardBody>
      </Card>
      <Card  className="card-style" style={{width:"30%"}}>
    
        <CardImg  
        width="10%" height='50%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqfEvrYYwdjPqso60LDLpsq3j3gpFDenFs2-Iplsg8Jklnyrd" alt="Card image cap" />
        <CardBody>
          <CardTitle>
Soirée films d’horreurs et cache-cache</CardTitle>
        <CardSubtitle>Le 5 juillet 2018 6:00 pm - 10:30 pm</CardSubtitle>
          <CardText  style={{fontSize:'15px'}} className='event-txt'>La maison des jeunes organise une soirée cache-cache dans le noir à la Barak.</CardText>

        

          <button type="button" className="btn-event">Details</button>
        </CardBody>
      </Card>
      </div>
      <div style={{display:'flex' ,justifyContent:'space-around',marginTop:'5%'}}>
      <Card className="card-style" style={{width:"30%"}}>

        <CardImg  
        width="10%" height='50%' src="http://www.funsensations.com/upload/louer_jeu_gonflable_joutes_gonflables_location_gonflable_auray_vannes_lorient_saint-brieuc.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jeu gonflable</CardTitle>
          <CardSubtitle> Le  October 5:45 pm - 7:00 pm</CardSubtitle>
          <CardText  style={{fontSize:'15px'}} className='event-txt'>Notre maison animera la soirée du jeu gonflable sous la thématique Quizz et Jeux. </CardText>
          <button type="button" className="btn-event">Details</button>
        </CardBody>
      </Card>
      <Card className="card-style" style={{width:"30%"}}>
    
        <CardImg  width="10%" height='50%' src="data:image/jpeg;base64,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" alt="Card image cap" />
        <CardBody>
          <CardTitle>Projection de film extérieur</CardTitle>
          <CardSubtitle>Le 20 October 7:00 pm - 9:00 pm</CardSubtitle>
          <CardText  style={{fontSize:'15px'}} className='event-txt'>La maison des jeunes  invite la population a une projection de film extérieur.</CardText>
          <button type="button" className="btn-event">Details</button>
        </CardBody>
     
      </Card>
  
      <Card className="card-style" style={{width:"30%"}}>
   
        <CardImg  width="10%" height='50%' src="data:image/jpeg;base64,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" alt="Card image cap" />
        <CardBody>
          <CardTitle>Soirée porte ouverte</CardTitle>
          <CardSubtitle>Le 11 October 2018 4:00 pm - 9:00 pm</CardSubtitle>
          <CardText  style={{fontSize:'15px'}}className='event-txt'> La Maison des jeunes vous invite à ses portes ouvertes, qui aura lieu le jeudi 11 octobre 2018.</CardText>
          <button type="button" className="btn-event">Details</button>
        </CardBody>
      </Card>
      
      </div>
  
    </div>
  );
};



export default Evenement;