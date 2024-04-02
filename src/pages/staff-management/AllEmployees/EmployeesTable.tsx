
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Table from '../../../components/Table'

const columns = [
  {
    Header: "Employee Name",
    accessor: "employeeName",
    sort: true,
  },
  {
    Header: "Employee ID",
    accessor: "employeeId",
    sort: true,
  },
  {
    Header: "Designation",
    accessor: "designation",
    sort: true,
  },
  {
    Header: "Date Added",
    accessor: "dateAdded",
    sort: true,
  },
  {
    Header: "Action",
    accessor: "action",
    sort: true,
  },
];

const data = [
  { employeeName: "John Doe", employeeId: "Ommune_11", designation: "Software Engineer", dateAdded: "4-March-2024", action:"nothing" },
  { employeeName: "King Star", employeeId: "Ommune_13", designation: "Marketing", dateAdded: "14-March-2024", action:"nothing" },
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


const EmployeesTable = () => {

  
  return (
    <>
         <Row>
        <Col>
          <Card>
            <Card.Body>
              <h3 className="mb-3">List of Employees</h3>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default EmployeesTable
