import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UpdateJob } from '../../actions/jobOpenings'
import AddJob from './AddJob'



const AllJobs = ({from, setFrom, list, loading, setList}) => {
  const [id, setId] = useState();

  const {loading: updateLoading, updateData, setUpdateData, updateJob, jobModal, deleteJob, setJobModal, changeHandler} = UpdateJob(id, list, setList)

  return (
    <>
    <div className='row'>
        {loading ? "loading..." : list?.map((x, index)=>(
        
           <div className='col-md-4 col-sm-6 col-xxl-3' key={index}>
             <Card>
               <Card.Body>
                 <div className="d-flex flex-column">
                  <div className='d-flex justify-content-between'>
                   <div className='d-flex align-items-center justify-content-start'>
                     <div className='p-2 bg-primary rounded-circle' style={{ marginRight: "5px" }}>
                       {x.icon}
                     </div>
                     <div className='d-flex flex-column'>
                       <span className="text-muted text-uppercase fs-14 fw-bold">
                         {x.title}
                       </span>
                       <small className="mb-0 px-1 rounded-1" style={{ color: x.status === "Active" ? "var(--bs-info)" : "var(--bs-danger)", width: "fit-content" }}>
                         {x.status}
                       </small>
                     </div>
                   </div>

                   <FaEdit size={20} onClick={()=>{setUpdateData(x); setId(x._id); setFrom("editJob"); setJobModal(true);;}} role='button'/>
                   </div>

                    <div className='mt-3' style={{fontSize: "9px", width: "100%"}} >
                 {x.jobType && <small>{x.jobType}-</small> }
                  {x.jobStatus && <small>{x.jobStatus}-</small>}
                   {x.location && <small>{x.location}-</small>}
                   {x.experience && <small>{x.experience}</small>}
                    </div>

                    <div className='mt-2'>
                      Posted Date: <small>{x?.createdAt?.slice(0,10)}</small>
                    </div>

                    <div className='mt-2'>
                   <Link to={`/hiring-management/job-openings/details/${x._id}`}>
                    <button className='border-0 py-1 text-white rounded-2 bg-primary' style={{width: "100%"}}>
                      <b>View Job</b>
                      </button>
                      </Link>  
                    </div>
                  
                 </div>
               </Card.Body>
             </Card>
           </div>
    ))}
      </div>

      {/* updating the job */}
    <AddJob setJobModal={setJobModal} from={from} jobModal={jobModal} deleteJob={deleteJob} loading={updateLoading} data={updateData} jobFunction={updateJob} changeHandler={changeHandler}/>

    </>
  )
}

export default AllJobs