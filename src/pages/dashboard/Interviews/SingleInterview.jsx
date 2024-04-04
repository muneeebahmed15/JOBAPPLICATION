import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { FormInput } from '../../../components';

const data=[
    {id:"1", date: "1/12/23", name: "ABC", email: "abc@gmail.com", gender: "Male", phone: "123456789", city: "Jhelum", education: "Bachelors", role: "Web Developer"}
  ];

const SingleInterview = () => {
  const {id} = useParams();
  const [modal, setModal] = useState(false);
  const [interviewData, setInterviewData] = useState({
    id: "",
    date: "",
    time: "",
    interviewtype: "",
    location: "",
    name: "",
    email: "",
  })

  const value = data.find(x=> x.id === id);
  if(!value){
    return <div>Job Doesn't Exist</div>
  }

    const handleModal = () =>{
      setModal(true);
      // const id = myID;
    }

  return (
    <>

        <Link to="/hiring-management/interviews">
        <Button className="d-flex justify-content-center align-items-center mt-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

   <h1 className="my-3"> Candidate Interview</h1>

    <Card>
        <Card.Body>

        <div className="row">

    <div className="col-md-2">
    <FormInput
    label={"Date Applied"}
    type="text"
    value={value.date}
    containerClass={"mb-3"}
    readOnly
  />
  </div>

  <div className="col-md-2">
    <FormInput
    label={"Name"}
    type="text"
    value={value.name}
    containerClass={"mb-3"}
    readOnly
  />
  </div>

  <div className="col-md-2">
    <FormInput
    label={"Email"}
    type="text"
    value={value.email}
    containerClass={"mb-3"}
    readOnly
  />
  </div>

  <div className="col-md-2">
    <FormInput
    label={"Gender"}
    type="text"
    value={value.gender}
    containerClass={"mb-3"}
    readOnly
  />
  </div>
  
  <div className="col-md-2">
    <FormInput
    label={"Phone"}
    type="text"
    value={value.phone}
    containerClass={"mb-3"}
    readOnly
  />
  </div>

  <div className="col-md-2">
    <FormInput
    label={"City"}
    type="text"
    value={value.city}
    containerClass={"mb-3"}
    readOnly
  />
  </div>

  <div className="col-md-2">
    <FormInput
    label={"Role"}
    type="text"
    value={value.role}
    containerClass={"mb-3"}
    readOnly
  />
  </div>

  <div className="col-md-2">
    <FormInput
    label={"Education"}
    type="text"
    value={value.education}
    containerClass={"mb-3"}
    readOnly
  />
  </div>

</div>

        <div className='d-flex justify-content-end aligin-items-center'>
          <Button style={{marginRight: "10px"}}>CV</Button>
          <Button variant="light" onClick={()=>setModal(true)}><b>Shedule Interview</b></Button>
        </div>
        </Card.Body>
    </Card>

    <Modal
   show={modal}
   onHide={() => setModal(false)}
   aria-labelledby="contained-modal-title-vcenter"
   centered
>
  <Modal.Body >
   <div >
  
    <div> <h2 className='text-center mb-4' style={{color:"#555788"}}>Schedule Interview</h2></div>

    <div className='d-flex flex-column'>

     <div className='d-flex justify-content-between'>
     <div className='d-flex flex-column'>
      <label><b>Date</b></label>
      <input required type="date" className='p-2 border-0' style={{backgroundColor: "#dceefa", borderRadius: "8px", fontWeight:"bold",color:"#555788"}}/>
      </div>

     <div className='d-flex flex-column'>
      <label><b>Time</b></label>
      <input required type="time" className='p-2 border-0' style={{backgroundColor: "#dceefa", borderRadius: "8px", fontWeight:"bold", color:"#555788"}}/>
      </div>
      </div>

     {data.map((x)=>(
      x.id === id && <> 
       <div className='d-flex flex-column my-2'>
       <label><b>Employee Name</b></label>
       <input type="text" className='p-2 border-0' value={x.name} style={{backgroundColor: "#dceefa", borderRadius: "8px", fontWeight:"bold",color:"#555788"}}/>
     </div>
     <div className='d-flex flex-column my-2'>
     <label><b>Employee Email</b></label>
     <input type="text" className='p-2 border-0' value={x.email} style={{backgroundColor: "#dceefa", borderRadius: "8px", fontWeight:"bold", color:"#555788"}}/>
   </div>
   </>
     ))}

      {/* <div className='d-flex flex-column'>
        <label><b>Interview Type</b></label>

        <select name="interviewtype" required value={interviewData.interviewtype} onChange={changeHandler} id="" className='p-2 border-0' style={{backgroundColor: "#dceefa", borderRadius: "8px", fontWeight:"bold",color:"#555788"}}>
          <option value="">Choose type</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

    { interviewData.interviewtype === "online" ? 
    <div className='d-flex flex-column my-2'>
       <label><b>Zoom Link</b></label>
       <input required type="text" name='location' value={interviewData.location} onChange={changeHandler} className='p-2 border-0' placeholder='Zoom Link here...' style={{backgroundColor: "#dceefa", borderRadius: "8px", fontWeight:"bold",color:"#555788"}}/>
     </div> 
     : 
     interviewData.interviewtype === "offline" ?  <div className='d-flex flex-column my-2'>
       <label><b>Interview Location</b></label>
       <input required type="text" name='location' value={interviewData.location} onChange={changeHandler} className='p-2 border-0' placeholder='Interview Location here...' style={{backgroundColor: "#dceefa", borderRadius: "8px", fontWeight:"bold",color:"#555788"}}/>
     </div> 
     : ""} */}


     <div>
      
     <button className='border-0 mt-2 px-3 py-2 mb-3 text-white' style={{borderRadius:"8px", backgroundColor:"#555788", marginRight:"30px"}} >
      Send Interview
      </button>

     </div>

    
      

    </div>

   </div>
  </Modal.Body>
</Modal>

{/* <Modal
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
</Modal> */}

    </>
  )
}

export default SingleInterview