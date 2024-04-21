import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import MenuList from '../components/MenuList';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';


 const ConfirmationPage = () => {
    const videoUrl = 'C:\\Users\\sarak\\OneDrive\\Pictures\\Camera Roll\\WIN_20240413_14_40_24_Pro.mp4';

  return (
    <React.Fragment>
        <NavBar/>
        <SideBar/>

        <div className='container min-vh-50 d-flex flex-column justify-content-center align-items-center'>
            <div className="mb-3">
                <VideoPlayer src={videoUrl} height={300} width={600}/> 
            </div>
            <div className="row text-center">
                <div className="col">
                    <button type="button" className="btn btn-danger btn-lg">Deny</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success btn-lg me-2">Confirm</button>
                </div>
                
            </div>
        </div> 
    </React.Fragment>
    

    
);
    
};


export default ConfirmationPage