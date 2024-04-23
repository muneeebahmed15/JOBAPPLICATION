import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { GetEmployee } from '../../actions/employee';
import { EnterSalary } from '../../actions/salary';

const FinalSalaryTable = ({ columns, avatar1 }) => {
    const { loading: loadingEmployee, data: employees } = GetEmployee();
    const { salaries, setSalaries, enterSalary } = EnterSalary();

    console.log(salaries);

    useEffect(() => {
      if (employees && employees.length > 0) {
          const initialSalaries = employees.map(emp => {
              return {
                  empId: emp._id,
                  name: emp.personalDetails.name,
                  department: emp.personalDetails.department ? emp.personalDetails.department.name : "",
                  hourlyPrice: emp.salaryDetails.hourlySalary,
                  totalHours: 0,
                  overtimeHours: 0,
                  bonus: 0,
                  deduction: 0,
                  totalSalary: 0,
                  status: "",
                  remarks: ""
              };
          });
          setSalaries(initialSalaries);
      }
  }, [employees]);
  
    const handleSalaryChange = (index, field, value) => {
        const updatedSalaries = [...salaries];
        updatedSalaries[index][field] = value;

        const hourlyPrice = +updatedSalaries[index].hourlyPrice;
        const totalHours = +updatedSalaries[index].totalHours;
        const overtimeHours = +updatedSalaries[index].overtimeHours;
        const bonus = +updatedSalaries[index].bonus;
        const deduction = +updatedSalaries[index].deduction;

        const totalSalary = hourlyPrice * (totalHours + overtimeHours) + bonus - deduction;
        updatedSalaries[index].totalSalary = totalSalary;
        setSalaries(updatedSalaries);
    };

    // const handleSaveSalaries = () => {
    //     // Assuming there's a function to handle saving salaries in EnterSalary
    //     enterSalary(salaries);
    // };

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        {columns.map((columnGroup, index) => (
                            <th key={index} style={{ textAlign: "center" }} colSpan={columnGroup.child.length} scope="colgroup">{columnGroup.title}</th>
                        ))}
                    </tr>
                    <tr style={{ whiteSpace: "nowrap" }}>
                        {columns.map((columnGroup) => (
                            columnGroup.child.map((column, index) => (
                                <th key={index} scope="col" style={{ backgroundColor: column.Header === "Deduction" ? "#ffdad2" :
                                    column.Header === "Additional Bonus" ? "#d0feed" :
                                    column.Header === "Employee ID" ? "#fff" :
                                    column.Header === "Employee Name" ? "#fff" :
                                    column.Header === "Hourly Rate" ? "#e7f3ff" :
                                    column.Header === "Total Hours" ? "#e7f3ff" :
                                    column.Header === "Overtime Hours (OTH)" ? "#e7f3ff" :
                                    column.Header === "Total Salary" ? "#e7f3ff" :
                                    column.Header === "Status" ? "#e6ccff" :
                                    column.Header === "Remarks" ? "#e6ccff" : "" }}>{column.Header}</th>
                            ))
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loadingEmployee ? "loading..." :
                        salaries.map((salary, index) => (
                            <tr key={index}>
                                <td>
                                <img src={avatar1} alt="" className='rounded-circle' style={{width: "50px"}} />
                                </td>
                                <td>
                                <span>{salary.name}</span>
                                <br />
                                <small className='text-primary'>{salary.department}</small>
                                </td>

                                <td>
                                <span>{salary.hourlyPrice}</span>
                                </td>

                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='totalHours' value={salary.totalHours} onChange={(e) => handleSalaryChange(index, 'totalHours', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>
                                
                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='totalHours' value={salary.overtimeHours} onChange={(e) => handleSalaryChange(index, 'overtimeHours', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>

                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='totalHours' value={salary.bonus} onChange={(e) => handleSalaryChange(index, 'bonus', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>

                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='totalHours' value={salary.deduction} onChange={(e) => handleSalaryChange(index, 'deduction', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>
                                  
                                  {/* total salary */}
                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='totalSalary' value={salary.totalSalary} onChange={(e) => handleSalaryChange(index, 'totalSalary', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>
                                
                                <td style={{ minWidth: "120px", backgroundColor: "#e6ccff"}}>
                                <select className='form-select bg-transparent' name='totalHours' value={salary.status} onChange={(e) => handleSalaryChange(index, 'status', e.target.value)} style={{fontSize: "10px" }}>
                                  <option defaultValue >Pending</option>
                                  <option value="Fully transferred">Fully transferred</option>
                                  <option value="Partial transferred">Partial transferred</option>
                                  <option value="Advance paid">Advance paid</option>
                                </select>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <div style={{textAlign: "end"}}>
          <Button className='mt-3'>Submit</Button>
          </div>
        </>
    );
}

export default FinalSalaryTable;
