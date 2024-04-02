import React from 'react'
import { useLocation } from 'react-router-dom'
import BreadCrumbs from '../../UI Components/BreadCrumbs';

const AllCandidates = () => {
  const path = useLocation().pathname;
  return (
    <div>

      <BreadCrumbs path={path}/>

      {/* {JSON.stringify(path)} */}

      All Candidates
    </div>
  )
}

export default AllCandidates
