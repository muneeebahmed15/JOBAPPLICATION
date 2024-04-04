import React from 'react'
import { useLocation } from 'react-router-dom'
import BreadCrumbs from '../../UI Components/BreadCrumbs';
import CandidateTable from './CandidateTable';

const AllCandidates = () => {
  const path = useLocation().pathname;
  return (
    <div>

      <BreadCrumbs path={path}/>

   <h1>All Candidates</h1>

   <CandidateTable />
    </div>
  )
}

export default AllCandidates
