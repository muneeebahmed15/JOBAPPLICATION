// // import React from 'react'
// // import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
// // import Table from '../../../components/Table'
// // import { Link } from 'react-router-dom';
// // import { FaEdit } from 'react-icons/fa';

import Table from "./apnaTable";

// import React, { useState } from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';

// const columns = [
//     {
//       Header: "Employee ID",
//       accessor: "employeeID",
//       sort: true,
//     },
//     {
//       Header: "Employee Name",
//       accessor: "employeeName",
//       sort: true,
//     },
//     {
//       Header: "Department",
//       accessor: "department",
//       sort: true,
//     },
//     {
//       Header: "Hourly Rate",
//       accessor: "hourly",
//       sort: true,
//     },
//     {
//       Header: "Total Hours",
//       accessor: "totalHours",
//       sort: true,
//     },
//     {
//       Header: "Total Salary",
//       accessor: "totalSalary",
//       sort: true,
//     }
//   ];
  
  // const data = [
  //   { employeeID: 123, employeeName: "John Doe", department:"Web Developer", hourly: 200, totalHours: 192, totalSalary: 0 },
  //   { employeeID: 456, employeeName: "King Star", department:"Software Engineer", hourly: 250, totalHours: 190, totalSalary: 0 },
  // ];
  
//     data.forEach(x=>{
//         x.totalSalary= x.hourly * x.totalHours;
//     })

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




// // const ProcessSalary = () => {
// //   return (
// //     <>

// // <Row>
// //         <Col>
// //           <Card>
// //             <Card.Body>
// //                 <div className='d-flex justify-content-between align-items-center'>
// //               <h3 className="mb-3">Process Salary</h3>
// //               </div>

// //               <Table
// //                 columns={columns}
// //                 data={data}
// //                 pageSize={5}
// //                 sizePerPageList={sizePerPageList}
// //                 isSortable={true}
// //                 pagination={true}
// //                 isSearchable={true}
// //               />
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </>
// //   )
// // }

// // export default ProcessSalary


// // import React, { useState } from 'react';
// // import { Card, Col, Row } from 'react-bootstrap';
// // import Table from 'react-bootstrap/Table';

// // const EditableTable = () => {
// //   // State variables to hold input values for hourly rate and total hours
// //   const [hourlyRates, setHourlyRates] = useState<{ [key: number]: string }>({});
// //   const [totalHours, setTotalHours] = useState<{ [key: number]: string }>({});


// //   // Function to handle change in hourly rate input
// //   const handleHourlyRateChange = (e: React.ChangeEvent<HTMLInputElement>, employeeID: number) => {
// //     setHourlyRates({
// //       ...hourlyRates,
// //       [employeeID]: e.target.value,
// //     });
// //   };

// //   // Function to handle change in total hours input
// //   const handleTotalHoursChange = (e: React.ChangeEvent<HTMLInputElement>, employeeID: number) => {
// //     setTotalHours({
// //       ...totalHours,
// //       [employeeID]: e.target.value,
// //     });
// //   };

// //   return (
// //     <Row>
// //       <Col>
// //         <Card>
// //           <Card.Body>
// //             <h4 className="header-title">Search</h4>
// //             <p className="text-muted fs-14 mb-4">A Table allowing search</p>

// //             <Table striped bordered hover>
// //               <thead>
// //                 <tr>
// //                   {columns.map((column, index) => (
// //                     <th key={index}>{column.Header}</th>
// //                   ))}
// //                   <th>Hourly Rate</th>
// //                   <th>Total Hours</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {data.map((row, index) => (
// //                   <tr key={index}>
// //                     {columns.map((column, columnIndex) => (
// //     <td key={columnIndex}>{row[column.accessor as keyof typeof row]}</td>
// // ))}

// //                     <td>
// //                       <input
// //                         type="number"
// //                         value={hourlyRates[row.employeeID] || ''}
// //                         onChange={(e) => handleHourlyRateChange(e, row.employeeID)}
// //                       />
// //                     </td>
// //                     <td>
// //                       <input
// //                         type="number"
// //                         value={totalHours[row.employeeID] || ''}
// //                         onChange={(e) => handleTotalHoursChange(e, row.employeeID)}
// //                       />
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </Table>
// //           </Card.Body>
// //         </Card>
// //       </Col>
// //     </Row>
// //   );
// // };

// // export default EditableTable;




// const EditableTable = () => {
//   // State variables to hold input values for hourly rate and total hours
//   const [hourlyRates, setHourlyRates] = useState<{ [key: number]: string }>({});
//   const [totalHours, setTotalHours] = useState<{ [key: number]: string }>({});

//   // Function to handle change in hourly rate input
//   const handleHourlyRateChange = (e: React.ChangeEvent<HTMLInputElement>, employeeID: number) => {
//     setHourlyRates({
//       ...hourlyRates,
//       [employeeID]: e.target.value,
//     });
//   };

//   // Function to handle change in total hours input
//   const handleTotalHoursChange = (e: React.ChangeEvent<HTMLInputElement>, employeeID: number) => {
//     setTotalHours({
//       ...totalHours,
//       [employeeID]: e.target.value,
//     });
//   };

//   return (
//     <Row>
//       <Col>
//         <Card>
//           <Card.Body>
//             <h4 className="header-title">Search</h4>
//             <p className="text-muted fs-14 mb-4">A Table allowing search</p>

//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   {columns.map((column, index) => (
//                     <th key={index}>{column.Header}</th>
//                   ))}
//                   <th>Hourly Rate</th>
//                   <th>Total Hours</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((row, index) => (
//                   <tr key={index}>
//                     {columns.map((column, columnIndex) => (
//                       <td key={columnIndex}>
//                         {column.accessor === 'hourly' ? (
//                           <input
//                             type="number"
//                             value={hourlyRates[row.employeeID] || ''}
//                             onChange={(e) => handleHourlyRateChange(e, row.employeeID)}
//                           />
//                         ) : (
//                           row[column.accessor as keyof typeof row]
//                         )}
//                       </td>
//                     ))}
//                     <td>
//                       <input
//                         type="number"
//                         value={totalHours[row.employeeID] || ''}
//                         onChange={(e) => handleTotalHoursChange(e, row.employeeID)}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default EditableTable;




// Assuming you have columns and data defined somewhere in your code

import MyTable from './apnaTable'

const ProcessSalary = () => {
  return (
    <div>
      {/* Render the Table component and pass columns and data props */}
      <MyTable />
    </div>
  );
};

export default ProcessSalary;
