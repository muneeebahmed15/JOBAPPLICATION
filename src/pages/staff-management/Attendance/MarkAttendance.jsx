import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import { GetEmployee } from '../../actions/employee'
import { MarkAttendances } from '../../actions/attendance'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const MarkAttendance = () => {
    const [attendanceData, setAttendanceData] = useState()

    const {data, loading} = GetEmployee();
    const {loading: markLoading, markAttendance} = MarkAttendances(attendanceData);

useEffect(()=>{
    const newData = data.map((x)=>({
        date:"",
        empId: x._id,
        status: "",
}));
    setAttendanceData(newData)
},[data])

const statusHandler = (index, value) => {
    setAttendanceData(prev => (
        prev.map((x, i) => {
            if (i === index) {
                return {
                    ...x,
                    status: value
                };
            }
            return x;
        })
    ));
};

const dateHandler = (e) => {
    const { value } = e.target;
    setAttendanceData(prev => (
        prev.map(employee => ({
            ...employee,
            date: value
        }))
    ));
};

return (
    <> 

        <Link to="/staff-management/attendance">
        <Button className="d-flex justify-content-center align-items-center mt-3 mb-4">
          <IoIosArrowBack /> Back
        </Button>
        </Link>

        <Row>
        <Col>
          <Card>
            <Card.Body>
            <div className='d-flex justify-content-between align-items-center'>

            <h3>Mark Attendance</h3>

            <input type="date" name='date' value={attendanceData?.date} onChange={dateHandler} className='form-control' style={{width: "25%"}}/>

        </div>

              <div className="table-responsive">
            <Table className="mb-0">
              <thead className='table-light'>
               
                <tr>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Present</th>
                  <th scope="col">Absent</th>
                  <th scope="col">Leave</th>
                </tr>

              </thead>

              <tbody>

              {data && data.map((x, index) => (
            
                <tr key={index}>
                    <td>{x?.personalDetails.name}</td>
                    <td>{x?.personalDetails.department?.name}</td>

                        <td>
                            <input type='radio' checked={attendanceData[index]?.status === "Present"}
                            onChange={()=>statusHandler(index, 'Present')}
                            />
                        </td>

                        <td>
                            <input type='radio' checked={attendanceData[index]?.status === "Absent"}
                            onChange={()=>statusHandler(index, 'Absent')}
                            />
                        </td>
                        <td>
                            <input type='radio' checked={attendanceData[index]?.status === "Leave"}
                            onChange={()=>statusHandler(index, 'Leave')}
                            />
                        </td>
                    </tr>
            )
        )}
            
              </tbody>
              
            </Table>
          </div>

            <Button className="my-2 float-end" onClick={markAttendance}>{markLoading? "loading..." : "Mark Attendance"}</Button>
            </Card.Body>
          </Card>
          </Col>

</Row>
    </>
  )
}

export default MarkAttendance