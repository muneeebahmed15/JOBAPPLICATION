import React from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../UI Components/BreadCrumbs';

const Qualifications = () => {
  const path = useLocation().pathname;
  return (
    <>

      <BreadCrumbs path={path}/>
      </>
  )
}

export default Qualifications