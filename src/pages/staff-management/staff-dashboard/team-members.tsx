import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MembersList from '../../../components/MembersList'
import { tasks, topPerformers } from '../../dashboard/Ecommerce/data'
import Tasks from '../../../components/Tasks'

const TeamMembers = () => {
  return (
    <>
       <Row>
        <Col xxl={4} md={6}>
          <MembersList title={"Team Members"} members={topPerformers} />
        </Col>
        
        <Col xxl={4} md={6}>
          <Tasks tasks={tasks} />
        </Col>
       
      </Row>
    </>
  )
}

export default TeamMembers
