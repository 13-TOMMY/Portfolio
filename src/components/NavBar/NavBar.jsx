import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import { BiHomeAlt2, BiUser, BiLibrary, BiPaperPlane, BiSun, BiMoon, BiSolidMoon } from "react-icons/bi";
import Switch from 'react-switch';
import { ThemeContext } from '../../context/ThemeContext';

function NavBar() {
  const {darkMode, setDarkMode } = useContext(ThemeContext);

  const handleChange = (isChecked) => {
    setDarkMode(isChecked);
  }

  return (
    <div className='nav-container'>
      <div className='top-icon-container'>
        <div className='top'>
          <Link to="/"><BiHomeAlt2 className={darkMode ?"dark-icon icon":"light-icon icon"}/></Link>
          <Link to="/about"><BiUser className={darkMode ?"dark-icon icon":"light-icon icon"} /></Link>
        </div>
        <div className='bottom'>
          <Link to="/portfolio"><BiLibrary className={darkMode ?"dark-icon icon":"light-icon icon"} /></Link>
          <Link to="/contact"><BiPaperPlane className={darkMode ?"dark-icon icon":"light-icon icon"} /></Link>
        </div>
      </div>
      <div className='bottom-icon-container'>
        <img src="src/assets/logo.svg" alt="Logo: TOMMY" />
        <div className="dark-light-mode">
          <label htmlFor="material-switch">
          <Switch
               checked={darkMode}
               onChange={handleChange}
               handleDiameter={28}
               offColor="#FFFFFF"
               onColor="#000000"
               offHandleColor="#FFDB58"
               onHandleColor="#0368b2"
               height={40}
               width={70}
               borderRadius={6}
               activeBoxShadow="0px 0px 1px 2px #fffc35"
               uncheckedIcon={
                  <div
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     height: "100%",
                     fontSize: 15,
                     color: "grey",
                     paddingRight: 2
                  }}
                  >
                  <BiMoon />
                  </div>
               }
               checkedIcon={
                  <div
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     height: "100%",
                     fontSize: 15,
                     color: "gray",
                     paddingRight: 2
                  }}
                  >
                  <BiSun />
                  </div>
               }
               uncheckedHandleIcon={
                  <div
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     height: "100%",
                     color: "White",
                     fontSize: 20
                  }}
                  >
                  <BiSun />
                  </div>
               }
               checkedHandleIcon={
                  <div
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     height: "100%",
                     color: "White",
                     fontSize: 18
                  }}
                  >
                  <BiSolidMoon />
                  </div>
               }
               className="react-switch"
               id="small-radius-switch"
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
