import React from 'react'
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
 import "../../css/stylesheet.css";
 import { IoSearch } from "react-icons/io5";
import EmployeesTable from './EmployeesTable';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const columns = [
  {
    Header: "Employee Name",
    accessor: "employeeName",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Employee ID",
    accessor: "employeeId",
  },
  {
    Header: "Designation",
    accessor: "designation",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Date Added",
    accessor: "dateAdded",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const data = [
  { employeeName: "John Doe", phone:"123456789", employeeId: "Ommune_11", designation: "Web Developer", role: "Employee", dateAdded: "4-March-2024", action:"nothing" },
  { employeeName: "King Star", phone:"987654321", employeeId: "Ommune_13", designation: "Web Designer", role: "Employee", dateAdded: "14-March-2024", action:"nothing" },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];


const AllEmpoyees = ({ from }: { from: any }) => {
  const path = useLocation().pathname
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
