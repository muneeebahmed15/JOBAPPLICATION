import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { IoBagRemoveOutline } from 'react-icons/io5'
import { MdOutlineDeveloperMode } from 'react-icons/md'
import { Link } from 'react-router-dom'

const jobs =[
    {
      id: 1,
      icon: <MdOutlineDeveloperMode size={20} color='white'/>,
      title: "Full Stack Developer",
      status: "Active",
      totalApplicants: 10,
      jobType: "Full Time",
      posted: "12/2/24",
      jobStatus: "Onsite",
      experience: "2 Years",
      location: "Islamabad",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
    },
    {
      id: 2,
      icon: <MdOutlineDeveloperMode size={20} color='white'/>,
      title: "React Native Developer",
      status: "Active",
      candidatesRequired: 1,
      candidatesHired: 0,
      candidatesInterviewed: 2,
      posted: "12/3/23",
      jobType: "Full Time",
      jobStatus: "Onsite",
      experience: "1 Years",
      location: "Islamabad",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
    },
    {
      id: 3,
      icon: <MdOutlineDeveloperMode size={20} color='white'/>,
      title: "UI/UX Designer",
      status: "Inactive",
      candidatesRequired: 3,
      candidatesHired: 1,
      candidatesInterviewed: 5,
      posted: "12/1/24",
      jobType: "Internship",
      jobStatus: "Onsite",
      experience: "2 Years",
      location: "Islamabad",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
    },
    {
      id: 4,
      icon: <MdOutlineDeveloperMode size={20} color='white'/>,
      title: "UI/UX Designer",
      status: "Inactive",
      candidatesRequired: 3,
      candidatesHired: 1,
      candidatesInterviewed: 5,
      posted: "20/2/24",
      jobType: "Internship",
      jobStatus: "Onsite",
      experience: "2 Years",
      location: "Islamabad",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
    },
  ]

  const insights = [
    {
        title: "Hired",
        progress: "60",
    },
    {
        title: "Rejected",
        progress: "30",
    },
    {
        title: "Onhold",
        progress: "10",
    },
  ]

const CurrentVacancies = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-7">
           
            <Card>
                <Card.Body>
                    <h4 className='mb-3' style={{ display: 'flex', alignItems: 'center' }}>
                        <IoBagRemoveOutline size={25} style={{marginRight: "5px"}}/>
                        Current Vacancies
                        </h4>
                
            {jobs.map((x)=>(
            <Link to={`/hiring-management/job-openings/details/${x.id}`}>
            <Card className='mb-1'>
                <Card.Body className="p-2">
                  <div className='d-flex align-items-center justify-content-between'>
                   <div className='d-flex align-items-center justify-content-start'>
                     <div className='p-2 bg-primary rounded-circle' style={{ marginRight: "5px" }}>
                       {x.icon}
                     </div>
                     <div className='d-flex flex-column'>
                       <span className="text-muted text-uppercase fs-14 fw-bold">
                         {x.title}
                       </span>
                       <small>Company: <b>Sun Skills Techs</b></small>
                     </div>
                   </div>

                    <div className='d-flex flex-column'>
                      <small>Posted Date: <b>{x.posted}</b></small>
                      <small>Total Candidates: <b>5</b></small>
                    </div>    
                  
                 </div>
                </Card.Body>
            </Card>
            </Link>
            ))}

            </Card.Body>
            </Card>

        </div>

        <div className='col-md-5'>
                <Card>
                    <Card.Body>
                        <h4>Interview Insights</h4>

           {insights.map((x)=>(
            <div>
          <span className="text-muted text-uppercase fs-12 fw-bold">
            {x.title}
          </span>
          <ProgressBar
            now={x.progress}
            variant="primary"
            label= {`${x.progress}%`}
            style={{ height: "15px" }}
            className="mb-2"
          />
        </div>
        ))}
                    </Card.Body>
                </Card>
            </div>

      </div>
    </>
  )
}

export default CurrentVacancies
