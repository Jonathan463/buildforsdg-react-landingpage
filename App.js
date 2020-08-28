import React from 'react';
import './App.css';

function App() {
  return (
    <div >
      <div className="Blue-overlay">
      <section>
        <header>
          <img src="./images/EhrIcon.jpg" width="100" alt="logo" />
          <div>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
            </ul>
          </div>
        </header>
      </section>

      <section id="main">
        <div className="main-text"><span>Electronic Hospital Record. <br></br>Promoting Fast Medical Attention</span>
        </div>
        <img src="./images/ehricon.jpg" width="500" height="200" alt="ehr-main" />
      </section>
      </div>
      <footer id="main-footer">
          <div>
            <h3>Electronic Hospital Record</h3>
            <h3>Copyright @2020</h3>
          </div>
      </footer>
    </div>
  );
}

export default App;
