import React from 'react'
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
 import "../../css/stylesheet.css";
 import { IoSearch } from "react-icons/io5";
// import Table from './Table';
import AttendanceTable from './AttendanceTable';
import { Link } from 'react-router-dom';

const columns = [
  {
    Header: "Employee ID",
    accessor: "employeeId",
  },
  {
    Header: "Profile",
    accessor: "profile",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Last Absent",
    accessor: "lastAbsent",
  },
  {
    Header: "Leaves",
    accessor: "leaves",
  },
  {
    Header: "Future Appproved Leaves",
    accessor: "futureLeaves",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const data = [
  { employeeId: "Ommune_11", profile: "", name: "John Doe", lastAbsent: "22 March, 2024", leaves: "Paid: 1/22 Unpaid: 0/22", futureLeaves: "Paid: 0 Unpaid: 0", status: "Active", },
  { employeeId: "Ommune_15", profile: "", name: "Abc", lastAbsent: "24 March, 2024", leaves: "Paid: 1/22 Unpaid: 0/22", futureLeaves: "Paid: 0 Unpaid: 0", status: "Active", },
];



const Attendance = () => {
  const path = useLocation().pathname
  return (
    <>
    <BreadCrumbs path={path}/>
   
    <div className='mt-3'>

<div className='d-flex justify-content-between align-items-center text-white'>
<h1>Attendance Management</h1>

{/* <div className='p-2 bg-primary rounded-3'>

  <label style={{paddingRight:"10px"}}><Link to={"/staff-management/attendance/mark-attendance"} className='text-decoration-none text-white'>Mark Attendance</Link></label><IoMdAdd style={{fontSize:"20px"}}/>    
</div> */}

</div>

  <div className='my-3'>
    <AttendanceTable/>
  </div>

</div>
{/* </div> */}

    </>
  )
}

export default Attendance