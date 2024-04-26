import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Modal } from 'react-bootstrap';
import { GetEmployee } from '../../actions/employee';
import { EnterSalary } from '../../actions/salary';
import { FaCommentAlt } from 'react-icons/fa';

const FinalSalaryTable = ({ columns, avatar1 }) => {
    const { loading: loadingEmployee, data: employees } = GetEmployee();
    const { salaries, loading, setSalaries, enterSalary } = EnterSalary();

    const [modal, setModal] = useState(false);
    const [Index, setIndex] = useState()

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
                  remarks: "",
                  month: "April",
                  year: "2024",
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

    const handleMonth = (field, value) => {
        const updatedSalaries = salaries.map((salary) => {
            return {
                ...salary,
                [field]: value
            };
        });
        setSalaries(updatedSalaries);
    }

    const openModal = (index) =>{
        setIndex(index);
        setModal(true);
    }

    const handleRemarks = (field, value) => {
        const updateRemarks = [...salaries];
        updateRemarks[Index] [field] =value;
        setSalaries(updateRemarks)
    }

    return (    
        <>

<div className='d-flex my-3 justify-content-end align-items-center'>

<div className='d-flex align-items-center' style={{marginLeft: "5px"}}>

<div className="me-1">
  <select  className='form-select' value={salaries.month} onChange={(e) => handleMonth('month', e.target.value)}>
    <option selected>Choose month</option>
    <option value="January">January</option>
    <option value="Febuary">Febuary</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>
  </div>

  <div className="me-1">
  <select  className='form-select' value={salaries.year} onChange={(e) => handleMonth('year', e.target.value)}>
    <option value="2024" selected>2024</option>
    <option value="2025">2025</option>
    <option value="2026">2026</option>
    <option value="2027">2027</option>
  </select>
  </div>

</div>

</div>
        <Card>
            <Card.Body>
         <div className="table-responsive">
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
                                <th key={index} scope="col" style={{ backgroundColor: column.Header === "Monthly Deduction" ? "#ffdad2" :
                                    column.Header === "Additional Bonus" ? "#d0feed" :
                                    column.Header === "Employee ID" ? "#fff" :
                                    column.Header === "Employee Name" ? "#fff" :
                                    column.Header === "Hourly Rate" ? "#e7f3ff" :
                                    column.Header === "Total Hours" ? "#e7f3ff" :
                                    column.Header === "Overtime Hours (OTH)" ? "#e7f3ff" :
                                    column.Header === "Employee Total Salary" ? "#e7f3ff" :
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

                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                <input type='number' className='form-control bg-transparent' name='hourlyPrice' value={salary.hourlyPrice} readOnly style={{ border: "none", width: "100%" }} />
                                </td>

                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='totalHototalHoursurs' value={salary.totalHours} onChange={(e) => handleSalaryChange(index, 'totalHours', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>
                                
                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='overtimeHours' value={salary.overtimeHours} onChange={(e) => handleSalaryChange(index, 'overtimeHours', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>

                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='bonus' value={salary.bonus} onChange={(e) => handleSalaryChange(index, 'bonus', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>

                                <td className='mx-3' style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' name='deduction' value={salary.deduction} onChange={(e) => handleSalaryChange(index, 'deduction', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>
                                  
                                  {/* total salary */}
                                <td style={{ backgroundColor: "#e7f3ff" }}>
                                    <input type='number' className='form-control bg-transparent' readOnly name='totalSalary' value={salary.totalSalary} onChange={(e) => handleSalaryChange(index, 'totalSalary', e.target.value)} style={{ border: "none", width: "100%" }} />
                                </td>
                                
                                <td style={{ minWidth: "120px", backgroundColor: "#e6ccff"}}>
                                <select className='form-select bg-transparent' name='totalHours' value={salary.status} onChange={(e) => handleSalaryChange(index, 'status', e.target.value)} style={{fontSize: "10px" }}>
                                  <option defaultValue >Pending</option>
                                  <option value="Fully transferred">Fully transferred</option>
                                  <option value="Partial transferred">Partial transferred</option>
                                  <option value="Advance paid">Advance paid</option>
                                </select>
                                </td>

                                <td style={{ minWidth: "120px", backgroundColor: "#e6ccff"}}>
                                <FaCommentAlt size={20} role='button' onClick={()=>openModal(index)}/>
                                </td>

                            </tr>
                        ))
                    }

                        <tr>
                        <td colSpan={2}>Total Employees <br/>
                        {employees.length}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total Bonus <br/>
                        <span>{salaries.reduce((total, salary) => total + Number(salary.bonus), 0)}</span></td>
                        <td></td>

                        <td>Total Salaries <br/>
                        <span>{salaries.reduce((total, salary) => total + salary.totalSalary, 0)}</span>
                        </td>

                    </tr>
                </tbody>
            </Table>

          </div>
          </Card.Body>
        </Card>

        <div style={{textAlign: "end"}}>
          <Button className='mt-3' onClick={enterSalary}>{loading ? "loading..." : "Submit"}</Button>
          </div>

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
        <textarea className='form-control mb-2' placeholder='Comment here' name='remarks' value={salaries[Index]?.remarks} onChange={(e) => handleRemarks('remarks', e.target.value)} />
    </div>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={() => setModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>

        </>
    );
}

export default FinalSalaryTable;
