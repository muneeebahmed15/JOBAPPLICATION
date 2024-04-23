// import React, { useState } from 'react'
// import RemarkModal from './RemarkModal'
// import { Table } from 'react-bootstrap'

// const TableBody = ({
//     detail, 
//     // salaryHandler, 
//     salary, 
//     avatar1,
//     modal,
//     setModal,
//     columns
// }) => {

//     const [salaries, setSalaries] = useState(detail.map(x=>({
//         empId: x._id,
//         totalHours: "",
//         bonus: "",
//         overtimeHours: "",
//         deduction: "",
//         totalSalary: "",
//         status: "",
//         remarks: ""
//     })))

//         const salaryHandler =(e, empId) =>{
//             // const {name, value} =e.target;
//             setSalaries(prevSalaries => prevSalaries.map(salary =>{
//                 if(salary.empId = empId){
//                     return {...salary, [e.target.name]: e.target.value}
//                 }
//                 return salary;
//             }));
//         }

//     console.log(salaries, "custom salaries")

//   return (
//     <div>
// <Table className="table mb-0 border table-auto">

// <thead>

// <tr>
//   {columns.map((columnGroup, index) => (
//     <th key={index} style={{textAlign: "center"}} colSpan={columnGroup.child.length} scope="colgroup">{columnGroup.title}</th>
//   ))}
// </tr>

// <tr style={{whiteSpace: "nowrap"}}>
//   {columns.map((columnGroup) => (
//     columnGroup.child.map((column, index) => (
//       <th key={index} scope="col" style={{backgroundColor: column.Header === "Deduction" ? "#ffdad2" :
//       column.Header === "Additional Bonus" ? "#d0feed" :
//       column.Header === "Employee ID" ? "#fff" :
//       column.Header === "Employee Name" ? "#fff" :
//       column.Header === "Hourly Rate" ? "#e7f3ff" :
//       column.Header === "Total Hours" ? "#e7f3ff" :
//       column.Header === "Overtime Hours (OTH)" ? "#e7f3ff" :
//       column.Header === "Total Salary" ? "#e7f3ff" :
//       column.Header === "Status" ? "#e6ccff" :
//       column.Header === "Remarks" ? "#e6ccff" : ""}}>{column.Header}</th>
//     ))
//   ))}
// </tr>

// </thead>

//             <tbody>

// {detail.map((x)=>(
//     <tr key={x._id}>
//         <td>
//           <img src={avatar1} alt="" className='rounded-circle' style={{width: "50px"}} />
//           </td>

//         <td>  
// <div>
//   <span>{x.personalDetails.name}</span>
//   <br />
//   <small className='text-primary'>{x.personalDetails?.department?.name}</small>
// </div>
// </td>
//         <td style={{backgroundColor: "#e7f3ff"}}>
//         <input type='number' className='form-control bg-transparent' name='hourlyRate' value={x?.salaryDetails?.hourlySalary} style={{ border: "none", width: "100%"}}/>  
//         </td>

//         <td style={{backgroundColor: "#e7f3ff"}}> 
//         <input type='number' className='form-control bg-transparent' name='totalHours' value={salaries.find(salary=> salary.empId === x._id)?.totalHours} onChange={()=>salaryHandler(x._id)} style={{ border: "none", width: "100%"}}/>
//         </td>

//         <td style={{backgroundColor: "#e7f3ff"}}> 
//         <input type='number' className='form-control bg-transparent' name='overtimeHours' value={salary.overtimeHours} onChange={salaryHandler}  style={{border: "none", width: "100%"}}/>
//         </td>

//         <td style={{backgroundColor: "#d0feed"}}> 
//         <input type='number' className='form-control bg-transparent' name='bonus' value={salary.bonus} onChange={salaryHandler}  style={{ border: "none", width: "100%"}}/>
//         </td>

//         <td style={{backgroundColor:"#ffdad2"}}> 
//         <input type='number' className='form-control bg-transparent' name='deduction' value={salary.deduction} onChange={salaryHandler}  style={{border: "none", width: "100%"}}/>
//         </td>


//         <td  style={{backgroundColor: "#d0feed"}} value={salary.totalSalary} onChange={salaryHandler}>{x.totalSalary}</td>
        
//         <td style={{ minWidth: "120px", backgroundColor: "#e6ccff"}}>
//           <select className='form-select bg-transparent' style={{fontSize: "10px" }}>
//             <option selected >Pending</option>
//             <option value="">Fully transferred</option>
//             <option value="">Partial transferred</option>
//             <option value="">Advance paid</option>
//           </select>
//           </td>
        
//         <td style={{backgroundColor: "#e6ccff"}} onClick={()=>setModal(true)} role='button'>{x.remarks}</td>
//     </tr>
// ))}

