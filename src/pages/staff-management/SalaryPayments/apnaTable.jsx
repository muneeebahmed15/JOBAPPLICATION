import React, { useState } from 'react'
import { Button, Card, Dropdown, Modal, Table } from 'react-bootstrap';
import FeatherIcons from "feather-icons-react";
import { FaRegComment } from 'react-icons/fa6';
import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../../assets/images/users/avatar-4.jpg"



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

  const data = [
    { empImg: avatar1, employeeName: "John Doe", designation: "Manager",  hourly: 200, totalHours: 200, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 200*200, remarks: <FaRegComment size={20}/> },
    { empImg: avatar2, employeeName: "King Star", designation: "Web Developer", hourly: 250, totalHours: 210, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*210, remarks: <FaRegComment size={20}/> },
    { empImg: avatar3, employeeName: "Rock Star", designation: "Software Developer", hourly: 250, totalHours: 150, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*150, remarks: <FaRegComment size={20}/> },
    { empImg: avatar4, employeeName: "Alpha", designation: "UI/UX Designer", hourly: 250, totalHours: 120, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*120, remarks: <FaRegComment size={20}/> },
    { empImg: avatar1, employeeName: "Zuker Burg", designation: "Shopify", hourly: 250, totalHours: 140, bonus: 0, overtimeHours: 0, deduction: 0, totalSalary: 250*140, remarks: <FaRegComment size={20}/> },
  ];

