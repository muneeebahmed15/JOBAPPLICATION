
import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row, Table } from 'react-bootstrap'
// import Table from '../../../components/Table'
import { IoMdAdd } from 'react-icons/io';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GetEmployee } from '../../actions/employee';
import { IoEyeSharp } from 'react-icons/io5';
// import {CSVLink} from "react-csv";

// const columns = [
//   {
//     Header: "Employee ID",
//     accessor: "employeeID",
//     sort: true,
//   },
//   {
//     Header: "Employee Name",
//     accessor: "employeeName",
//     sort: true,
//   },
//   {
//     Header: "Department",
//     accessor: "department",
//     sort: true,
//   },
//   {
//     Header: "Grade",
//     accessor: "grade",
//     sort: true,
//   },
//   {
//     Header: "Hourly",
//     accessor: "hourly",
//     sort: true,
//   },
//   {
//     Header: "Actions",
//     accessor: "actions",
//     sort: true,
//   }
// ];

// const data = [
//   { employeeID: 123, employeeName: "John Doe", department:"Web Developer", grade: "Grade3", hourly: 200 },
//   { employeeID: 456, employeeName: "King Star", department:"Software Engineer", grade: "Grade1", hourly: 250 },
// ];

// const sizePerPageList = [
//   {
//     text: "5",
//     value: 5,
//   },
//   {
//     text: "10",
//     value: 10,
//   },
//   {
//     text: "25",
//     value: 25,
//   },
//   {
//     text: "All",
//     value: data.length,
//   },
// ];

const SalaryTable = () => {
const [generateSalary, setGenerateSalary] = useState(false);
const {data, loading} = GetEmployee();
  // console.log(data);

  return (
    <>
         <Row>
        <Col>
          <Card>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
              <h3 className="mb-3">List of Employees</h3>

            <div className='p-2 bg-primary rounded-3 text-white'>
              <Link to={"/staff-management/salary-payments/process-salary"} className='text-white text-decoration-none' style={{paddingRight:"10px", cursor:"pointer"}}>
                Process Salary
                </Link>
                <IoMdAdd style={{fontSize:"20px"}}/>
                </div>
                
              </div>

              {/* <Table
                columns={columns}
                data={data.map((row) => ({
                  ...row,
                  actions: <Link to={`/staff-management/salary-payments/single/${row.employeeID}`} className='text-black'><FaEdit size={20} style={{ cursor: 'pointer' }} /></Link>,
                }))}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              /> */}

<div className="table-responsive">
            <Table className="mb-0">
              <thead className='table-light'>
               
                <tr>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Hourly Price</th>
                  <th scope="col">Basic Salary</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((x) => {
                  return (
                    <tr key={x._id}>
                      <td>{x.personalDetails.name}</td>
                      <td>{x.personalDetails.department?.name}</td>
                      <td>{x.salaryDetails.hourlySalary}</td>
                      <td>{x.salaryDetails.basicSalary}</td>
                      <td>
            <Link to={`/staff-management/salary-payments/single/${x._id}`}>
            <Button variant="light" >
              <IoEyeSharp size={20}/>
            </Button>
            </Link>
          </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>


            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal
  show={generateSalary}
  onHide={() => setGenerateSalary(false)}
  // size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Add Leave Types
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

    <div className='row'>
      <div className='col-4'>
        <label>Employee Name</label>
      </div>
      <div className='col-8'>
        <select className='form-control'>
            <option value="">Choose Employee</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
        </select>
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>From Date</label>
      </div>
      <div className='col-8'>
        <input type="date" className='form-control' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>To Date</label>
      </div>
      <div className='col-8'>
        <input type="date" className='form-control' />
      </div>
    </div>

  </Modal.Body>
  <Modal.Footer>
  
    <Button variant='light' onClick={()=>setGenerateSalary(false)} className='text-dark'>Discard</Button>
  </Modal.Footer>
</Modal>

    </>
  )
}

export default SalaryTable
