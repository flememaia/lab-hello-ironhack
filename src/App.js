import logo from './logo.svg';
import ironhackLogo from "./assets/images/ironhack-logo.svg";
import menuTop from "./assets/images/menu-top.svg";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="Container">
            <img src={ironhackLogo} className="Container-img" alt="Logo da IronHack" />
            <img src={menuTop} className="Container-img" alt="Imagem do símbolo menu" />
          </div>
          <div>
            <h1 className="Title">Say Hello to <br></br>ReactJS</h1>
            <h2 className="Subtitle">You will learn how to use<br></br>the most popular frontend library<br></br>and become a super Ninja developer</h2>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome!
            </a>
          </div>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
      </header>
      <div className="Container-table">
            <div className="row tile-row">
                <div className="col-3">
                  <img src={icon1} className="xxx" alt="xxxx" />
                </div>
                <div className="col-3">
                  <img src={icon2} className="xxx" alt="xxxx" />
                </div>
                <div className="col-3">
                  <img src={icon3} className="xxx" alt="xxxx" />
                </div>
                <div className="col-3">
                  <img src={icon4} className="xxx" alt="xxxx" />
                </div>
            {/* </div>
            <div className="row tile-row"> */}
                <div className="col-3">
                  <h3>Declarative</h3>
                </div>
                <div className="col-3">
                  <h3>Components</h3>
                </div>
                <div className="col-3">
                  <h3>Single-Way</h3>
                </div>
                <div className="col-3">
                  <h3>JSK</h3>
                </div>
            {/* </div>
            <div className="row tile-row"> */}
                <div className="col-3">
                  <p>React Makes it <br></br> painless to create <br></br> interactive UIs.</p>
                </div>
                <div className="col-3">
                  <p>Build encapsulated <br></br>components that <br></br>manage their state.</p>
                </div>
                <div className="col-3">
                  <p> A set of imutable <br></br>values are passed to <br></br>the component´s.</p>
                </div>
                <div className="col-3">
                  <p>Statically-typed <br></br>designed to rum on <br></br>modern browsers.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
