import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';

const SheduleInterview = ({scheduleInterview, setScheduleInterview, list, selectedID}) => {

    const [interviewData, setInterviewData] = useState({
        id: "",
        date: "",
        time: "",
        interviewtype: "",
        location: "",
        name: "",
        email: "",
      });

    const changeHandler = (e) => {
   
        setInterviewData({
          ...interviewData,
          [e.target.name]: e.target.value
        });
      
    };

  return (
    <>
      <Modal
  show={scheduleInterview}
  onHide={() => setScheduleInterview(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
<Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
          <FaRegUser size={20} /> Schedule Interview
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
   <div >

    <div className='row'>

     <div className='col-md-6'>
     <div>
      <label className='form-label'><b>Date</b></label>
      <input required type="date" name='date' value={interviewData.date} onChange={changeHandler} className = "form-control"/>
      </div>
      </div>

     <div className='col-md-6'>
      <div>
      <label className='form-label'><b>Time</b></label>
      <input required type="time" name='time' value={interviewData.time} onChange={changeHandler} className='form-control'/>
      </div>
      </div>

     
       <div className='col-md-12 mt-2'>
       <label className='form-label'><b>Employee Name</b></label>
       <input type="text" className='form-control' name='name' value={interviewData.name} onChange={changeHandler}/>
     </div>

     <div className='col-md-12 mt-2'>
     <label className='form-label'><b>Employee Email</b></label>
     <input type="text" className='form-control' value={interviewData.email} name='email' onChange={changeHandler}/>
   </div>
   
   <div className='col-md-12 mt-2'>
        <label className='form-label'><b>Interviewee</b></label>

        <select name="interviewtype" required value={interviewData.interviewtype} onChange={changeHandler} id="" className = "form-select">
          <option selected>Choose Interviewee</option>
          <option value="online">Zaka Rahman</option>
          <option value="offline">Sunny Rahman</option>
          <option value="offline">Muzammil Iqrar</option>
          <option value="offline">Sobiyaal Zahoor</option>
          <option value="offline">HR</option>
        </select>
      </div>

      <div className='col-md-12 mt-2'>
        <label className='form-label'><b>Interview Type</b></label>

        <select name="interviewtype" required value={interviewData.interviewtype} onChange={changeHandler} id="" className = "form-select">
          <option value="">Choose type</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

    { interviewData.interviewtype === "online" ? 
    <div className='col-md-12 mt-2'>
       <label className='form-label'><b>Zoom Link</b></label>
       <input required type="text" name='location' value={interviewData.location} onChange={changeHandler} className='form-control' placeholder='Zoom Link here...'/>
     </div> 
     : 
     interviewData.interviewtype === "offline" ?  <div className='col-md-12 mt-2'>
       <label><b>Interview Location</b></label>
       <input required type="text" name='location' value={interviewData.location} onChange={changeHandler} className='form-control' placeholder='Interview Location here...'/>
     </div> 
     : ""}


     <div className='d-flex align-items-center justify-content-end mt-2'>
      
     <Button variant='light' style={{marginRight: "10px"}}>Schedule Interview</Button>

      <Button onClick={()=>setScheduleInterview(false)}>Discard</Button>

     </div>

      

    </div>

   </div>
   </Modal.Body>

</Modal>
    </>
  )
}

export default SheduleInterview
