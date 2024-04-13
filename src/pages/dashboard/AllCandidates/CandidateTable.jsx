import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import avatar1 from '../../../assets/images/users/avatar-1.jpg'
import avatar2 from '../../../assets/images/users/avatar-2.jpg'
import logoIcon from '../../../assets/images/logo-icon.png'
import { FaEdit } from 'react-icons/fa';
import CandidatesModal from './CandidatesModal';
import { FaDeleteLeft } from 'react-icons/fa6';
import SheduleInterview from './SheduleInterview'


const data = [
  {
    id: "1",
    img: avatar1,
    name: "ABC",
    appliedFor: "Web Developer",
    appliedOn: "10/12/23",
    company: logoIcon,
  },
  {
    id: "2",
    img: avatar2,
    name: "DEF",
    appliedFor: "App Developer",
    appliedOn: "10/02/24",
    company: logoIcon,
  }
]

const CandidateTable = () => { 

  const [sheduleInterview, setSheduleInterview] = useState(false);
  const [modal, setModal] = useState(false);  
  const [del, setDel] = useState(false);  
  const [aData, setAdata] = useState(data);  
  const [selectedId, setSelectedId] = useState("");

      const searchHandler = (e) =>{
        const filterValue = e.target.value;
        const newData = data.filter((x)=> x.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        x.appliedFor.toLowerCase().includes(filterValue.toLowerCase())
        );
        setAdata(newData);
      }

      const settingModal = (id) => {
        setModal(true);
        setSelectedId(id);
      }

      // const deleting = (id) =>{
      //     const a = aData.filter(x=> x.id !== id);
      //     setAdata(a);
      // }

  return (
    <>
        <Card>
      <Card.Body>


                <div className="d-flex justify-content-between align-items-center">
                <input type="text" className='form-control' placeholder='Search....' onChange={searchHandler} style={{maxWidth: "25%"}}/>
                {/* <FaEdit size={20} role='button' onClick={()=>setDel(true)}/> */}
              </div>

              <div className="row">
              {aData.map((x)=>(
                <>
               <hr className='mt-2'/>
                <div key={x.id}>
  
              <div className='d-flex justify-content-between align-items-center'>

                <div className='d-flex justify-content-between align-items-center' style={{width: "60%"}}>
                 
                  <div className='d-flex align-items-center'>
                  <img src={x.img} alt="" width={50} className='rounded-circle'/>

                  <div style={{marginLeft: "15px"}}>
                    <b>{x.name}</b>
                  </div>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Apply Date</small>
                    <p style={{marginBottom: "0px"}}>{x.appliedOn}</p>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Company</small>
                    <img src={x.company} alt='logo' width={20} style={{marginBottom: "0px"}}/>
                  </div>

                  <div className='d-flex flex-column align-items-center'>
                    <small className='text-secondary'>Applied for</small>
                    <p style={{marginBottom: "0px"}}>{x.appliedFor}</p>
                  </div>
                </div>

                <div>
                  <Button variant="light" onClick={()=>settingModal(x.id)}>View Details</Button>
                 <Button className='mx-4' onClick={()=>setSheduleInterview(true)}>Shedule Interview</Button>
                 {/* {del && <FaDeleteLeft size={20} role='button' onClick={()=>deleting(x.id)}/> } */}
                </div>

              </div>
          </div>
          </>
          ))}

                </div>

      </Card.Body>
    </Card>
                  <CandidatesModal modal={modal} setModal={setModal} aData={aData} selectedId={selectedId}/>
    
                  <SheduleInterview scheduleInterview={sheduleInterview} setScheduleInterview={setSheduleInterview} selectedId={selectedId} list={aData}/>

    </>
  )
}

export default CandidateTable
