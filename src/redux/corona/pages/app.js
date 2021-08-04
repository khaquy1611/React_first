import React from 'react';
import Countries from '../components/Countries';
import Global from '../components/Global';

const AppCorona = () => {
  return (
    <>
      <Global/>
      <Countries/>
    </>
  )
}
export default React.memo(AppCorona);