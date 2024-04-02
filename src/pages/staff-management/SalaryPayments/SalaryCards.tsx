import React from 'react'
import { Card } from 'react-bootstrap'

const data = [
    { employeeID: 123, employeeName: "John Doe",  hourly: 200, totalHours: 200, bonus: 0, deduction: 0, totalSalary: 200*200 },
    { employeeID: 456, employeeName: "King Star", hourly: 250, totalHours: 210, bonus: 0, deduction: 0, totalSalary: 250*210 },
    { employeeID: 789, employeeName: "Rock Star", hourly: 250, totalHours: 150, bonus: 0, deduction: 0, totalSalary: 250*150 },
    { employeeID: 231, employeeName: "Alpha", hourly: 250, totalHours: 120, bonus: 0, deduction: 0, totalSalary: 250*120 },
    { employeeID: 754, employeeName: "Zuker Burg", hourly: 250, totalHours: 140, bonus: 0, deduction: 0, totalSalary: 250*140 },
  ];


const SalaryCards = () => {
  return (
    <>
      <div className="row">
  {data.map((x)=>(
        <div className="col-md-4">
        <Card>
      <Card.Body>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span className="text-muted text-uppercase fs-12 fw-bold">
              {x.employeeName}
            </span>
            {/* <h3 className="mb-0">{stats}</h3> */}
          </div>
          {/* <div className="align-self-center flex-shrink-0">
            <FeatherIcons
              icon={icon}
              className={classNames("icon-lg", "icon-dual-" + variant)}
            />
          </div> */}
        </div>
      </Card.Body>
    </Card>
    </div>
))}
    </div>
    </>
  )
}

export default SalaryCards
