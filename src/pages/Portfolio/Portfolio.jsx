import React, { useContext } from 'react';
import './Portfolio.css';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

function Portfolio() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="portfolio-container">
      <div className="portfolio-row">
        <div className={darkMode ? 'port-dark portfolio-1' : 'port-light portfolio-1'}>
          <div className="port-top">
            <img
              src="src/assets/photos/d93e089e-eee7-46ea-9ff6-3c87830453b0.jpeg"
              alt="Photo of me"
              className="port-1-img"
            />
          </div>
          <div className="port-bottom">
            <h3>Project name</h3>
            <p>
              Short description of the project highlighting the features and your contribution /
              Short description of the project highlighting the features and your contribution
            </p>
            <div className="button-container">
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">View</Link>
              </button>
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">Visit</Link>
              </button>
            </div>
          </div>
        </div>

        <div className={darkMode ? 'port-dark portfolio-2' : 'port-light portfolio-2'}>
          <div className="port-top">
            <img
              src="src/assets/photos/d93e089e-eee7-46ea-9ff6-3c87830453b0.jpeg"
              alt="Photo of me"
              className="port-2-img"
            />
          </div>
          <div className="port-bottom">
            <h3>Project name</h3>
            <p>
              Short description of the project highlighting the features and your contribution /
              Short description of the project highlighting the features and your contribution
            </p>
            <div className="button-container">
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">View</Link>
              </button>
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">Visit</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-row">
        <div className={darkMode ? 'port-dark portfolio-3' : 'port-light portfolio-3'}>
          <div className="port-top">
            <img
              src="src/assets/photos/d93e089e-eee7-46ea-9ff6-3c87830453b0.jpeg"
              alt="Photo of me"
              className="port-3-img"
            />
          </div>
          <div className="port-bottom">
            <h3>Project name</h3>
            <p>
              Short description of the project highlighting the features and your contribution /
              Short description of the project highlighting the features and your contribution
            </p>
            <div className="button-container">
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">View</Link>
              </button>
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">Visit</Link>
              </button>
            </div>
          </div>
        </div>

        <div className={darkMode ? 'port-dark portfolio-4' : 'port-light portfolio-4'}>
          <div className="port-top">
            <img
              src="src/assets/photos/d93e089e-eee7-46ea-9ff6-3c87830453b0.jpeg"
              alt="Photo of me"
              className="port-4-img"
            />
          </div>
          <div className="port-bottom">
            <h3>Project name</h3>
            <p>
              Short description of the project highlighting the features and your contribution /
              Short description of the project highlighting the features and your contribution
            </p>
            <div className="button-container">
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">View</Link>
              </button>
              <button>
                <Link to="https://github.com/jungwonJung/Space-Next">Visit</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
