
import React, { useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { GetAttendance } from '../../actions/attendance';

// const columns = [
//   {
//     Header: "Employee ID",
//     accessor: "employeeID",
//     sort: true,
//   },
//   {
//     Header: "Employee Name",
//     accessor: "name",
//     sort: true,
//   },
//   {
//     Header: "Date",
//     accessor: "date",
//     sort: true,
//   },
//   {
//     Header: "Check In",
//     accessor: "checkIn",
//     sort: true,
//   },
//   {
//     Header: "Check Out",
//     accessor: "checkOut",
//     sort: true,
//   },
//   {
//     Header: "Toal Hours",
//     accessor: "totalHours",
//     sort: true,
//   },
//   {
//     Header: "Approved Overtime Hours",
//     accessor: "overtime",
//     sort: true,
//   },
// ];

// const data = [
//   { employeeID: "Ommunie_21", name:"ABC", date: "25 March,2024", checkIn: "9:10", checkOut: "18:10", totalHours: "6", overtime: "2" },
//   { employeeID: "Ommunie_42", name:"GHI", date: "29 March,2024", checkIn: "9:10", checkOut: "18:10", totalHours: "6", overtime: "2" },
//   { employeeID: "Ommunie_98", name:"XYZ", date: "05 March,2024", checkIn: "9:10", checkOut: "18:10", totalHours: "6", overtime: "2" },
//  ];

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


const AttendanceTable = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const {loading, attendance} = GetAttendance(date);

  // console.log(attendance)

  const dateHandle = (e) => {
    setDate(e.target.value);
  };

  // console.log(attendance);

  return (
    <>
         <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className='d-flex justify-content-between align-items-center'>
              <h3 className="mb-3">List of Attendance</h3>

            <Link to={"/staff-management/attendance/mark-attendance"}>
              <Button>Mark Attendance</Button>
              </Link>  

              </div>

                <div className="d-flex justify-content-end mb-2">
                  <input type="date" className="form-control" name='date' value={date} onChange={dateHandle} style={{width: "25%"}}/>
                </div>

            <div className="table-responsive">
            <Table className="mb-0">
              <thead className='table-light'>
               
                <tr>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  {/* <th scope="col">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {attendance ? attendance.map((x) => (
                  
                    <tr key={x._id}>
                      <td>{x.empId.personalDetails.name}</td>
                      <td>{x.empId.personalDetails.department?.name}</td> 
                      <td>{x.date}</td>
                      <td>{x.status}</td>
                    </tr>
                  
                )): <tr><td><h4>Attendance Not Marked Today</h4></td></tr>}
              </tbody>
            </Table>
          </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AttendanceTable
