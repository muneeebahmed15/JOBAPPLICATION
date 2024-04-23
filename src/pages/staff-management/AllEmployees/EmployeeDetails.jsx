import React, {useEffect, useState} from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { FaGenderless, FaGithub, FaLinkedin, FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { HiMiniUsers } from "react-icons/hi2";
import {  FaPerson } from 'react-icons/fa6';
import { IoBagRemoveOutline, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDateRange, MdOutlinePermIdentity, MdShoppingBag } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import { SingleEmployee } from '../../actions/employee';

const EmployeeDetails = ({ modal, setModal, data, loading }) => {

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

        {/* {JSON.stringify(selectedId)} */}
        {/* {JSON.stringify(data)} */}
        </>
      }

{/* {/* <img src={data.personalDetails.img} alt="profile" width={100} className='rounded-circle' style={{ marginRight: "20px" }} /> */}
{/* <FaPerson  size={15} style={{ marginRight: "3px" }} /> */}

       { data &&  <>

            <Card>
        <Card.Body>     
        <b className='text-secondary'><small>Personal Information</small></b>
            <div className="d-flex align-items-center">
             
              <div className='d-flex flex-column' style={{ width: "100%" }}>

              <label className='d-flex flex-column  mt-2 form-label'>
                 Name   
                 <b>{data?.personalDetails?.name}</b> 
                  </label>

            <table className='mt-2'>
              <tr>
              {data?.personalDetails?.DOB && <th>Date of Brith</th> }
              {data?.personalDetails?.gender &&  <th>Gender</th>}
              {data?.addresses?.currentAddress &&  <th>Address</th>}
              </tr>

                <tr>
                {data?.personalDetails?.DOB &&  <td>{data?.personalDetails?.DOB}</td>}
                {data?.personalDetails?.gender && <td>{data?.personalDetails?.gender}</td>}
                {data?.addresses?.currentAddress && <td>{data?.addresses?.currentAddress}</td>}
              </tr>
            </table>
               
            <table className='mt-2'>
              <tr>
              {data?.personalDetails?.martialStatus  && <th>Martial Status</th>}
              {data?.personalDetails?.phone  && <th>Contact Number</th>}
              {data?.addresses?.currentAddress && <th>Email</th>}
              </tr>

                <tr>
                {data?.personalDetails?.martialStatus  &&  <td>{data?.personalDetails?.martialStatus}</td>}
                {data?.personalDetails?.phone  && <td>{data?.personalDetails?.phone}</td>}
                {data?.addresses?.currentAddress&& <td>{data?.addresses?.currentAddress}</td>}
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
                 <b>{data?._id}</b> 
                  </label>

            <table className='mt-2'>
              <tr>
              {data?.joiningDetails?.jobType  && <th>Job Type</th>}
              {data?.joiningDetails?.timing  && <th>Job Timing</th>}
              {data?.joiningDetails?.jobStatus  && <th>Job Status</th>}
              </tr>

                <tr>
                {data?.joiningDetails?.jobType && <td>{data?.joiningDetails?.jobType}</td>}
                {data?.joiningDetails?.timing && <td> {data?.joiningDetails?.timing}</td>}
                {data?.joiningDetails?.jobStatus && <td>{data?.joiningDetails?.jobStatus}</td>}
              </tr>
            </table>

            <table className='mt-2'>
              <tr>
              {data?.joiningDetails?.joiningDate && <th>Joining Date</th> }
              {data?.joiningDetails?.designation && <th>Designation</th> }
              </tr>

                <tr>
          {data?.joiningDetails?.joiningDate && <td>{data?.joiningDetails?.joiningDate}</td> }
          {data?.joiningDetails?.designation && <td>{data?.joiningDetails?.designation}</td> }
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
              {data?.joiningDetails?.startingPackage &&         <th>Starting Package</th>}
              {data?.joiningDetails?.compensationMethod &&  <th>Compensation Method</th>}
              {data?.joiningDetails?.benefits &&  <th>Benefits</th>}
              </tr>

                <tr>
                {data?.joiningDetails?.startingPackage && <td>{data?.joiningDetails?.startingPackage}</td>}
              {data?.joiningDetails?.compensationMethod && <td>{data?.joiningDetails?.compensationMethod}</td>}
              {data?.joiningDetails?.benefits && <td>{data?.joiningDetails?.benefits}</td>}
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
              {data?.employeeEmployement?.companyName &&  <th>Company Name</th>}
              {data?.employeeEmployement?.designation &&  <th>Designation</th>}
              {data?.employeeEmployement?.majborRoles &&  <th>Major Roles</th>}
              </tr>

                <tr>
              {data?.employeeEmployement?.companyName && <td>{data?.employeeEmployement?.companyName}</td>}
              {data?.employeeEmployement?.designation && <td>{data?.employeeEmployement?.designation}</td>}
              {data?.employeeEmployement?.majborRoles && <td>{data?.employeeEmployement?.majborRoles}</td>}
              </tr>
            </table>

              <table className='mt-2'>
              <tr>
              {data?.employeeEmployement?.workDuration &&  <th>Work Duration</th>}
              {data?.employeeEmployement?.location &&  <th>Location</th>}
              </tr>

                <tr>
                {data?.employeeEmployement?.workDuration && <td>{data?.employeeEmployement?.workDuration}</td>}
                {data?.employeeEmployement?.location && <td>{data?.employeeEmployement?.location}</td>}
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
              {data?.employeeEducation?.degree &&  <th>Degree</th>}
              {data?.employeeEducation?.board &&  <th>Institution/Board</th>}
              {data?.employeeEducation?.passingYear &&  <th>Passing Year</th>}
              </tr>

                <tr>
                {data?.employeeEducation?.degree && <td>{data?.employeeEducation?.degree}</td>}
                {data?.employeeEducation?.board && <td>{data?.employeeEducation?.board}</td>}
                {data?.employeeEducation?.passingYear && <td>{data?.employeeEducation?.passingYear}</td>}
              </tr>
            </table>

            <table className='mt-2'>
              <tr>
              {data?.employeeEducation?.score &&  <th>CGPA/Marks</th>}
              {data?.employeeEducation?.grade &&  <th>Grade/Percentage</th>}
              {data?.employeeEducation?.majors &&  <th>Majors</th>}
              </tr>

                <tr>
                {data?.employeeEducation?.score && <td>{data?.employeeEducation?.score}</td>}
                {data?.employeeEducation?.grade && <td>{data?.employeeEducation?.grade}</td>}
                {data?.employeeEducation?.majors && <td>{data?.employeeEducation?.majors}</td>}
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
              {data?.employeeEmergencyContact?.emergencyContactName &&  <th>Name</th>}
              {data?.employeeEmergencyContact?.relation &&  <th>Relation</th>}
              {data?.employeeEmergencyContact?.address &&  <th>Address</th>}
              </tr>

                <tr>
                {data?.employeeEmergencyContact?.emergencyContactName && <td>{data?.employeeEmergencyContact?.emergencyContactName}</td>}
                {data?.employeeEmergencyContact?.relation && <td>{data?.employeeEmergencyContact?.relation}</td>}
                {data?.employeeEmergencyContact?.address && <td>{data?.employeeEmergencyContact?.address}</td>}
              </tr>
            </table>

            <table className='mt-2'>
              <tr>
              {data?.employeeEmergencyContact?.phone &&  <th>Phone</th>}
              </tr>

                <tr>
                {data?.employeeEmergencyContact?.phone && <td>{data?.employeeEmergencyContact?.phone}</td>}
              </tr>
            </table>

            </div>
            </Card.Body>
            </Card>
            
          </> }
     
        {/* {!data && <p>No selected employee</p>} */}
        
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">CV</Button>
        <Button variant="light" className="text-dark" onClick={() => setModal(false)}>Discard</Button>
      </Modal.Footer>
      
    </Modal>
  );
}

export default EmployeeDetails;