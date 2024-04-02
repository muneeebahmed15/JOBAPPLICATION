import React from 'react'
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import SalaryTable from './SalaryTable'
import { IoMdAdd } from 'react-icons/io'

const SalaryPayments = () => {
  const path = useLocation().pathname
  return (
    <>
    <BreadCrumbs path={path}/>

    <div className='d-flex justify-content-between align-items-center text-white'>
<h1>Salary Management</h1>
</div>
    
    <div className="my-3">
      <SalaryTable/>
    </div>
    
    </>
  )
}

export default SalaryPayments