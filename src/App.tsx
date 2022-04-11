import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
  setTextColor,
  setBackgroundColor, 
  setMainColor, 
  setBorderColor, 
  setQuestionnaireId
} from './redux/slice/mainOptionSlice';

import './App.css';
import Pages from './pages';
import LineProgress from './compoents/LineProgress';
import { AppState } from './redux/store';


const App:React.FC<{domElement: any}> = ( { domElement }) => {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state: AppState) => state.pagesReducer.pageNumber);
  const backgroundColor = useSelector((state: AppState) => state.mainToolsReducer.backgroundColor);

  useEffect(()=>{
    dispatch(setTextColor(domElement.getAttribute("textColor")));
    dispatch(setBackgroundColor(domElement.getAttribute("backgroundColor")));
    dispatch(setMainColor(domElement.getAttribute("mainColor")));
    dispatch(setBorderColor(domElement.getAttribute("borderColor")));
    dispatch(setQuestionnaireId(domElement.getAttribute("questionnaireId")));
    // eslint-disable-next-line
  },[]);

  return (
    <div className='hbz-widget-box'>
      <div className='questionnare-box'
        style={{backgroundColor: backgroundColor}}>
        {pageNumber < 3 && (
          <div className='content-wrapper'>
            <LineProgress range={pageNumber}/>
          </div>
        )}
       <Pages/>
      </div>
    </div>
  );
}

export default App;
