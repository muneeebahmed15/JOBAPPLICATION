import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { Card   } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../css/stylesheet.css"
import { Department } from '../../actions/department'
import DepCardModel from './DepCardModel'

const DepCard = () => {
  const [selectedId, setSelectedId] = useState("");
   
  const {allDep, updateDepartment, deleteDepartment, deleteLoading, updateLoading, regDep, changeHandler, modal, setModal} = Department();


  const settingModal = (id) =>{
    setModal(true);
    setSelectedId(id);   
  }

  useEffect(()=>{
    regDep.id = selectedId
  }, [selectedId])

  // console.log(regDep);


  return (
    <>

<div className="row">

  { allDep?.map((x)=>(
        <div key={x._id} className="col-md-4">
        <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className='d-flex align-items-center'>

            <div className='my-1 text-white p-2 rounded-circle' style={{marginRight:"5px", width:"10px", backgroundColor: "#5369f8"}}>
         
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <Link to={`/staff-management/departments/details/${x._id}`}>
              <h4 className="hover-effect cursor-pointer" style={{width:"150px"}}>{x.name}</h4>
              </Link>
          </div>

          </div>
          
          <FaEdit size={20} className="float-end hover-effect" role='button' onClick={()=>settingModal(x._id)} style={{alignContent: "end"}}/>
        </div>
      </Card.Body>
    </Card>
    </div>
))}

    </div>

    <DepCardModel modal={modal} setModal={setModal} updateData={regDep}  deleteDepartment={deleteDepartment} deleteLoading={deleteLoading} changeHandler={changeHandler} updateDepartment={updateDepartment} updateLoading={updateLoading}/>

    </>
  )
}

export default DepCard
