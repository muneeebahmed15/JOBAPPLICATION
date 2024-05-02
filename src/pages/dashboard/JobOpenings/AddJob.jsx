import { Button, Modal } from 'react-bootstrap'

const AddJob = ({jobModal, setJobModal, loading, data, jobFunction, changeHandler, deleteJob, from}) => {

    const handleDelete = () =>{
      let ok = window.confirm("Are you sure? you want to delete this job.")
      if(ok){
        deleteJob();
      }
    }

  return (
    <>
      <Modal
  show={jobModal}
  onHide={() => setJobModal(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header >
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>

  {from === "editJob" ? "Edit Job" : "Add Job"}

    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

<div className='row' >
          <div className="col-md-6 mt-2">
            <label className='form-label'>Title</label>
            <input type="text" className='form-control' value={ data?.title} name='title' placeholder='Job Title' onChange={changeHandler}/>
          </div>

          <div className="col-md-6 mt-2">
  <label className='form-label'>Status</label>
  <select className='form-select' value={data?.status} name='status' onChange={changeHandler}>
    <option value= "">Choose status</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Job Type</label>
  <select className='form-select' value={data?.jobType} name='jobType' onChange={changeHandler}>
    <option value= "">Choose jobtype</option>
    <option value="Full time">Full time</option>
    <option value="Part time">Part time</option>
    <option value="Internship">Internship</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Location</label>
  <select className='form-select' value={data?.location} name='location' onChange={changeHandler}>
    <option value= "" >Choose location</option>
    <option value="Islamabad">Islamabad</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Job Status</label>
  <select className='form-select' value={data?.jobStatus} name='jobStatus' onChange={changeHandler}>
    <option value= "">Choose jobstatus</option>
    <option value="Hybrid">Hybrid</option>
    <option value="Onsite">Onsite</option>
    <option value="Remote">Remote</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Experience</label>
  <select className='form-select' value={data?.experience} name='experience' onChange={changeHandler}>
    <option value= "">Choose year</option>
    <option value="1 Year">1Year</option>
    <option value="2 Years">2Years</option>
    <option value="3 Years">3Years</option>
    <option value="4 Years">4Years</option>
    <option value="5 Years">5Years</option>
  </select>
</div>

<div className="col-md-12 mt-2">
            <label className='form-label'>Description</label>
            <textarea className='form-control' value={data?.description} name='description' onChange={changeHandler}/>
          </div>

</div> 

  </Modal.Body>
  <Modal.Footer  key={from}>
    <Button onClick={jobFunction}>{from === "addJob" ? "Post Job" : "Update Job" }</Button>
    {from === "editJob" && <Button varient='warning' onClick={handleDelete}>Delete Job</Button>}
    <Button variant="light"  className="text-dark" onClick={()=>setJobModal(false)}>Discard</Button>
  </Modal.Footer>
</Modal>
    </>
  )
}

export default AddJob
