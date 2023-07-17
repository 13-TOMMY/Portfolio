import React, {useContext} from 'react'
import "./Homepage.css"
import { ThemeContext } from '../../context/ThemeContext';

function Homepage() {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  return (
    <div className='Homepage-container'>
      <div className="hp-top">
      <div className={darkMode ? "hp-top-left-dark hp-top-left" : "hp-top-left-light hp-top-left"}>
      <h1 className={darkMode ? 'dark-text' : 'light-text'}>Front-end Developer</h1>
          <p className={darkMode ? 'dark-text' : 'light-text'}>
            Hello, I am Tomasz Lis, an enthusiastic Front-end Developer based in Krakow, Poland. I
            love coding and I believe in the power of continuous learning, expanding my knowledge
            and skills every day.
          </p>
      </div>
      <div className={darkMode ? "hp-top-right-dark hp-top-right" : "hp-top-right-light hp-top-right"}>
      <img src='src/assets/photos/IMG_8014.jpeg' alt="Photo of me" className='hp-top-right-img'/>
      </div>
      </div>
      <div className={darkMode ? "hp-bottom-dark hp-bottom" : "hp-bottom-light hp-bottom"}>
      <div className="hp-bottom-techStack">
        <div className='ts-name'>
        <h3 className={darkMode ? 'dark-text' : 'light-text'}>Tech Stack</h3>
      </div>
      <div className='tech-stack'>
      <img src="src/assets/Tech-Stack/javascript.svg" alt="JavaScript icon" />
      <img src="src/assets/Tech-Stack/react-dark.svg" alt="React icon" />
      <img src="src/assets/Tech-Stack/html.svg" alt="HTML icon" />
      <img src="src/assets/Tech-Stack/css.svg" alt="CSS icon" />
      <img src="src/assets/Tech-Stack/git.svg" alt="Git icon" />
      <img src="src/assets/Tech-Stack/oading-one.svg" alt="loading" />
      <img src="src/assets/Tech-Stack/oading-one.svg" alt="loading" />
      <img src="src/assets/Tech-Stack/oading-one.svg" alt="loading" />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage