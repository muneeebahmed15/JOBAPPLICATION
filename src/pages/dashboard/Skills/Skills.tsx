import React from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../UI Components/BreadCrumbs';

const Skills = () => {
  const path = useLocation().pathname;
  return (
    <>

      <BreadCrumbs path={path}/>

     <h1>Skills</h1>

    </>
  )
}

export default Skills
