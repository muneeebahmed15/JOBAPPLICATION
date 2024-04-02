import React from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../UI Components/BreadCrumbs';

const Interviews = () => {
  const path = useLocation().pathname;
  return (
    <>

      <BreadCrumbs path={path}/>
      Interviews
    </>
  )
}

export default Interviews
