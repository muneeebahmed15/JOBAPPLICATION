import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const JobModel = ( { applyJob, data, loading, changeHandler, setModel, model}) => {
  return (
    <>
     <Modal
  show={model}
  onHide={() => setModel(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header >
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Add Candidate
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

<div className='row'>

          <div className="col-md-6">
            <label className='form-label'>Name</label>
            <input type="text" className='form-control' placeholder='Name' name='name' value={data.name} onChange={changeHandler}/>
          </div>

          <div className="col-md-6">
            <label className='form-label'>Email Address</label>
            <input type="email" className='form-control' placeholder='Email Address' name='email' value={data.email} onChange={changeHandler}/>
          </div>

          <div className="col-md-6 mt-2">
            <label className='form-label'>Gender</label>
            <select className='form-select' name='gender' value={data.gender} onChange={changeHandler}>
              <option selected>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="col-md-6 mt-2">
            <label className='form-label'>Phone Number</label>
            <input type="text" className='form-control' placeholder='Phone Number' name='phone' value={data.phone} onChange={changeHandler}/>
          </div>  

          <div className="col-md-6 mt-2">
            <label className='form-label'>Education</label>
            <input type="text" className='form-control' placeholder='Education' name='education' value={data.education} onChange={changeHandler}/>
          </div>  

          <div className="col-md-6 mt-2">
            <label className='form-label'>City</label>
            <input type="text" className='form-control' placeholder='City' name='city' value={data.city} onChange={changeHandler}/>
          </div>  

          <div className="col-md-12 mt-2">
            <label className='form-label'>CV</label>
            <input type="file" className='form-control'/>
          </div>  

</div>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={applyJob}>{loading ? "loading..." :"Apply"}</Button>
    <Button variant="light" className="text-dark" onClick={()=>setModel(false)}>Discard</Button>
  </Modal.Footer>
</Modal>
    </>
  )
}

export default JobModel