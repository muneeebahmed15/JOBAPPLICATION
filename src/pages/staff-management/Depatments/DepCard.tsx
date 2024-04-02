import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import {DepartLink} from './DepartLink'
import { Button, Card,  Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../css/stylesheet.css"

const DepCard = () => {
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedName, setSelectedName] = useState('');

  const settingModal = (id: string) =>{
    setModal(true);
    setSelectedId(id);

    const departName = DepartLink.find(x=> x.id === id);

    if(departName){
      setSelectedName(departName.name);
    }
    
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedName(e.target.value);
  }


  const handleSave = () => {
    if (selectedId !== "") {
      const index = DepartLink.findIndex(x=> x.id === selectedId);
      
      DepartLink[index] = { ...DepartLink[index], name: selectedName };
      setModal(false);
    }
  }

  return (
    <>

    {/* <div className='row' style={{marginLeft:"8px"}}>
    {DepartLink.map((dep)=>(
      <div key={dep.id} className='col-md-4 d-flex flex-column bg-secondary text-white rounded-3 p-2 my-3' style={{marginRight: "10px", width:"280px"}}>
        
        <div className='d-flex justify-content-between align-items-center'>

            <Link to={`/staff-management/departments/details/${dep.id}`}>
              <h3 className='hover-effect' style={{width:"170px"}}>{dep.name}</h3>
              </Link>

            <FaEdit size={20} role='button' className='hover-effect' onClick={()=>settingModal(dep.id)}/>
        </div>

        <div className='d-flex pt-2 m-1 text-white'>

            <div className='bg-dark p-1 rounded-3' style={{width:"100px", marginRight:"10px"}}>
                <p style={{marginBottom:"0"}}>{dep.total_Emp}</p>
                <strong>Total Employees</strong>
            </div>

            <div className='bg-dark p-1 rounded-3' style={{width:"150px"}}>
                <p style={{marginBottom:"0"}}>{dep.Present_Emp}</p>
                <strong>Employees Present</strong>
            </div>
        </div>

      </div>
      ))}
      </div> */}

<div className="row">
  {DepartLink.map((x)=>(
        <div key={x.id} className="col-md-4">
        <Card>
      <Card.Body>
        <div className="d-flex">
          <div className='d-flex justify-content-center align-items-center my-1 text-white p-2 rounded-circle'style={{marginRight:"5px", backgroundColor: "#5369f8"}}>
          {x.icon}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link to={`/staff-management/departments/details/${x.id}`}>
              <h4 className="hover-effect cursor-pointer" style={{width:"140px"}}>{x.name}</h4>
              </Link>
          </div>
          <FaEdit size={20} className="float-end hover-effect" role='button' onClick={()=>settingModal(x.id)} style={{alignContent: "end"}}/>
        </div>
      </Card.Body>
    </Card>
    </div>
))}
    </div>

      <Modal
  show={modal}
  onHide={() => setModal(false)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Edit Department
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className='row'>
      <div className='col-4'>
        <label>Department Name</label>
      </div>
      <div className='col-8'> 

      {selectedId !== "" && (
        <input type="text" name="name" value={selectedName} onChange={changeHandler}  className='form-control' placeholder='Department Name' />
        )}
        </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={handleSave}>Update Department</Button>
    <Button onClick={() => setModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>

    </>
  )
}

export default DepCard
