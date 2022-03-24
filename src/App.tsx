import React from 'react';
import logo from './logo.svg';
import './App.css';
 
const App:React.FC<{domElement: any}> = ( { domElement }) => {
  
  const textColor = domElement.getAttribute("textColor");
  const backgroundColor = domElement.getAttribute("backgroundColor");
  const mainColor = domElement.getAttribute("mainColor");
  const borderColor = domElement.getAttribute("borderColor");

  const colors= {
    textColor: textColor,
    backgroundColor: backgroundColor,
    mainColor: mainColor,
    borderColor: borderColor
  }
  
  console.log(colors)



  const handleStart = () => {
    console.log('Start!!!')
  }

  return (
    <div className='hbz-widget-box'>
      <div className='questionnare-box'>
        <div className='content-wrapper'>
          <div className='process'>
            <div className='process-load'>
            </div>
          </div>
          <span>
            We are going to ask you a few question
            s to more accurately select courses for you
          </span>
        </div>
        <button className='start-button' onClick={handleStart}>START</button>
      </div>
    </div>
  );
}

export default App;
