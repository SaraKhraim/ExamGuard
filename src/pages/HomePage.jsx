import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";




const HomePage = ({title}) => {
  
    return (
      <React.Fragment>
        <NavBar/>
        <SideBar/>
        
      </React.Fragment>
    );
};

export default HomePage;