import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { 
  setTextColor,
  setBackgroundColor, 
  setMainColor, 
  setBorderColor 
} from './redux/slice/mainOptionSlice';

import './App.css';
import Pages from './pages';
import LineProgress from './compoents/LineProgress';


const App:React.FC<{domElement: any}> = ( { domElement }) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setTextColor(domElement.getAttribute("textColor")));
    dispatch(setBackgroundColor(domElement.getAttribute("backgroundColor")));
    dispatch(setMainColor(domElement.getAttribute("mainColor")));
    dispatch(setBorderColor(domElement.getAttribute("borderColor")));
    // eslint-disable-next-line
  },[]);

  return (
    <div className='hbz-widget-box'>
      <div className='questionnare-box'>
        <div className='content-wrapper'>
          {/* <div className='process'>
            <div className='process-load'>
            </div>
          </div> */}
          <LineProgress/>
        </div>
       <Pages/>
      </div>
    </div>
  );
}

export default App;
