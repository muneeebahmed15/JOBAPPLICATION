import React, {useEffect, useState} from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { FaGenderless, FaGithub, FaLinkedin, FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { HiMiniUsers } from "react-icons/hi2";
import {  FaPerson } from 'react-icons/fa6';
import { IoBagRemoveOutline, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDateRange, MdOutlinePermIdentity, MdShoppingBag } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';

const EmployeeDetails = ({ modal, setModal, aData, selectedId }) => {
  const [emp,setEmp]=useState({})

useEffect(()=>{
   let emp1 = selectedId && aData.find(x => x._id === selectedId);
  setEmp(emp1);

},[selectedId])






  return (
    <Modal
      show={modal}
      onHide={() => setModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
          <FaRegUser size={20} />  Employee Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mt-0'>


       { emp &&  <>

       <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Personal Information</small></b>
            <div className="d-flex align-items-center">
              {/* {/* <img src={emp.personalDetails.img} alt="profile" width={100} className='rounded-circle' style={{ marginRight: "20px" }} /> */}
              <div className='d-flex flex-column' style={{ width: "100%" }}>

              <label className='d-flex flex-column align-items-center mt-2 form-label'>
                 Name   {/* <FaPerson  size={15} style={{ marginRight: "3px" }} /> */}
                 <b>{emp?.personalDetails?.name}</b> 
                  </label>

                <div className='d-flex justify-content-between text-secondary align-items-center mt-2'>
                  <label className='d-flex align-items-center mt-1'>
                    <MdOutlineDateRange  size={15} style={{ marginRight: "3px" }} />
                  {emp?.personalDetails?.DOB}
                  </label>
                  <label className='d-flex align-items-center'><FaGenderless size={15} style={{ marginRight: "3px" }} />
                  {emp?.personalDetails?.gender}
                  </label>

                  <label className='d-flex align-items-center'><IoLocationOutline size={15} style={{ marginRight: "3px" }} />
                  {emp?.addresses?.currentAddress}
                  </label>
                </div>

                <div className='d-flex justify-content-between text-secondary align-items-center mt-2'>
                  <label className='d-flex align-items-center mt-1'>
                    <HiMiniUsers   size={15} style={{ marginRight: "3px" }} />
                  {emp?.personalDetails?.martialStatus}
                  </label>
                  <label className='d-flex align-items-center'><FaPhoneAlt size={15} style={{ marginRight: "3px" }} />
                  {emp?.personalDetails?.phone}
                  </label>

                  <label className='d-flex align-items-center'><IoMdMail size={15} style={{ marginRight: "3px" }} />
                  {emp?.addresses?.currentAddress}
                  </label>
                </div>

              </div>
            </div>
            </Card.Body>
            </Card>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Employee Details</small></b>
            <div className="d-flex align-items-center">
              {/* {/* <img src={emp.personalDetails.img} alt="profile" width={100} className='rounded-circle' style={{ marginRight: "20px" }} /> */}
              <div className='d-flex flex-column' style={{ width: "100%" }}>

              <label className='d-flex align-items-center mt-2'>
                    <MdOutlinePermIdentity  size={15} style={{ marginRight: "3px" }} />
                 <b>{emp?._id}</b> 
                  </label>

                <div className='d-flex justify-content-between text-secondary align-items-center mt-2'>
                  <label className='d-flex align-items-center mt-1'>
                    <MdShoppingBag   size={15} style={{ marginRight: "3px" }} />
                  {emp?.joiningDetails?.jobType}
                  </label>
                  <label className='d-flex align-items-center'><FaGenderless size={15} style={{ marginRight: "3px" }} />
                  {emp?.joiningDetails?.timing}
                  </label>

                  <label className='d-flex align-items-center'><IoLocationOutline size={15} style={{ marginRight: "3px" }} />
                  {emp?.joiningDetails?.jobStatus}
                  </label>
                </div>

                <div className='d-flex justify-content-between text-secondary align-items-center mt-2'>
                  <label className='d-flex align-items-center mt-1'>
                    <MdOutlineDateRange   size={15} style={{ marginRight: "3px" }} />
                  {emp?.joiningDetails?.joiningDate}
                  </label>
                  <label className='d-flex align-items-center'><FaGenderless size={15} style={{ marginRight: "3px" }} />
                  {emp?.joiningDetails?.designation}
                  </label>
                </div>

              </div>
            </div>
            </Card.Body>
            </Card>

            <Card className="mt-1">
              <Card.Body>
                <b className='text-secondary'><small>Professional Skills</small></b> <br />
                <label className='px-2 py-1 rounded-pill text-primary' style={{marginRight:"5px", backgroundColor: "#b7beec"}}>C++</label>
                <label className='px-2 py-1 rounded-pill text-primary' style={{marginRight:"5px", backgroundColor: "#b7beec"}}>Python</label></Card.Body>
            </Card>

            <Card className="mt-1">
              <Card.Body>
                <b className='text-secondary'><small>Work Experience</small></b> <br />
                <div className='d-block'>
                  <b>Microsoft</b>
                  <div style={{marginLeft: "20px", fontSize: "12px"}}>
                    <b>Frontend Developer</b>
                    <div className='text-secondary'>
                      Jan 2024 - Present - New York, USA
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </> }
     
        {!emp && <p>No selected employee</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" className="text-dark" onClick={() => setModal(false)}>Discard</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmployeeDetails;