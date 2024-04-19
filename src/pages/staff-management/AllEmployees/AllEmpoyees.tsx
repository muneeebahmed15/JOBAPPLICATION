import React from 'react'
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
 import "../../css/stylesheet.css";
import EmployeesTable from './EmployeesTable';
import { Link } from 'react-router-dom';


const AllEmpoyees = ({ from }: { from: any }) => {
  const path = useLocation().pathname;


  return (
    <>
    { from !== "dashboard" && <BreadCrumbs path={path}/>}



    <div className='mt-3'>

      {from !== "dashboard" && <div className='d-flex justify-content-between align-items-center text-white'>
      <h1>All Employees</h1>

      <div className='p-2 bg-primary rounded-3'>

      <Link to={'/staff-management/employees/add'}><IoMdAdd style={{fontSize:"20px", color: "white"}}/></Link>
    
      </div>
      </div>}


        <div className='my-3'>
          <EmployeesTable /> 
        </div>

    </div>
    </>
  )
}

export default AllEmpoyees
