import React from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../UI Components/BreadCrumbs';
import InterviewTable from './InterviewList';

const Interviews = () => {
  const path = useLocation().pathname;
  return (
    <>

      <BreadCrumbs path={path}/>

      <h1 className='my-3'>All Interviews</h1>

      <InterviewTable/>
    </>
  )
}

export default Interviews
