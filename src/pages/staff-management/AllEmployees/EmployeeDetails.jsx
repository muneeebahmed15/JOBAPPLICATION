import React, {useEffect, useState} from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { FaGenderless, FaGithub, FaLinkedin, FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { HiMiniUsers } from "react-icons/hi2";
import {  FaPerson } from 'react-icons/fa6';
import { IoBagRemoveOutline, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDateRange, MdOutlinePermIdentity, MdShoppingBag } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import { SingleEmployee } from '../../actions/employee';

const EmployeeDetails = ({ modal, setModal, selectedId }) => {
  const [emp,setEmp]=useState({})

  const { data, loading } = SingleEmployee(selectedId);

  // console.log(data, "employee details");

// useEffect(()=>{
//    let emp1 = selectedId && aData.find(x => x._id === selectedId);
//   setEmp(emp1);

// },[selectedId])


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
      <Modal.Body>
{loading ? "loading..." : <>
        {JSON.stringify(selectedId)}
        {JSON.stringify(data)}
        </>
      }

{/* {/* <img src={emp.personalDetails.img} alt="profile" width={100} className='rounded-circle' style={{ marginRight: "20px" }} /> */}
{/* <FaPerson  size={15} style={{ marginRight: "3px" }} /> */}

       {/* { emp &&  <>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Personal Information</small></b>
            <div className="d-flex align-items-center">
             
              <div className='d-flex flex-column' style={{ width: "100%" }}>

              <label className='d-flex flex-column  mt-2 form-label'>
                 Name   
                 <b>{emp?.personalDetails?.name}</b> 
                  </label>

            <table className='mt-2'>
              <tr>
              {emp?.personalDetails?.DOB && <th>Date of Brith</th> }
              {emp?.personalDetails?.gender &&  <th>Gender</th>}
              {emp?.addresses?.currentAddress &&  <th>Address</th>}
              </tr>

                <tr>
                {emp?.personalDetails?.DOB &&  <td>{emp?.personalDetails?.DOB}</td>}
                {emp?.personalDetails?.gender && <td>{emp?.personalDetails?.gender}</td>}
                {emp?.addresses?.currentAddress && <td>{emp?.addresses?.currentAddress}</td>}
              </tr>
            </table>
               
            <table className='mt-2'>
              <tr>
              {emp?.personalDetails?.martialStatus  && <th>Martial Status</th>}
              {emp?.personalDetails?.phone  && <th>Contact Number</th>}
              {emp?.addresses?.currentAddress && <th>Email</th>}
              </tr>

                <tr>
                {emp?.personalDetails?.martialStatus  &&  <td>{emp?.personalDetails?.martialStatus}</td>}
                {emp?.personalDetails?.phone  && <td>{emp?.personalDetails?.phone}</td>}
                {emp?.addresses?.currentAddress&& <td>{emp?.addresses?.currentAddress}</td>}
              </tr>
            </table>

              </div>
            </div>
            </Card.Body>
            </Card>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Employee Details</small></b>
            <div className="d-flex align-items-center">
            <div className='d-flex flex-column' style={{ width: "100%" }}>

              <label className='d-flex align-items-center mt-2'>
                   Emp ID 
                 <b>{emp?._id}</b> 
                  </label>

            <table className='mt-2'>
              <tr>
              {emp?.joiningDetails?.jobType  && <th>Job Type</th>}
              {emp?.joiningDetails?.timing  && <th>Job Timing</th>}
              {emp?.joiningDetails?.jobStatus  && <th>Job Status</th>}
              </tr>

                <tr>
                {emp?.joiningDetails?.jobType && <td>{emp?.joiningDetails?.jobType}</td>}
                {emp?.joiningDetails?.timing && <td> {emp?.joiningDetails?.timing}</td>}
                {emp?.joiningDetails?.jobStatus && <td>{emp?.joiningDetails?.jobStatus}</td>}
              </tr>
            </table>

            <table className='mt-2'>
              <tr>
              {emp?.joiningDetails?.joiningDate && <th>Joining Date</th> }
              {emp?.joiningDetails?.designation && <th>Designation</th> }
              </tr>

                <tr>
          {emp?.joiningDetails?.joiningDate && <td>{emp?.joiningDetails?.joiningDate}</td> }
          {emp?.joiningDetails?.designation && <td>{emp?.joiningDetails?.designation}</td> }
              </tr>
            </table>       

              </div>
            </div>
            </Card.Body>
            </Card>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Compensation and Benefits</small></b>
             <div className='d-flex flex-column' style={{ width: "100%" }}>

             <table className='mt-2'>
              <tr>
              {emp?.joiningDetails?.startingPackage &&         <th>Starting Package</th>}
              {emp?.joiningDetails?.compensationMethod &&  <th>Compensation Method</th>}
              {emp?.joiningDetails?.benefits &&  <th>Benefits</th>}
              </tr>

                <tr>
                {emp?.joiningDetails?.startingPackage && <td>{emp?.joiningDetails?.startingPackage}</td>}
              {emp?.joiningDetails?.compensationMethod && <td>{emp?.joiningDetails?.compensationMethod}</td>}
              {emp?.joiningDetails?.benefits && <td>{emp?.joiningDetails?.benefits}</td>}
              </tr>
            </table>

            </div>
            </Card.Body>
            </Card>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Work History</small></b>
             <div className='d-flex flex-column' style={{ width: "100%" }}>

             <table className='mt-2'>
              <tr>
              {emp?.employeeEmployement?.companyName &&  <th>Company Name</th>}
              {emp?.employeeEmployement?.designation &&  <th>Designation</th>}
              {emp?.employeeEmployement?.majborRoles &&  <th>Major Roles</th>}
              </tr>

                <tr>
              {emp?.employeeEmployement?.companyName && <td>{emp?.employeeEmployement?.companyName}</td>}
              {emp?.employeeEmployement?.designation && <td>{emp?.employeeEmployement?.designation}</td>}
              {emp?.employeeEmployement?.majborRoles && <td>{emp?.employeeEmployement?.majborRoles}</td>}
              </tr>
            </table>

              <table className='mt-2'>
              <tr>
              {emp?.employeeEmployement?.workDuration &&  <th>Work Duration</th>}
              {emp?.employeeEmployement?.location &&  <th>Location</th>}
              </tr>

                <tr>
                {emp?.employeeEmployement?.workDuration && <td>{emp?.employeeEmployement?.workDuration}</td>}
                {emp?.employeeEmployement?.location && <td>{emp?.employeeEmployement?.location}</td>}
              </tr>
              </table>

            </div>
            </Card.Body>
            </Card>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Education History</small></b>
             <div className='d-flex flex-column' style={{ width: "100%" }}>

             <table className='mt-2'>
              <tr>
              {emp?.employeeEducation?.degree &&  <th>Degree</th>}
              {emp?.employeeEducation?.board &&  <th>Institution/Board</th>}
              {emp?.employeeEducation?.passingYear &&  <th>Passing Year</th>}
              </tr>

                <tr>
                {emp?.employeeEducation?.degree && <td>{emp?.employeeEducation?.degree}</td>}
                {emp?.employeeEducation?.board && <td>{emp?.employeeEducation?.board}</td>}
                {emp?.employeeEducation?.passingYear && <td>{emp?.employeeEducation?.passingYear}</td>}
              </tr>
            </table>

            <table className='mt-2'>
              <tr>
              {emp?.employeeEducation?.score &&  <th>CGPA/Marks</th>}
              {emp?.employeeEducation?.grade &&  <th>Grade/Percentage</th>}
              {emp?.employeeEducation?.majors &&  <th>Majors</th>}
              </tr>

                <tr>
                {emp?.employeeEducation?.score && <td>{emp?.employeeEducation?.score}</td>}
                {emp?.employeeEducation?.grade && <td>{emp?.employeeEducation?.grade}</td>}
                {emp?.employeeEducation?.majors && <td>{emp?.employeeEducation?.majors}</td>}
              </tr>
            </table>

            </div>
            </Card.Body>
            </Card>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Emergency Contact</small></b>
             <div className='d-flex flex-column' style={{ width: "100%" }}>

             <table className='mt-2'>
              <tr>
              {emp?.employeeEmergencyContact?.emergencyContactName &&  <th>Name</th>}
              {emp?.employeeEmergencyContact?.relation &&  <th>Relation</th>}
              {emp?.employeeEmergencyContact?.address &&  <th>Address</th>}
              </tr>

                <tr>
                {emp?.employeeEmergencyContact?.emergencyContactName && <td>{emp?.employeeEmergencyContact?.emergencyContactName}</td>}
                {emp?.employeeEmergencyContact?.relation && <td>{emp?.employeeEmergencyContact?.relation}</td>}
                {emp?.employeeEmergencyContact?.address && <td>{emp?.employeeEmergencyContact?.address}</td>}
              </tr>
            </table>

            <table className='mt-2'>
              <tr>
              {emp?.employeeEmergencyContact?.phone &&  <th>Phone</th>}
              </tr>

                <tr>
                {emp?.employeeEmergencyContact?.phone && <td>{emp?.employeeEmergencyContact?.phone}</td>}
              </tr>
            </table>

            </div>
            </Card.Body>
            </Card>
            
          </> } */}
     
        {/* {!emp && <p>No selected employee</p>} */}
        
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">CV</Button>
        <Button variant="light" className="text-dark" onClick={() => setModal(false)}>Discard</Button>
      </Modal.Footer>
      
    </Modal>
  );
}

export default EmployeeDetails;