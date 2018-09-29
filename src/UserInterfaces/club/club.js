import React from "react";

import "./club.css"
import ClubListContainer from '../club-list/club-list'
//import TitleFilterContainer from '../club-filter/club-filter'


const Club = () => {
  
 return  <div className="club">
 
    <main className="club-main">
        <ClubListContainer />
    </main>
  </div>
}

export default Club; 
