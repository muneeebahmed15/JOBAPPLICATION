import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { LeaveResponse } from '../../actions/leave';

const LeaveModal = ({leaveModal, setLeaveModal, data}) => {
    const [edit, setEdit] = useState(false);
    // const [updateData, setUpdateData] = useState();
    const {loading, updateData, setUpdateData, leaveResponse} = LeaveResponse();

   useEffect (()=>{
    if(data){
        setUpdateData(data)
    }
   },[data]);

// console.log(updateData)

        const changeHandler = (e) =>{
            setUpdateData(prev => ({...prev, [e.target.name]: e.target.value}))
        }

  return (
    <>
        <Modal
  show={leaveModal}
  onHide={() => setLeaveModal(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Apply Leave
    </Modal.Title>
  </Modal.Header>

  <Modal.Body>

        <div className='text-end mb-3'> {!edit ?<Button onClick={()=>setEdit(true)} disabled={updateData?.from && new Date(updateData?.from) < new Date()}>Edit</Button> : <Button onClick={()=>setEdit(false)}>Cancel</Button>}
        </div>

        {updateData?.from && new Date(updateData?.from) < new Date() && <h5 className='text-danger'><i>Note: Date for this application is passed, you can't edit this.</i></h5>}

  <div className='row mt-2'>
      <div className='col-4'>
        <label>Employee Name</label>
      </div>
      <div className='col-8'>
      <input type="text" name="name" value={updateData?.empId.personalDetails.name} className='form-control' readOnly onChange={changeHandler}/>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Leave Type</label>
      </div>
      <div className='col-8'>
        <select className='form-control' name='leaveType' value={updateData?.leaveType} disabled={!edit} onChange={changeHandler}>
          <option value="">{updateData?.leaveType}</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Medical Leave">Medical Leave</option>
        </select>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-6'>
        <div>
        <label>From Date</label>
     
        <input type="date" name="from" readOnly={!edit} onChange={changeHandler} value={updateData?.from} className='form-control'/>
      </div>
      </div>

      <div className='col-6'>
        <div>
        <label>To Date</label>
     
        <input type="date" name="to" onChange={changeHandler} readOnly={!edit} value={updateData?.to} className='form-control'/>
      </div>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Number of Days</label>
      </div>
      <div className='col-8'>
        <input type='number' className='form-control' name='totalDays' onChange={changeHandler} readOnly={!edit} value={updateData?.totalDays} placeholder='Number of days' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Reason of Leave</label>
      </div>
      <div className='col-8'>
      <textarea 
    className='form-control' 
    name='reason' 
    readOnly={!edit} 
    value={updateData?.reason} 
    onChange={changeHandler} 
    placeholder='Reason'
  />
   </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Status</label>
      </div>
      <div className='col-8'>
        <select className='form-control' name='status' value={updateData?.status} disabled={!edit} onChange={changeHandler}>
          <option value="">{updateData?.status}</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Comments</label>
      </div>
      <div className='col-8'>
      <textarea 
    className='form-control' 
    name='remarks' 
    readOnly={!edit} 
    value={updateData?.remarks} 
    onChange={changeHandler} 
    placeholder='Comments'
  />
   </div>
    </div>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={() => leaveResponse(updateData._id)}>{loading ? "loading..." : "Submit"}</Button>
     <Button variant="light" className="text-dark" onClick={()=>setLeaveModal(false)}>Discard</Button>
  </Modal.Footer>
</Modal>
    </>
  )
}

export default LeaveModal