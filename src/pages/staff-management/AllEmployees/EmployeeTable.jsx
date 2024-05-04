import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { GetEmployee, SingleEmployee } from '../../actions/employee'
import { IoEyeSharp } from 'react-icons/io5'
import EmployeeDetails from './EmployeeDetails'

const EmployeeTable = () => { 

 const {loading: employeeLoading, data: allEmployee} = GetEmployee();

 const {data, loading: singleLoading, singleEmployee} = SingleEmployee();
 
//  console.log(data,"employee table single data");

 const personalDetails = allEmployee.map(({ _id, personalDetails }) => ({
  _id,
  personalDetails
}));

  const [modal, setModal] = useState(false);
  const [aData, setAdata] = useState(personalDetails);  

  useEffect(() => {
    if (!employeeLoading && allEmployee) {
      setAdata(personalDetails);
    }
  }, [employeeLoading, allEmployee]);

      const searchHandler = (e) =>{
        const filterValue = e.target.value;
        const newData = aData.filter((x)=> x.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        x.appliedFor.toLowerCase().includes(filterValue.toLowerCase())
        );
        setAdata(newData);
      }


      const settingModal = (id) => {
        setModal(true);
        singleEmployee(id);
      // console.log(id);
      }
      
  return (
    <>
    
      <Card>
        <Card.Body>
          <h4 className="header-title mt-0 mb-1">List of Employees</h4>

          <div className="d-flex justify-content-between align-items-center">
                <input type="text" className='form-control' placeholder='Search....' onChange={searchHandler} style={{maxWidth: "25%"}}/>
                {/* <FaEdit size={20} role='button' onClick={()=>setDel(true)}/>  */}
              </div>

          <div className="table-responsive">
            <Table className="mb-0">
              <thead className='table-light'>
               
                <tr>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Linked URL</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {aData.map((x) => (
                  
                    <tr key={x._id}>
                      <td>{x.personalDetails.name}</td>
                      <td>{x?.personalDetails?.department?.name}</td>
                      <td>{x.personalDetails.email}</td>
                      <td>{x.personalDetails.phone}</td>
                      <td>{x.personalDetails.linkedURL}</td>
                      <td>
            <Button
              variant="light"
              onClick={() => settingModal(x._id)}
            >
              <IoEyeSharp size={20}/>
            </Button>
          </td>
                    </tr>
                  
                ))}
              </tbody>
            </Table>
          </div>

     <EmployeeDetails modal={modal} setModal={setModal} loading={singleLoading} data={data}/>

      </Card.Body>
    </Card>
                 
    </>
  )
}

export default EmployeeTable