// <tr>
//   <td colSpan={"2"}>Total Employees <br/>
//   {/* <b>{updatedData.length}</b> */}
//   </td>
//   <td colSpan={"4"} style={{textAlign: "end"}}>Total Bonus<br/> 
//   {/* <b>{updatedData.reduce((totalBonus, employee) => totalBonus + parseInt(employee.bonus), 0)}</b> */}
//   </td>
//   <td></td>
//   <td colSpan={"1"} style={{textAlign: "end"}}>TotalAmount<br/>
//    {/* <b>{updatedData.reduce((total, employee) => total + employee.totalSalary, 0)} </b> */}
//    </td>
//   <td colSpan={"2"}></td>
// </tr>

// </tbody>
// </Table>

// <RemarkModal modal={modal} setModal={setModal}/>

//     </div>    
//   )
// }

// export default TableBody












import React, { useEffect, useState } from 'react';
import RemarkModal from './RemarkModal';
import { Table } from 'react-bootstrap';
import { GetEmployee } from '../../actions/employee';
import { EnterSalary } from '../../actions/salary';

const TableBody = ({
    avatar1,
    modal,
    setModal,
    columns
}) => {
    const {data} = GetEmployee();
    const [details, setDetails] = useState();

    const { loading, salary, setSalary, enterSalary } = EnterSalary()

    const detail = data && data.map(({ _id, personalDetails, salaryDetails })=>({
        _id, salaryDetails, personalDetails
      }));
      setDetails(detail);
      console.log(details);

        const [salaries, setSalaries] = useState(detail?.map(x => ({
        empId: x._id,
        totalHours: "",
        bonus: "",
        overtimeHours: "",
        deduction: "",
        totalSalary: "",
        status: "",
        remarks: ""
        })));

        useEffect(()=>{
            if (detail && detail.length > 0) {
                const initialSalaries = detail.map(x => ({
                  empId: x._id,
                  totalHours: "",
                  bonus: "",
                  overtimeHours: "",
                  deduction: "",
                  totalSalary: "",
                  status: "",
                  remarks: ""
                }));
                setSalaries(initialSalaries);
              }
        },[detail])

    console.log(salaries);

    const salaryHandler = (e, empId) => {
        const { name, value } = e.target;
        setSalaries(prevSalaries => prevSalaries.map(salary => {
            if (salary.empId === empId) {
                return { ...salary, [name]: value };
            }
            return salary;
        }));
    };

    return (
        <div>
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
                    {detail.map((x) => (
                        <tr key={x._id}>
                            <td>
                                <img src={avatar1} alt="" className='rounded-circle' style={{ width: "50px" }} />
                            </td>
                            <td>
                                <div>
                                    <span>{x.personalDetails.name}</span>
                                    <br />
                                    <small className='text-primary'>{x.personalDetails?.department?.name}</small>
                                </div>
                            </td>
                            <td style={{ backgroundColor: "#e7f3ff" }}>
                                <input
                                    type='number'
                                    className='form-control bg-transparent'
                                    name='hourlyRate'
                                    value={x?.salaryDetails?.hourlySalary}
                                    style={{ border: "none", width: "100%" }}
                                />
                            </td>
                            <td style={{ backgroundColor: "#e7f3ff" }}>
                                <input
                                    type='number'
                                    className='form-control bg-transparent'
                                    name='totalHours'
                                    value={salaries.find(salary => salary.empId === x._id)?.totalHours}
                                    onChange={(e) => salaryHandler(e, x._id)}
                                    style={{ border: "none", width: "100%" }}
                                />
                            </td>
                            {/* Add input fields for other salary components */}
                            {/* Calculate and display totalSalary */}
                            {/* <td>{calculateTotalSalary(
                                salaries.find(salary => salary.empId === x._id)?.totalHours,
                                salaries.find(salary => salary.empId === x._id)?.bonus,
                                salaries.find(salary => salary.empId === x._id)?.deduction
                            )}</td> */}
                            {/* Add remaining table cells */}
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={"2"}>Total Employees <br />
                            {/* <b>{updatedData.length}</b> */}
                        </td>
                        <td colSpan={"4"} style={{ textAlign: "end" }}>Total Bonus<br />
                            {/* <b>{updatedData.reduce((totalBonus, employee) => totalBonus + parseInt(employee.bonus), 0)}</b> */}
                        </td>
                        <td></td>
                        <td colSpan={"1"} style={{ textAlign: "end" }}>TotalAmount<br />
                            {/* <b>{updatedData.reduce((total, employee) => total + employee.totalSalary, 0)} </b> */}
                        </td>
                        <td colSpan={"2"}></td>
                    </tr>
                </tbody>
            </Table>
            <RemarkModal modal={modal} setModal={setModal} />
        </div>
    );
};

export default TableBody;
