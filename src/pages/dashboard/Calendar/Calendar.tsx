import React from 'react'
import { useLocation } from 'react-router-dom'
import BreadCrumbs from '../../UI Components/BreadCrumbs';
 

const Calendar = () => {
  const path = useLocation().pathname;
  return (
    <>

      <BreadCrumbs path={path}/>
    <div>Calendar</div>
    </>
  )
}

export default Calendar