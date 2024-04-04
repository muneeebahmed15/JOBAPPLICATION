import React from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AllJobs = ({updateJob, modal, setModal, settingModal, updatedJob, deleteJob, selectedJob, changeHandler }) => {
  return (
    <>
    <div className='row'>
        {updateJob.map((x, index)=>(
        
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

                   <FaEdit size={20} onClick={()=>settingModal(x.id)} role='button'/>
                   </div>

                    <div className='mt-3' style={{fontSize: "9px", width: "100%"}} >
                      <small>{x.jobType}-</small>
                      <small>{x.jobStatus}-</small>
                      <small>{x.location}-</small>
                      <small>{x.experience}</small>
                    </div>

                    <div className='mt-2'>
                      Posted Date: {x.posted}
                    </div>

                    <div className='mt-2'>
                   <Link to={`/hiring-management/job-openings/details/${x.id}`}>
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

      <Modal
  show={modal}
  onHide={() => setModal(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header >
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Edit Job
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

   
<div className='row'>
          <div className="col-md-6 mt-2">
            <label className='form-label'>Title</label>
            <input type="text" className='form-control' value={selectedJob.title} name='title' onChange={changeHandler}/>
          </div>

          <div className="col-md-6 mt-2">
  <label className='form-label'>Status</label>
  <select className='form-select' value={selectedJob.status} name='status' onChange={changeHandler}>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Job Type</label>
  <select className='form-select' value={selectedJob.jobType} name='jobType' onChange={changeHandler}>
    <option value="Full time">Full time</option>
    <option value="Part time">Part time</option>
    <option value="Internship">Internship</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Job Status</label>
  <select className='form-select' value={selectedJob.jobStatus} name='jobStatus' onChange={changeHandler}>
    <option value="Hybrid">Hybrid</option>
    <option value="Onsite">Onsite</option>
    <option value="Remote">Remote</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Experience</label>
  <select className='form-select' value={selectedJob.experience} name='experience' onChange={changeHandler}>
    <option value="1 Year">1Year</option>
    <option value="2 Years">2Years</option>
    <option value="3 Years">3Years</option>
    <option value="4 Years">4Years</option>
    <option value="5 Years">5Years</option>
  </select>
</div>

<div className="col-md-12 mt-2">
            <label className='form-label'>Description</label>
            <textarea className='form-control' value={selectedJob.description} name='description' onChange={changeHandler}/>
          </div>

</div>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={updatedJob}>Update</Button>
    <Button onClick={deleteJob}>Delete Job</Button>
    <Button variant="light" className="text-dark" onClick={()=>setModal(false)}>Discard</Button>
  </Modal.Footer>
</Modal>
    </>
  )
}

export default AllJobs