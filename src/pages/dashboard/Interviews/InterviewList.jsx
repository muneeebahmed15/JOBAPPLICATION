import React from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'
import avatar1 from '../../../assets/images/users/avatar-1.jpg'
import avatar2 from '../../../assets/images/users/avatar-2.jpg'
import { IoVideocamOutline } from 'react-icons/io5'
import FeatherIcons from "feather-icons-react";
import logoIcon from '../../../assets/images/logo-icon.png'
import CurrentVacancies from './CurrentVacancies'

const data = [
  {
    id: "1",
    img: avatar1,
    name: "ABC",
    title: "Web Developer",
    time: "13:00",
    date: "10/12/23",
    interviewee: "XYZ",
    type: "Onsite",
    company: logoIcon,
  },
  {
    id: "2",
    img: avatar2,
    name: "DEF",
    title: "App Developer",
    time: "15:00",
    date: "10/02/24",
    interviewee: "UVW",
    type: "Online",
    company: logoIcon,
  }
]

const InterviewList = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center'>
          <h4 style={{ display: 'flex', alignItems: 'center' }}><IoVideocamOutline size={25} style={{marginRight: "5px"}}/> Upcoming Interviews</h4>
          
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
    <Dropdown.Item >Date</Dropdown.Item>
    <Dropdown.Item>Interview Type</Dropdown.Item>
    <Dropdown.Item>Name</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            </div>

          </div>

          {data.map((x)=>(
          <>
          <hr />
          <div className="row mt-2" key={x.id}>
              <div className='d-flex justify-content-between align-items-center'>

                <div className='d-flex justify-content-between align-items-center' style={{width: "60%"}}>
                 
                  <div className='d-flex'>
                  <img src={x.img} alt="" width={50} className='rounded-circle'/>

                  <div className='d-flex flex-column' style={{marginLeft: "15px"}}>
                    <b>{x.name}</b>
                    <small className='text-secondary'>{x.title}</small>
                  </div>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Date</small>
                    <p style={{marginBottom: "0px"}}>{x.date}</p>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Time</small>
                    <p style={{marginBottom: "0px"}}>{x.time}</p>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Company</small>
                    <img src={x.company} alt='logo' width={20} style={{marginBottom: "0px"}}/>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Interviewee</small>
                    <p style={{marginBottom: "0px"}}>{x.interviewee}</p>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Interview Type</small>
                    <p style={{marginBottom: "0px"}}>{x.type}</p>
                  </div>

                </div>

                <div>
                  <Button variant="light" style={{marginRight:"5px"}}>View Details</Button>
                  {x.type === "Online" ? <Button>Join Meeting</Button> : ""}
                </div>

              </div>
          </div>
          </>
          ))}

        </Card.Body>
      </Card>

      <CurrentVacancies/> 
    </>
  )
}

export default InterviewList
