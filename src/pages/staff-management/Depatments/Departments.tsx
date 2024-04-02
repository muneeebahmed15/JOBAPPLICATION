import React, { useState } from 'react'
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { IoAdd } from 'react-icons/io5'
import { DepartLink } from './DepartLink'
import DepCard from './DepCard'
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import { FaComputer } from "react-icons/fa6";


const Departments = () => {
  const path = useLocation().pathname
  const [modal, setModal] = useState(false);
  const [depName, setDepName] = useState({name: ""});
 
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setDepName({...depName, [e.target.name]: e.target.value})
  }

  const add = () =>{
    const lastValue = DepartLink[DepartLink.length-1];
    var lastID = parseInt(lastValue.id);
    lastID++;
    const newID = lastID.toString();
    const newDepartment = {
      id: newID,
      name: depName.name,
      link: "/departments",
      total_Emp: "12",
      Present_Emp: "10",
      img: avatar7,
      icon: <FaComputer size={20}/>
    };
    setDepName({name:""})
    setModal(false);
    DepartLink.push(newDepartment)
  }

  return (
    <>
    <BreadCrumbs path={path}/>

      <div className='d-flex justify-content-between align-items-center my-3'>
        <h1>Departments</h1>
        <Button onClick={()=>setModal(true)}><IoAdd size={20}/></Button>
      </div>

 <DepCard/>

    <Modal
  show={modal}
  onHide={() => setModal(false)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Add Department
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className='row'>
      <div className='col-4'>
        <label>Department Name</label>
      </div>
      <div className='col-8'>
        <input type="text" name="name" value={depName.name} onChange={changeHandler} className='form-control' placeholder='Department Name' />
      </div>
    </div>
    <div className='row mt-2'>
      <div className='col-4'>
        <label>Department Description</label>
      </div>
      <div className='col-8'>
        <textarea className='form-control' placeholder='Department Description' />
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={add}>Add</Button>
    <Button onClick={() => setModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>

    </>
  )
}

export default Departments
