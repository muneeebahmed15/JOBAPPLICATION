import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { IoIosArrowBack, IoMdAdd } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { FormInput } from '../../../components';
import { FaUser } from 'react-icons/fa';
import { SingleJobs } from '../../actions/jobOpenings';
import { ApplyJob } from '../../actions/candidateApply';
import JobModel from './JobModel';

const SingleJob = () => {
    const { id } = useParams();
    const {data: dataSingle, loading} = SingleJobs(id);
    const { applyJob, data: candidateData, setData, loading: candidateLoading, changeHandler, setModel, model} = ApplyJob();

    const navigate = useNavigate();

    const handleNavigator = (id) =>{
      navigate(`/hiring-management/interviews/details/${id}`);
} 

  return (
    <>  {loading ? "loading..." :JSON.stringify(dataSingle)}

    <Link to="/hiring-management/job-openings">
        <Button className="d-flex justify-content-center align-items-center mt-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

    <div className='d-flex justify-content-between align-items-center my-3'>
    <h2>{dataSingle.title}</h2> 

    <div className='p-2 bg-primary rounded-3 text-white' onClick={()=>{setData({jobId: dataSingle._id}); setModel(true)}} role='button'>
        <label style={{paddingRight:"10px"}}>
            Add Candidate
            </label>
            <IoMdAdd style={{fontSize:"20px"}}/>    
        </div>

    </div>

    <Card>
      <Card.Body>

        <div className="row">

        <div className="col-md-3">
          <FormInput
            label={"Date Posted"}
            type="text"
            value={dataSingle.createdAt?.slice(0,10)}
            containerClass={"mb-3"}
            readOnly
          />
          </div>

          <div className="col-md-2">
          <FormInput
            label={"Job Type"}
            type="text"
            value={dataSingle.jobType}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Job Status"}
            type="text"
            value={dataSingle.jobStatus}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Job Location"}
            type="text"
            value={dataSingle.location}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Experience"}
            type="text"
            value={dataSingle.experience}
            containerClass={"mb-3"}
            readOnly
          />
          </div>
          
          <div className="col-md-2">
          <FormInput
            label={"Status "}
            type="text"
            value={dataSingle.status}
            containerClass={"mb-3"}
            readOnly
          />
          </div>

          {/* <div className="col-md-2">
          <FormInput
            label={"Candidates Applied"}
            type="text"
            value={}
            containerClass={"mb-3"}
            readOnly
          />
          </div> */}
          
          <div className="col-md-6">
          <label className='form-label'>Description</label>
          <textarea cols="10" rows="2" className='form-control' value={dataSingle.description?dataSingle.description:"no description for this job"} readOnly />
          </div>
          
        </div>

        <hr style={{border: "1px solid"}}/>

        {/* <Table
                columns={columns}
                data={newData}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              /> */}

      </Card.Body>
    </Card>

              <JobModel model={model} setModel={setModel} changeHandler={changeHandler} loading={candidateLoading} applyJob={applyJob} data={candidateData}/>


{/* <Modal
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
</Modal> */}


    </>
  )
}

export default SingleJob