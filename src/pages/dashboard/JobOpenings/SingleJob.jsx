import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { IoIosArrowBack, IoMdAdd } from 'react-icons/io';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { FormInput } from '../../../components';
import Table from '../../../components/Table';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

// const columns = [
//   {
//     Header: "Date",
//     accessor: "date",
//     sort: true,
//   },
//   {
//     Header: "Name",
//     accessor: "name",
//     sort: true,
//   },
//   {
//     Header: "Email",
//     accessor: "email",
//     sort: true,
//   },
  
//   {
//     Header: "Gender",
//     accessor: "gender",
//     sort: true,
//   },
//   {
//     Header: "Phone Number",
//     accessor: "phone",
//     sort: false,
//   },
//   {
//     Header: "City",
//     accessor: "city",
//     sort: true,
//   },
//   {
//     Header: "Education",
//     accessor: "education",
//     sort: false,
//   },
//   {
//     Header: "Profile",
//     accessor: "profile",
//     sort: false,
//   },
//   {
//     Header: "CV",
//     accessor: "cv",
//     sort: false,
//   },
// ];

// const data=[
//   {date: "1/12/23", name: "ABC", phone: "123456789", location: "Jhelum", education: "Bachelors", profile: <FaUser size={20} onClick={()=>setProfileModal(true)}/>, cv: <IoCloudDownloadOutline size={20}/>}
// ]

// const sizePerPageList = [
//   {
//     text: "5",
//     value: 5,
//   },
//   {
//     text: "10",
//     value: 10,
//   },
//   {
//     text: "25",
//     value: 25,
//   },
//   {
//     text: "All",
//     value: data.length,
//   },
// ];


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

const SingleJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const columns = [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Education",
        accessor: "education",
      },
      {
        Header: "Profile",
        accessor: "profile",
        Cell: ({ row }) => (
          <div onClick={() => handleNavigator(row.original.id)}>
            <FaUser size={20} role='button'/>
          </div>
        ),
      },
      // {
      //   Header: "CV",
      //   accessor: "cv",
      //   Cell: ({ row }) => (
      //     <div onClick={() => handleDownloadClick(row.original.id)}>
      //       <IoCloudDownloadOutline size={20} />
      //     </div>
      //   ),
      // },
    ];

    const handleNavigator = (id) =>{
      navigate(`/hiring-management/interviews/details/${id}`);
} 

    const data=[
      {id: "1", date: "1/12/23", name: "ABC", email: "abc@gmail.com", gender: "Male", phone: "123456789", city: "Jhelum", education: "Bachelors", profile: <FaUser size={20} onClick={()=>setProfileModal(true)}/>, cv: <IoCloudDownloadOutline size={20}/>}
    ]

    const [newData, setNewData] = useState(data);
    const [modal, setModal] = useState(false);
    const [ profileModal, setProfileModal ] = useState(false);

    const [ profileData, setProfileData ] = useState({
      date: "", name: "", email: "", gender: "", phone: "",
       city: "", education: "", 
       profile: <FaUser size={20} onClick={()=>setProfileModal(true)}/>, 
       cv: <IoCloudDownloadOutline size={20}/>
      });

      const profileHandler = (e) =>{
        setProfileData({...profileData, [e.target.name]: e.target.value})
      }

      const addProfile = () => {
        // const lastIndex = newData.length;
        const newDataWithProfile = [...newData, profileData];
        setNewData(newDataWithProfile);
        setModal(false);
    };
    

    const sizePerPageList = [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "25",
        value: 25,
      },
      {
        text: "All",
        value: data.length,
      },
    ];
 
    const job = jobs.find(x=> x.id === parseInt(id));
    
    if(!job){
        return <div>Job Doesn't Exist</div>;
    }

  return (
    <>

    <Link to="/hiring-management/job-openings">
        <Button className="d-flex justify-content-center align-items-center mt-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

    <div className='d-flex justify-content-between align-items-center my-3'>
    <h2>{job.title}</h2> 

    <div className='p-2 bg-primary rounded-3 text-white' onClick={()=>setModal(true)} role='button'>
        <label style={{paddingRight:"10px"}}>
            Add Candidate
            </label>
            <IoMdAdd style={{fontSize:"20px"}}/>    
        </div>

    </div>

    <Card>
      <Card.Body>

        <div className="row">

        <div className="col-md-2">
          <FormInput
            label={"Date Posted"}
            type="text"
            value={job.posted}
            containerClass={"mb-3"}
            readOnly
          />
          </div>

          <div className="col-md-2">
          <FormInput
            label={"Job Type"}
            type="text"
            value={job.jobType}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Job Status"}
            type="text"
            value={job.jobStatus}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Job Location"}
            type="text"
            value={job.location}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Experience"}
            type="text"
            value={job.experience}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Status "}
            type="text"
            value={job.status}
            containerClass={"mb-3"}
            readOnly
          />
          </div>

          <div className="col-md-2">
          <FormInput
            label={"Candidates Applied"}
            type="text"
            value={job.totalApplicants}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-6">
          <label className='form-label'>Description</label>
          <textarea cols="30" rows="3" className='form-control' value={job.description} readOnly />
          </div>

        </div>

        <hr style={{border: "1px solid"}}/>

        <Table
                columns={columns}
                data={newData}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />

      </Card.Body>
    </Card>

    <Modal
  show={modal}
  onHide={() => setModal(false)}
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
            <label className='form-label'>Date</label>
            <input type="date" className='form-control' name='date' value={profileData.date} onChange={profileHandler}/>
          </div>

          <div className="col-md-6">
            <label className='form-label'>Name</label>
            <input type="text" className='form-control' placeholder='Name' name='name' value={profileData.name} onChange={profileHandler}/>
          </div>

          <div className="col-md-6 mt-2">
            <label className='form-label'>Email Address</label>
            <input type="email" className='form-control' placeholder='Email Address' name='email' value={profileData.email} onChange={profileHandler}/>
          </div>

          <div className="col-md-6 mt-2">
            <label className='form-label'>Gender</label>
            <select className='form-select' name='gender' value={profileData.gender} onChange={profileHandler}>
              <option selected>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

        <div className="col-md-6 mt-2">
            <label className='form-label'>Phone Number</label>
            <input type="text" className='form-control' placeholder='Phone Number' name='phone' value={profileData.phone} onChange={profileHandler}/>
          </div>  

          <div className="col-md-6 mt-2">
            <label className='form-label'>Education</label>
            <input type="text" className='form-control' placeholder='Education' name='education' value={profileData.education} onChange={profileHandler}/>
          </div>  

          <div className="col-md-6 mt-2">
            <label className='form-label'>City</label>
            <input type="text" className='form-control' placeholder='City' name='city' value={profileData.city} onChange={profileHandler}/>
          </div>  

          <div className="col-md-12 mt-2">
            <label className='form-label'>CV</label>
            <input type="file" className='form-control'/>
          </div>  

</div>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={addProfile}>Add</Button>
    <Button variant="light" className="text-dark" onClick={()=>setModal(false)}>Discard</Button>
  </Modal.Footer>
</Modal>

<Modal
  show={profileModal}
  onHide={() => setProfileModal(false)}
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

          <div className="col-md-6 ">
            <label className='form-label'>Name</label>
            <input type="text" className='form-control' />
          </div>

</div>

  </Modal.Body>
  <Modal.Footer>
    <Button>Add</Button>
    <Button variant="light" className="text-dark" onClick={()=>setModal(false)}>Discard</Button>
  </Modal.Footer>
</Modal>


    </>
  )
}

export default SingleJob