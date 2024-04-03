import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../UI Components/BreadCrumbs';
import { Button, Card, Modal } from 'react-bootstrap';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';

const jobs =[
  {
    id: 1,
    icon: <MdOutlineDeveloperMode size={20} color='white'/>,
    title: "Full Stack Developer",
    status: "Active",
    totalApplicants: 10,
    jobType: "Full Time",
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
    jobType: "Internship",
    jobStatus: "Onsite",
    experience: "2 Years",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
  },{
    id: 4,
    icon: <MdOutlineDeveloperMode size={20} color='white'/>,
    title: "UI/UX Designer",
    status: "Inactive",
    candidatesRequired: 3,
    candidatesHired: 1,
    candidatesInterviewed: 5,
    jobType: "Internship",
    jobStatus: "Onsite",
    experience: "2 Years",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores.",
  },
]


const JobOpenings = () => {
  const path = useLocation().pathname;
  const [modal, setModal] = useState(false);
  const [updateJob, setUpdateJob] = useState(jobs);
  const [selectedId, setSelectedId] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  const [jobModal, setJobModal] = useState(false);
  const [data, setData] = useState({
    id: "",
    icon: "",
    title: "",
    status: "",
    totalApplicants: "",
    jobType: "",
    jobStatus: "",
    experience: "",
    location: "Islamabad",
    description: ""
  })

  const jobHandler = (e) =>{
    setData({...data, [e.target.name]: e.target.value});
  }

  const settingModal = (id) =>{
    setModal(true);
    setSelectedId(id);

    const findJob = updateJob.find(x => x.id === id);
    if(findJob){
        setSelectedJob(findJob);
    }
  }

  const changeHandler = (e) =>{
    setSelectedJob({...selectedJob, [e.target.name]: e.target.value});
  }

  const updatedJob = () => {
    if(selectedId !== ""){
      const index = updateJob.findIndex(x=> x.id === selectedId);
      const updatedArray = [...updateJob];
      updatedArray[index] = {...updatedArray[index], ...selectedJob};
      setUpdateJob(updatedArray);
      setModal(false);
    }
  }


  const deleteJob = () =>{
    setUpdateJob(updateJob.filter(x=> x.id !== selectedId));
    setModal(false);
  }

  const addJob = () =>{

    const maxId = updateJob.reduce((max, job) => (job.id > max ? job.id : max), 0);
    const newId = maxId + 1;
    const newJob = {
      id: newId,
      icon: <MdOutlineDeveloperMode size={20} color='white'/>,
      title: data.title,
      status: data.status,
      jobType: data.jobType,
      jobStatus: data.jobStatus,
      experience: data.experience,
      location: data.location,
      description: data.description
    };

      setUpdateJob([...updateJob, newJob]);
      setJobModal(false);
  }

  return (
    <>

      <BreadCrumbs path={path}/>

      <div className='d-flex justify-content-between align-items-center'>
      <h2 className='mb-3'>Jobs</h2>

      <div className='p-2 bg-primary rounded-3 text-white  cursor-pointer'>
  <IoMdAdd style={{fontSize:"20px"}} onClick={()=>setJobModal(true)}/>
      </div> 
      </div>

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
                       <small className="mb-0 px-1 rounded-1" style={{ backgroundColor: x.status === "Active" ? "var(--bs-info)" : "var(--bs-danger)", width: "fit-content" }}>
                         {x.status}
                       </small>
                     </div>
                   </div>

                   <FaEdit size={20} onClick={()=>settingModal(x.id)} role='button'/>
                   </div>

                    <div className='mt-3' style={{fontSize: "9px", width: "100%"}} >
                      <small className='px-1 rounded-1' style={{backgroundColor: "#bad0fc"}}>{x.jobType}</small>
                      <small className='px-1 rounded-1' style={{backgroundColor: "#bad0fc", margin: "0px 2px"}}>{x.jobStatus}</small>
                      <small className='px-1 rounded-1' style={{backgroundColor: "#bad0fc"}}>{x.location}</small>
                      <small className='px-1 rounded-1' style={{backgroundColor: "#bad0fc", marginLeft: "2px"}}>{x.experience}</small>
                    </div>

                    <div className='mt-2' style={{textAlign: "end"}}>
                     <button className='border-0 rounded-2' style={{backgroundColor: "#bad0fc"}}>View Job</button>
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

<Modal
  show={jobModal}
  onHide={() => setJobModal(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header >
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Add Job
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

<div className='row'>
          <div className="col-md-6 mt-2">
            <label className='form-label'>Title</label>
            <input type="text" className='form-control' value={data.title} name='title' placeholder='Job Title' onChange={jobHandler}/>
          </div>

          <div className="col-md-6 mt-2">
  <label className='form-label'>Status</label>
  <select className='form-select' value={data.status} name='status' onChange={jobHandler}>
    <option selected>Choose status</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Job Type</label>
  <select className='form-select' value={data.jobType} name='jobType' onChange={jobHandler}>
    <option selected>Choose jobtype</option>
    <option value="Full time">Full time</option>
    <option value="Part time">Part time</option>
    <option value="Internship">Internship</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Location</label>
  <select className='form-select' value={data.location} name='location' onChange={jobHandler}>
    <option selected value="Islamabad">Islamabad</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Job Status</label>
  <select className='form-select' value={data.jobStatus} name='jobStatus' onChange={jobHandler}>
    <option selected>Choose jobstatus</option>
    <option value="Hybrid">Hybrid</option>
    <option value="Onsite">Onsite</option>
    <option value="Remote">Remote</option>
  </select>
</div>

<div className="col-md-6 mt-2">
  <label className='form-label'>Experience</label>
  <select className='form-select' value={data.experience} name='experience' onChange={jobHandler}>
    <option selected>Choose year</option>
    <option value="1 Year">1Year</option>
    <option value="2 Years">2Years</option>
    <option value="3 Years">3Years</option>
    <option value="4 Years">4Years</option>
    <option value="5 Years">5Years</option>
  </select>
</div>

<div className="col-md-12 mt-2">
            <label className='form-label'>Description</label>
            <textarea className='form-control' value={data.description} name='description' onChange={jobHandler}/>
          </div>

</div>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={addJob}>Add</Button>
    <Button variant="light" className="text-dark" onClick={()=>setJobModal(false)}>Discard</Button>
  </Modal.Footer>
</Modal>
 
    </>
  )
}

export default JobOpenings;