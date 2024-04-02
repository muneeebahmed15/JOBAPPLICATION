import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StatisticsWidget from '../../widgets/StatisticsWidget'

const StaffWidgets = () => {
  return (
    <>
       <Row>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Total Departments"
            stats="7"
            icon="briefcase"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="warning"
            title="Total Employees"
            stats="10"
            icon="users"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="success"
            title="Active Employees"
            stats="10"
            icon="users"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="info"
            title="New Employees"
            stats="4"
            icon="user"
          />
        </Col>
      </Row>
    </>
  )
}

export default StaffWidgets