const MyTable = () => {
    const [updatedData, setUpdatedData] = useState(data);
    const [modal, setModal] = useState(false);
    const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);

  const commentHandler = (e) => {
    setCommentInput(e.target.value);
  };

  const addComment = () => {
    if (commentInput.trim() !== '') {
      setComments(prevComments => [...prevComments, commentInput.trim()]);
      setCommentInput('');
    }
  };


    const handleFilterChange = (filterOption) => {
      let newData = [];
    
      switch (filterOption) {
        case 'name':
          newData = data.slice().sort((a, b) => a.employeeName.localeCompare(b.employeeName));
          break;
        case 'highestSalary':
          newData = data.slice().sort((a, b) => b.totalSalary - a.totalSalary);
          break;
        case 'lowestSalary':
          newData = data.slice().sort((a, b) => a.totalSalary - b.totalSalary);
          break;
        default:
          newData = data;
      }
    
      setUpdatedData(newData);
    };
    

  const handleSearchChange = (e) => {
    const filterValue = e.target.value;
    const newData = data.filter((item) =>
      item.employeeName.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.totalSalary.toString().includes(filterValue)
    );
    setUpdatedData(newData);
  };

    const changeHandler = (e, index) =>{
        const {name, value} = e.target;
        const newData = [...updatedData];
        newData[index][name] = value;
        calculateHours(index, newData);
    };

    const calculateHours = (index, newData) => {  
      const hourlyRate = parseInt(newData[index].hourly);
      const totalHours = parseInt(newData[index].totalHours);
    const bonus = parseInt(newData[index].bonus);
    const deduction = parseInt(newData[index].deduction);
    const overtimeHours = parseInt(newData[index].overtimeHours);


    newData[index].totalSalary = hourlyRate * (totalHours + overtimeHours) + bonus -deduction;
    setUpdatedData(newData);
    };
    

  return (
    <>
    <h2 className='mb-4'>Process Salary</h2>
<Card>
<Card.Body>
        
          
          <div className='d-flex my-3 justify-content-between align-items-center'>

          <div>
            <input type="text" className='form-control' placeholder='Search...' onChange={handleSearchChange}/>
          </div>
         
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

            <div> 
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

            </div>

          </div>
        </div>

  <div className="table-responsive">
    <Table className="table mb-0 border table-auto">

      <thead>

        <tr>
          {columns.map((columnGroup, index) => (
            <th key={index} style={{textAlign: "center"}} colSpan={columnGroup.child.length} scope="colgroup">{columnGroup.title}</th>
          ))}
        </tr>
        <tr style={{whiteSpace: "nowrap"}}>
          {columns.map((columnGroup) => (
            columnGroup.child.map((column, index) => (
              <th key={index} scope="col" style={{backgroundColor: column.Header === "Deduction" ? "#ffdad2" :
              column.Header === "Additional Bonus" ? "#d0feed" :
              column.Header === "Employee ID" ? "#fff" :
              column.Header === "Employee Name" ? "#fff" :
              column.Header === "Hourly Rate" ? "#e7f3ff" :
              column.Header === "Total Hours" ? "#e7f3ff" :
              column.Header === "Overtime Hours (OTH)" ? "#e7f3ff" :
              column.Header === "Total Salary" ? "#e7f3ff" :
              column.Header === "Status" ? "#e6ccff" :
              column.Header === "Remarks" ? "#e6ccff" : ""}}>{column.Header}</th>
            ))
          ))}
        </tr>

      </thead>
      <tbody>
        {updatedData.map((x, index)=>(
            <tr key={index}>
                <td>
                  <img src={x.empImg} alt="" className='rounded-circle' style={{width: "50px"}} />
                  </td>

                <td>
                {x.employeeName && (
        <div>
          <span>{x.employeeName}</span>
          <br />
          <small className='text-primary'>{x.designation}</small>
        </div>
      )}
      </td>
                <td style={{backgroundColor: "#e7f3ff"}}>
                <input type='number' className='form-control bg-transparent' name='hourly' value={x.hourly} onChange={(e)=>changeHandler(e,index)} style={{ border: "none", width: "100%"}}/>  
                </td>

                <td style={{backgroundColor: "#e7f3ff"}}> 
                <input type='number' className='form-control bg-transparent' name='totalHours' value={x.totalHours} onChange={(e)=>changeHandler(e, index)} style={{ border: "none", width: "100%"}}/>
                </td>

                <td style={{backgroundColor: "#e7f3ff"}}> 
                <input type='number' className='form-control bg-transparent' name='overtimeHours' value={x.overtimeHours} onChange={(e)=>changeHandler(e, index)} style={{border: "none", width: "100%"}}/>
                </td>

                <td style={{backgroundColor: "#d0feed"}}> 
                <input type='number' className='form-control bg-transparent' name='bonus' value={x.bonus} onChange={(e)=>changeHandler(e, index)} style={{ border: "none", width: "100%"}}/>
                </td>

                <td style={{backgroundColor:"#ffdad2"}}> 
                <input type='number' className='form-control bg-transparent' name='deduction' value={x.deduction} onChange={(e)=>changeHandler(e, index)} style={{border: "none", width: "100%"}}/>
                </td>


                <td  style={{backgroundColor: "#d0feed"}}>{x.totalSalary}</td>
                
                <td style={{ minWidth: "120px", backgroundColor: "#e6ccff"}}>
                  <select className='form-select bg-transparent' style={{fontSize: "10px" }}>
                    <option selected >Pending</option>
                    <option value="">Fully transferred</option>
                    <option value="">Partial transferred</option>
                    <option value="">Advance paid</option>
                  </select>
                  </td>
                
                <td style={{backgroundColor: "#e6ccff"}} onClick={()=>setModal(true)} role='button'>{x.remarks}</td>
            </tr>
        ))}

        <tr>
          <td colSpan={"2"}>Total Employees <br/><b>{updatedData.length}</b></td>
          <td colSpan={"4"} style={{textAlign: "end"}}>Total Bonus<br/> <b>{updatedData.reduce((totalBonus, employee) => totalBonus + parseInt(employee.bonus), 0)}</b></td>
          <td></td>
          <td colSpan={"1"} style={{textAlign: "end"}}>TotalAmount<br/> <b>{updatedData.reduce((total, employee) => total + employee.totalSalary, 0)} </b></td>
          <td colSpan={"2"}></td>
        </tr>

      
      </tbody>
    </Table>
  </div>

          <div style={{textAlign: "end"}}>
          <Button className='mt-3'>Submit</Button>
          </div>

</Card.Body>
</Card>

<Modal
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
</Modal>

    </>
  )
}

export default MyTable



// table with search functionality

// import React, { useState } from "react";

