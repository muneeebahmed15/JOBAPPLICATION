
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { IoAdd } from 'react-icons/io5'
import DepCard from './DepCard'
import {  Department  } from '../../actions/department'


const Departments = () => {
  const path = useLocation().pathname
 
  const {registerDepartment, regLoading, changeHandler, regDep, modal, setModal} = Department()


  return (
    <>
    <BreadCrumbs path={path}/>

      <div className='d-flex justify-content-between align-items-center my-3'>
        <h1>Departments</h1>
        <div>
        {/* <Button onClick={()=>window.location.reload()} className='mx-3'>{loading ? "loading..." : "Reload"}</Button> */}
        <Button onClick={()=>setModal(true)}><IoAdd size={20}/></Button>
        </div>
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
        <input type="text" name="name" value={regDep.name} onChange={changeHandler} className='form-control' placeholder='Department Name' />
      </div>
    </div>
    <div className='row mt-2'>
      <div className='col-4'>
        <label>Department Description</label>
      </div>
      <div className='col-8'>
        <textarea name="description" value={regDep.description} onChange={changeHandler} className='form-control' placeholder='Department Description' />
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={registerDepartment}>{regLoading ? "loading..." : "Add"}</Button>
    <Button onClick={() => setModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>

    </>
  )
}

export default Departments
