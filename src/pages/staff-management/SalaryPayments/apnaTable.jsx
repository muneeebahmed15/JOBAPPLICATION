import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import FinalSalaryTable from './FinalSalaryTable';

const columns = [
  {
    title: "Employee Details",
    child:[
    {
      Header: "Emp Image",
    accessor: "empImg",
    sort: true,
  },
  {
    Header: "Employee Name",
    accessor: "employeeName",
    sort: true,
  },
]},
{
  title: "Calculations",
  child: [
  {
    Header: "Hourly Rate",
    accessor: "hourly",
    sort: true,
  },
  {
    Header: "Total Hours",
    accessor: "totalHours",
    sort: true,
  },
  {
    Header: "Overtime Hours (OTH)",
    accessor: "overtimeHours",
    sort: true,
  },
  {
    Header: "Additional Bonus",
    accessor: "bonus",
    sort: true,
  },
  {
    Header: "Deduction",
    accessor: "deduction",
    sort: true,
  }
]},
{
  title: "Total Earnings",
  child:[
  {
    Header: "Total Salary",
    accessor: "totalSalary",
    sort: true,
  }
  ]},
  {
    title: "Actions",
    child:[
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Remarks",
        accessor: "remarks"
      }
    ]
  }
];

  // const data = [
  //   { empImg: avatar1, employeeName: "John Doe", designation: "Manager",  hourly: 200, totalHours: 200, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 200*200, remarks: <FaRegComment size={20}/> },
  //   { empImg: avatar2, employeeName: "King Star", designation: "Web Developer", hourly: 250, totalHours: 210, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*210, remarks: <FaRegComment size={20}/> },
  //   { empImg: avatar3, employeeName: "Rock Star", designation: "Software Developer", hourly: 250, totalHours: 150, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*150, remarks: <FaRegComment size={20}/> },
  //   { empImg: avatar4, employeeName: "Alpha", designation: "UI/UX Designer", hourly: 250, totalHours: 120, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*120, remarks: <FaRegComment size={20}/> },
  //   { empImg: avatar1, employeeName: "Zuker Burg", designation: "Shopify", hourly: 250, totalHours: 140, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*140, remarks: <FaRegComment size={20}/> },
  // ];

const MyTable = () => {


  

  // console.log(detail);

    // const [updatedData, setUpdatedData] = useState(data);


    // const handleFilterChange = (filterOption) => {
    //   let newData = [];
    
    //   switch (filterOption) {
    //     case 'name':
    //       newData = data.slice().sort((a, b) => a.employeeName.localeCompare(b.employeeName));
    //       break;
    //     case 'highestSalary':
    //       newData = data.slice().sort((a, b) => b.totalSalary - a.totalSalary);
    //       break;
    //     case 'lowestSalary':
    //       newData = data.slice().sort((a, b) => a.totalSalary - b.totalSalary);
    //       break;
    //     default:
    //       newData = data;
    //   }
    
    //   setUpdatedData(newData);
    // };
    

  // const handleSearchChange = (e) => {
  //   const filterValue = e.target.value;
  //   const newData = data.filter((item) =>
  //     item.employeeName.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     item.totalSalary.toString().includes(filterValue)
  //   );
  //   setUpdatedData(newData);
  // };



  return (
    <>
    <h2 className='mb-4'>Process Salary</h2>
<Card>
<Card.Body>
               
          <div className='d-flex my-3 justify-content-between align-items-center'>

          {/* <div>
            <input type="text" className='form-control' placeholder='Search...' onChange={handleSearchChange}/>
          </div> */}
         
          <div className='d-flex align-items-center' style={{marginLeft: "5px"}}>

          <div className="me-1">
            <select  className='form-select'>
              <option selected>Choose month</option>
              <option value="">January</option>
              <option value="">Febuary</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
            </div>

            <div className="me-1">
            <select  className='form-select'>
              <option value="" selected>2024</option>
              <option value="">2025</option>
              <option value="">2026</option>
              <option value="">2027</option>
            </select>
            </div>

            {/* <div> 
            <Dropdown>
  <Dropdown.Toggle variant="primary" className="cursor-pointer">
    Filter
    <i className="icon">
      <span>
        <FeatherIcons icon="filter"></FeatherIcons>
      </span>
    </i>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item onClick={() => handleFilterChange('name')}>Name</Dropdown.Item>
    <Dropdown.Item onClick={() => handleFilterChange('highestSalary')}>Highest Salary</Dropdown.Item>
    <Dropdown.Item onClick={() => handleFilterChange('lowestSalary')}>Lowest Salary</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            </div> */}

          </div>

        </div>

  <div className="table-responsive">
    <FinalSalaryTable columns={columns} avatar1={avatar1}/>
  </div>

          

</Card.Body>
</Card>

{/* <Modal
  show={modal}
  onHide={() => setModal(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Add Comment
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    
    <div className='row mx-1'>
        <textarea className='form-control mb-2' placeholder='Comment here' name="comments" value={commentInput} onChange={commentHandler} />
    </div>

    {comments && comments.map((x, index) => (
  <div key={index} className='row mx-1'>
    <label className='form-control mb-2'>{x}</label>
  </div>
))}

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={addComment}>Add</Button>
    <Button onClick={() => setModal(false)}>Close</Button>
  </Modal.Footer>
</Modal> */}

    </>
  )
}

export default MyTable

