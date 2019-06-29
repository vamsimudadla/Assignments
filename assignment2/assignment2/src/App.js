import React from 'react';
import logo from './logo.svg';
import './App.css';

import StrikeText from './components/StrikeText'
import RoundCornerImage from './components/images/RoundCornerImage'
import NormalImage from './components/images/NormalImage'
import CircularImage from './components/images/CircularImage'

import WarningMessages from './components/WarningMessages/'

import TextBox from './components/Greeting/TextBox'
import RadioButtons from './components/RadioButtons'

import CheckBoxes from './components/CheckBoxes'
import DropDown from './components/DropDown'
import DisableButton from './components/DisableButton'
import StopWatch from './components/StopWatch'
import CommentsBox from './components/CommentsBox'

function App(props) {
  return (
    <div className="App">
      <div className='width-height'>
        <StrikeText data='Lorem ipsum olor sit amet,cosectitur adepiscing'/>
        <StrikeText data='Training on react.js components'/>
        <StrikeText data='THE MAN YOU KNOW, THE JOURNEY YOU Dont KNOW' />
      </div>

      <div className='img-height'>
        <NormalImage image='/assets/image.jpeg' /> 
        <RoundCornerImage image='/assets/image.jpeg' /> 
        <CircularImage image='/assets/image.jpeg' /> 
      </div>

      <div className='warning-messages'>
            <WarningMessages block='green-block' warn_msg='Well done! You successfully read this important message' />
            <WarningMessages block='blue-block' warn_msg='Well done! You successfully read this important message' /> 
            <WarningMessages block='yellow-block' warn_msg='Well done! You successfully read this important message' />
            <WarningMessages block='red-block' warn_msg='Well done! You successfully read this important message' />
      </div>

      <div className='width-height'>
        <TextBox />
      </div>
      <div className='width-height'>
         <RadioButtons />
      </div>
      <div className='width-height'>
          <CheckBoxes list = {['Hyderabad','Banglore','Delhi','Mumbai'] }/>
      </div>
      <div className='width-height'>
          <DropDown list = {['Select your state','Andhra','Delhi','Maharastra','Bihar']} />
       </div>
       <div className='width-height'>   
          <DisableButton />
        </div>
        <div className='width-height'>
          <StopWatch />
        </div>
        <CommentsBox />
    </div>
  );
}

export default App;
