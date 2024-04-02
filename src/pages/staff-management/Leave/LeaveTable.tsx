
import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import Table from '../../../components/Table'
import OverViewItem from "../../../components/OverViewItem";

const columns = [
  {
    Header: "Employee Name",
    accessor: "employeeName",
    sort: true,
  },
  {
    Header: "Employee ID",
    accessor: "employeeId",
    sort: true,
  },
  {
    Header: "Leave Type",
    accessor: "leaveType",
    sort: true,
  },
  {
    Header: "Date",
    accessor: "date",
    sort: true,
  },
  {
    Header: "Total Days",
    accessor: "totalDays",
    sort: true,
  },
  {
    Header: "Reason",
    accessor: "reason",
    sort: true,
  },
  {
    Header: "Applied On",
    accessor: "appliedOn",
    sort: true,
  },
  {
    Header: "Remaining Leaves",
    accessor: "remainingLeaves",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: true,
  },
  {
    Header: "Remarks",
    accessor: "remarks",
  },
];

const data = [
  { employeeName: "John Doe", employeeId: "Ommune_11", leaveType: "Sick", date: "10-12-24 to 14-12-24", reason: "Depression", appliedOn:"8-12-24", remainingLeaves: "10", status:"Approved", totalDays: "4", remarks: "" },
  { employeeName: "John Doe", employeeId: "Ommune_11", leaveType: "Sick", date: "10-12-24 to 14-12-24", reason: "Depression", appliedOn:"8-12-24", remainingLeaves: "10", status:"Rejected", totalDays: "4", remarks: "Alot of remaining work" },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];


const LeaveTable = () => {

  
  return (
    <>
         <Row>
        <Col>
          <Card>
            <Card.Body>
              <h3 className="mb-3">Leaves List</h3>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* <Col md={4}>
        <Card>
      <Card.Body className="p-0">
        <div className="p-3">
          <h5 className="card-title header-title mb-0">Leave Type</h5>
        </div>

        <OverViewItem
          stats={"Casual Leave"}
          title={"7 days/Yearly"}
          icon={"plus-square"}
          iconClass={"icon-md"}
        />
        <OverViewItem
          stats={"Medical Leave"}
          title={"20 days/Yearly"}
          icon={"plus-circle"}
          iconClass={"icon-md"}
        />
        
      </Card.Body>
    </Card>
        </Col> */}

      </Row>

      
    </>
  )
}

export default LeaveTable