// const data = [
//   {
//     id: 303940,
//     name: "Benjamin Thompson",
//     basicSalary: 10500.00,
//     healthInsurance: 600.00,
//     totalSalary: 11100.00,
//     totalAdditions: 1600.00,
//     totalDeductions: 1400.00,
//   },
//   {
//     id: 303945,
//     name: "Emily Williams",
//     basicSalary: 9500.00,
//     healthInsurance: 800.00,
//     totalSalary: 10300.00,
//     totalAdditions: 1150.00,
//     totalDeductions: 1520.00,
//   },
//   // Add more data as needed
// ];

// const Table = () => {
//   const [columns, setColumns] = useState(
//     [
//       { label: "ID", accessor: "id" },
//       { label: "Name", accessor: "name" },
//       { label: "Basic salary", accessor: "basicSalary" },
//       { label: "Health insurance", accessor: "healthInsurance" },
//       { label: "Total salary", accessor: "totalSalary" },
//       { label: "Total additions", accessor: "totalAdditions" },
//       { label: "Total deductions", accessor: "totalDeductions" },
//     ]
//   );

//   const [filteredData, setFilteredData] = useState(data);

//   const handleFilterChange = (e) => {
//     const filterValue = e.target.value;
//     const filteredData = data.filter((item) =>
//       item.name.toLowerCase().includes(filterValue.toLowerCase())
//     );
//     setFilteredData(filteredData);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>
//             <input
//               type="text"
//               placeholder="Search employee..."
//               onChange={handleFilterChange}
//             />
//           </th>
//           {columns.map((column, index) => (
//             <th key={index}>{column.label}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {filteredData.map((item, index) => (
//           <tr key={index}>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.basicSalary}</td>
//             <td>{item.healthInsurance}</td>
//             <td>{item.totalSalary}</td>
//             <td>{item.totalAdditions}</td>
//             <td>{item.totalDeductions}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;


// import { title } from 'process';
// import React from 'react';

// const columns = [
//   {
//     title: "Employee Details",
//     child:[
//     {
//       Header: "Employee ID",
//     accessor: "employeeID",
//     sort: true,
//   },
//   {
//     Header: "Employee Name",
//     accessor: "employeeName",
//     sort: true,
//   },
// ]},
// {
//   title: "Earnings",
//   child: [
//   {
//     Header: "Hourly Rate",
//     accessor: "hourly",
//     sort: true,
//   },
//   {
//     Header: "Total Hours",
//     accessor: "totalHours",
//     sort: true,
//   },
//   {
//     Header: "Deduction",
//     accessor: "deduction",
//     sort: true,
//   },
//   {
//     Header: "Total Salary",
//     accessor: "totalSalary",
//     sort: true,
//   }
// ]}
// ];

// const data = [
//   { employeeID: 123, employeeName: "John Doe",  hourly: 200, totalHours: 192, deduction: 0, totalSalary: 200*192 },
//   { employeeID: 456, employeeName: "King Star", hourly: 250, totalHours: 190, deduction: 0, totalSalary: 250*190 },
// ];

// const Table = () => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           {columns.map((column, index) => (
//             <th key={index} scope="col">{column.Header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((employee, index) => (
//           <React.Fragment key={index}>
//             <tr>
//               <th colSpan="2">Employee Details</th>
//             </tr>
//             <tr>
//               <td>Employee ID:</td>
//               <td>{employee.employeeID}</td>
//             </tr>
//             <tr>
//               <td>Employee Name:</td>
//               <td>{employee.employeeName}</td>
//             </tr>
//             <tr>
//               <th colSpan="2">Total Earnings</th>
//             </tr>
//             <tr>
//               <td>Total Salary:</td>
//               <td>{employee.totalSalary}</td>
//             </tr>
//             <tr>
//               <td>Hourly Rate:</td>
//               <td>{employee.hourly}</td>
//             </tr>
//             <tr>
//               <td>Total Hours:</td>
//               <td>{employee.totalHours}</td>
//             </tr>
//             <tr>
//               <td>Deduction:</td>
//               <td>{employee.deduction}</td>
//             </tr>
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
