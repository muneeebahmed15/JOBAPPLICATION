
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Table from '../../../components/Table'

const columns = [
  {
    Header: "Employee ID",
    accessor: "employeeID",
    sort: true,
  },
  {
    Header: "Employee Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Date",
    accessor: "date",
    sort: true,
  },
  {
    Header: "Check In",
    accessor: "checkIn",
    sort: true,
  },
  {
    Header: "Check Out",
    accessor: "checkOut",
    sort: true,
  },
  {
    Header: "Toal Hours",
    accessor: "totalHours",
    sort: true,
  },
  {
    Header: "Approved Overtime Hours",
    accessor: "overtime",
    sort: true,
  },
];

const data = [
  { employeeID: "Ommunie_21", name:"ABC", date: "25 March,2024", checkIn: "9:10", checkOut: "18:10", totalHours: "6", overtime: "2" },
  { employeeID: "Ommunie_42", name:"GHI", date: "29 March,2024", checkIn: "9:10", checkOut: "18:10", totalHours: "6", overtime: "2" },
  { employeeID: "Ommunie_98", name:"XYZ", date: "05 March,2024", checkIn: "9:10", checkOut: "18:10", totalHours: "6", overtime: "2" },
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


const AttendanceTable = () => {

  
  return (
    <>
         <Row>
        <Col>
          <Card>
            <Card.Body>
              <h3 className="mb-3">List of Attendance</h3>

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

export default AttendanceTable
