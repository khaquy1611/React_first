import React from 'react';
import ButtonIncrement from '../components/button-increment';
import ButtonDecrement from '../components/button-decrement';
import Result from '../components/result';

const AppCounter = () => {
  return (
    <>
      <Result/>
      <ButtonIncrement/>
      <ButtonDecrement/>
    </>
  )
} 
export default React.memo(AppCounter);