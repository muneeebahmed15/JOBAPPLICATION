import React, { useState } from 'react'
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { IoMdAdd } from 'react-icons/io'
import LeaveTable from './LeaveTable'

const Leave = () => {
  const path = useLocation().pathname
  const [applyLeave, setApplyLeave] = useState(false);
  return (
    <>
    <BreadCrumbs path={path}/>

      <div className='d-flex justify-content-between align-items-center'>
      <h1 className="mb-3">Leave Management</h1>

     
      
      <div className='p-2 bg-primary rounded-3 text-white  cursor-pointer' onClick={()=>setApplyLeave(true)}>
  <label style={{paddingRight:"10px"}}>Apply Leave</label>
  <IoMdAdd style={{fontSize:"20px"}}/>
      </div>   
        </div>

   <div className='my-3'>
    <LeaveTable/>
   </div>

   {/* <Modal
  show={addLeave}
  onHide={() => setAddLeave(false)}
  // size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Add Leave Types
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

    <div className='row'>
      <div className='col-4'>
        <label>Leave Type</label>
      </div>
      <div className='col-8'>
        <input type="text" name="name" className='form-control' placeholder='Leave Type' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Time Period</label>
      </div>
      <div className='col-8'>
        <select className='form-control' >
          <option value="">Select Time Period</option>
          <option value="">Monthly</option>
          <option value="">Quarterly</option>
          <option value="">Yearly</option>
        </select>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Number of Leaves</label>
      </div>
      <div className='col-8'>
        <input type="text" className='form-control' placeholder='Number of leaves' />
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button>Submit</Button>
    <Button variant='light' className='text-dark' onClick={() => setAddLeave(false)}>Discard</Button>
  </Modal.Footer>
</Modal> */}

<Modal
  show={applyLeave}
  onHide={() => setApplyLeave(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Apply Leave
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

  <div className='row mt-2'>
      <div className='col-4'>
        <label>Employee Name</label>
      </div>
      <div className='col-8'>
        <select className='form-control' >
          <option value="">Select Employee</option>
          <option value="">A</option>
          <option value="">B</option>
          <option value="">C</option>
        </select>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Leave Type</label>
      </div>
      <div className='col-8'>
        <select className='form-control' >
          <option value="">Choose Leave Type</option>
          <option value="">Casual Leave</option>
          <option value="">Medical Leave</option>
        </select>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-6'>
        <div>
        <label>From Date</label>
     
        <input type="date" name="name" className='form-control'/>
      </div>
      </div>

      <div className='col-6'>
        <div>
        <label>To Date</label>
     
        <input type="date" name="name" className='form-control'/>
      </div>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Number of Days</label>
      </div>
      <div className='col-8'>
        <input type='number' className='form-control' placeholder='Number of days' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Reason</label>
      </div>
      <div className='col-8'>
        <textarea className='form-control' placeholder='Reason'/>
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button>Apply</Button>
    <Button variant="light" className="text-dark" onClick={()=>setApplyLeave(false)}>Discard</Button>
  </Modal.Footer>
</Modal>


    </>
  )
}

export default Leave
