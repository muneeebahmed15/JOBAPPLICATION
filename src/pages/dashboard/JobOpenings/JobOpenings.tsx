import React from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../UI Components/BreadCrumbs';
import { Card } from 'react-bootstrap';

const jobs =[
  {
    title: "Full Stack Developer",
    status: "Active",
    candidatesRequired: 2,
    candidatesHired: 0,
    candidatesInterviewed: 3,
  },
  {
    title: "React Native Developer",
    status: "Active",
    candidatesRequired: 1,
    candidatesHired: 0,
    candidatesInterviewed: 2,
  },
  {
    title: "UI/UX Designer",
    status: "Draft",
    candidatesRequired: 3,
    candidatesHired: 1,
    candidatesInterviewed: 5,
  },
]


const JobOpenings = () => {
  const path = useLocation().pathname;
  return (
    <>

      <BreadCrumbs path={path}/>

      <div className='d-flex justify-content-between align-items-center'>
      <h2 className='mb-3'>Jobs</h2>
      </div>

      <div className='row'>
        {jobs.map((x)=>(
        <div className='col-md-4'>
      <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted text-uppercase fs-14 fw-bold">
              {x.title}
            </span>
            <small className="mb-0 px-1 rounded-1" style={{backgroundColor: x.status === "Active" ? "var(--bs-info)" : "var(--bs-danger)"}}>
              {x.status}
              </small>
        
          
        </div>
      </Card.Body>
    </Card>
    </div>))}
      </div>
 
    </>
  )
}

export default JobOpenings