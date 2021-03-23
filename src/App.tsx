import React, { useState } from 'react';
import './App.css';

function App() {
  const [quickAddWindow, setQuickAddWindow] = useState<Window | undefined>();
  const [currentOuterWidth, setCurrentOuterWidth] = useState<number |undefined>();

  const createWindow = () => {
    const newWindow = window.open(
      "http://localhost:3000",
      "window",
      "scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100"
    )

    if(newWindow) {
      setQuickAddWindow(newWindow)
    }
  }

  const resizeByZero = () => {
    if(!quickAddWindow) {
      return
    }

    quickAddWindow.resizeBy(-1, -1)
    setCurrentOuterWidth(quickAddWindow.outerWidth)
  }

  const resizeToFixedSize = () => {
    if(!quickAddWindow) {
      return
    }

    quickAddWindow.resizeTo(600, 200)
    setCurrentOuterWidth(quickAddWindow.outerWidth)
  }

  return (
    <div className="App">
      <button onClick={createWindow}>Open Window</button>
      <button onClick={resizeByZero}>Resize by zero</button>
      <button onClick={resizeToFixedSize}>Resize to fixed size</button>
      <div>
        <h2>Current Windows Dimensions</h2>
        <div>Outer width: {currentOuterWidth}</div>
      </div>
    </div>
  );
}

export default App;
