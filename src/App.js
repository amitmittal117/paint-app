import React, { Component, Fragment } from 'react';
import './App.css';
import Canvas from './canvas';
class App extends Component {
  render() {
    return (
      <Fragment>
        <h3 style={{ textAlign: 'center' }}></h3>
        <div className="main">
          <div className="color-guide">
            <h5>Color Palette</h5>
            <div className="user Green">Red</div>
            <div className="user Black">Grey</div>
            <div className="user Red">Green</div>
            <div className="user Purple">Purple</div>
          </div>
          <Canvas />
        </div>
      </Fragment>
    );
  }
}
export default App;