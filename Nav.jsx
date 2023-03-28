import React from 'react'
import './Nav.css'
import NetflixAvatar from "./assets/Netflix-avatar.png"
import NetflixLogo from "./assets/netflixlogo.png"


function Nav() {

    const [show,setShow] = React.useState(false)

    const transNavBar = ()=>{
        if (window.scrollY > 100){
            setShow(true)
        }else {
            setShow(false)
        }
    }
    
    React.useEffect(()=>{
        window.addEventListener("scroll",transNavBar)
    return()=> window.removeEventListener("scroll",transNavBar)
    }, [])


  return (
    <div className={`nav ${show && `nav--black`}`}>
        <div className="nav--content">   
        <img  className='nav--logo' src={NetflixLogo} 
        alt="" />
        
        <img className="nav--avatar"src={NetflixAvatar}
         alt="" />
         </div>
     
    </div>
  );

}

export default Nav