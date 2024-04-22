import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const DepCardModel = ({modal, setModal, updateData, changeHandler, deleteDepartment, deleteLoading, updateDepartment, updateLoading}) => {
  
  const deleteDep = () =>{
    const confirmed = window.confirm("Are you sure you want to delete the department?");

    if(confirmed){
      deleteDepartment();
    }
  }
  
  return (
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

        <input type="text" name="name" value={updateData.name} onChange={changeHandler}  className='form-control' placeholder='Department Name' />
      
        </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={updateDepartment}>{updateLoading ? "loading..." : "Update Department"}</Button>
    <Button onClick={deleteDep}>{deleteLoading ? "loading..." : "Delete Department"}</Button>
    <Button onClick={() => setModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>
  )
}

export default DepCardModel