
import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { GetLeaves, GetSingleLeave } from '../../actions/leave';
import LeaveModal from './LeaveModal';

const LeaveTable = () => {
  const {loading, list} = GetLeaves();
  const [leaveModal, setLeaveModal] = useState(false);
  const [filtered, setFiltered] = useState();

  const {data, loading: singleLoading, getSingleLeave} = GetSingleLeave()

  // console.log(data);

  const singleLeave = (id) => {
    setLeaveModal(true);
    getSingleLeave(id)
  }

  useEffect(()=>{
    if(list){
      setFiltered(list)
    }
  },[list])

  // console.log(filtered);

  const changeHandler = (e) =>{
    const value = e.target.value;

    const filtering = list.filter((x)=>
    x.empId.personalDetails.name.toLowerCase().includes(value) ||
    x.empId.personalDetails.department.name.toLowerCase().includes(value)
  );
  setFiltered(filtering);
  }
  
  return (
    <>

         <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className='d-flex justify-content-between align-items-center mb-3'>
              <h3 className="mb-0">Leaves List</h3>

              <div>
              <input type="text" className='form-control' placeholder='Search' onChange={changeHandler}/>
              </div>

              </div>

              <div className="table-responsive">
            <Table className="mb-0">
              <thead className='table-light'>
               
                <tr>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Leave Type</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Total Days</th>
                  <th scope="col">Applied On</th>
                  <th scope="col">Remaining Leaves</th>
                  <th scope="col">Status</th>
                  {/* <th scope="col">Action</th> */}
                </tr>
              </thead>

              <tbody>

              {filtered && filtered.map((x) => (
            
                <tr key={x._id}>
                    <td>{x.empId.personalDetails.name}</td>
                    <td>{x.empId.personalDetails.department.name}</td>
                    <td>{x.leaveType}</td>
                    <td>{x.from}</td>
                    <td>{x.to}</td>
                    <td>{x.totalDays}</td>
                    <td>{x.createdAt.slice(0,10)}</td>
                    <td>{x.remainingLeave}</td>
                    <td className={`${x.status === "Approved" ? "bg-success" : 
                    x.status === "Rejected" ? "bg-danger" : "bg-warning" } text-white`} role='button' onClick={()=>singleLeave(x._id)} >{x.status}</td>
                </tr>
            )
        )}
            
              </tbody>
              
            </Table>
          </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    <LeaveModal leaveModal={leaveModal} setLeaveModal={setLeaveModal} data={data}/>

    </>
  )
}

export default LeaveTable
