
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Table from '../../../components/Table'
import { GetEmployee } from '../../actions/employee';

const columns = [
  {
    Header: "Employee Name",
    accessor: "name",
    sort: true,
  },
  // {
  //   Header: "Employee ID",
  //   accessor: "employeeId",
  //   sort: true,
  // },
  {
    Header: "Department",
    accessor: "department",
    sort: true,
  },
  {
    Header: "Email",
    accessor: "email",
    sort: true,
  },
  {
    Header: "Phone",
    accessor: "phone",
    sort: true,
  },
  {
    Header: "Linkedin URL",
    accessor: "linkedinURL",
    sort: true,
  },
];

// const abc = [
//   { employeeName: "John Doe", employeeId: "Ommune_11", designation: "Software Engineer", dateAdded: "4-March-2024", action:"nothing" },
//   { employeeName: "King Star", employeeId: "Ommune_13", designation: "Marketing", dateAdded: "14-March-2024", action:"nothing" },
// ];


const EmployeesTable = () => {

  const {loading, data, personalDetails} = GetEmployee();


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
    value: personalDetails.length,
  },
];


  return (
    <>
         <Row>
        <Col>
          <Card>
            <Card.Body>
              <h3 className="mb-3">List of Employees</h3>

              <Table
                columns={columns}
                data={personalDetails}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
                from= "all-employees" 
                abc={data}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default EmployeesTable
