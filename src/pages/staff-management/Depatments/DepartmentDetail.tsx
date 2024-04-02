import React from 'react'
import { useParams } from 'react-router-dom'
import { DepartLink } from './DepartLink';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { IoIosArrowBack, IoMdAdd } from 'react-icons/io';
import EmployeesTable from '../AllEmployees/EmployeesTable';

const DepartmentDetail = () => {
    const {id} = useParams();

    const value = DepartLink.find(x => x.id === id);
    
    if (!value) {
        return <div>Department not found</div>;
    }

  return (
    <>
         <Link to="/staff-management/departments">
        <Button className="d-flex justify-content-center align-items-center mt-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

        <div className='d-flex justify-content-between align-items-center mt-3'>
        <h1>{value.name}</h1>

        <div className='p-2 bg-primary rounded-3'>
        <label style={{paddingRight:"10px"}}><Link to={"/staff-management/employees/add"} className='text-decoration-none text-white'>Add Employee</Link></label><IoMdAdd style={{fontSize:"20px", color:"white"}}/>    
        </div>

        </div>

        <div className='d-flex mt-3 mx-2'>

        <Card>
      <Card.Body>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span className="text-muted text-uppercase fs-12 fw-bold">
              Total Employees
            </span>
            <h3 className="mb-0">0</h3>
          </div>
        </div>
      </Card.Body>
    </Card>

    <Card className='mx-2'>
      <Card.Body>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span className="text-muted text-uppercase fs-12 fw-bold">
              Employees Absent
            </span>
            <h3 className="mb-0">0</h3>
          </div>
        </div>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span className="text-muted text-uppercase fs-12 fw-bold">
              Employees Present
            </span>
            <h3 className="mb-0">0</h3>
          </div>
        </div>
      </Card.Body>
    </Card>

    <Card className="mx-2">
      <Card.Body>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span className="text-muted text-uppercase fs-12 fw-bold">
              Employees on Leave
            </span>
            <h3 className="mb-0">0</h3>
          </div>
        </div>
      </Card.Body>
    </Card>

        </div>

        <hr className='text-dark'/>

        <EmployeesTable />

    </>
  )
}

export default DepartmentDetail
