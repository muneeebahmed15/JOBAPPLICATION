import React from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaRegUser } from 'react-icons/fa';
import { IoBagRemoveOutline, IoLocationOutline } from 'react-icons/io5';

const CandidatesModal = ({ modal, setModal, aData, selectedId }) => {
  return (
    <Modal
      show={modal}
      onHide={() => setModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
          <FaRegUser size={20} /> Candidate Summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {aData && aData.map((x) => (
          x.id === selectedId && (
            <div key={x.id}>
              <div className="d-flex align-items-center">
                <img src={x.img} alt="profile" width={100} className='rounded-circle' style={{ marginRight: "20px" }} />
                <div className='d-flex flex-column' style={{ width: "100%" }}>
                  <h4>{x.name}</h4>
                  <div className='d-flex justify-content-between text-secondary align-items-center'>
                    <label className='d-flex align-items-center'><IoBagRemoveOutline size={15} style={{ marginRight: "3px" }} />{x.appliedFor ? x.appliedFor : "UI/UX Designer"}</label>
                    <label className='d-flex align-items-center'><IoLocationOutline size={15} style={{ marginRight: "3px" }} />Islamabad, Pakistan</label>
                  </div>
                  <Button className='mt-2'>View Documents</Button>
                </div>
              </div>

              <Card className="mt-1">
                <Card.Body>
                  <b className='text-secondary'><small>About</small></b>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, delectus.</p>
                  <a href="https://www.github.com" target='_blank' rel="noopener noreferrer" className='text-decoration-none' style={{ marginRight: "10px" }}><FaGithub size={30} className='text-dark' /></a>
                  <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer" className='text-decoration-none'><FaLinkedin size={30} className='text-primary' /></a>
                </Card.Body>
              </Card>

              <Card className="mt-1">
                <Card.Body>
                  <b className='text-secondary'><small>Professional Skills</small></b> <br />
                  <label className='px-2 py-1 rounded-pill text-primary' style={{marginRight:"5px", backgroundColor: "#b7beec"}}>C++</label>
                  <label className='px-2 py-1 rounded-pill text-primary' style={{marginRight:"5px", backgroundColor: "#b7beec"}}>Python</label>
                </Card.Body>
              </Card>

              <Card className="mt-1">
                <Card.Body>
                  <b className='text-secondary'><small>Work Experience</small></b> <br />
                  <div className='d-block'>
                    <b>Microsoft</b>
                   <div style={{marginLeft: "20px", fontSize: "12px"}}>
                   <b>Frontend Developer</b>
                   <div className='text-secondary'>
                        Jan 2024 - Present - New York, USA
                   </div>
                   </div>
                  </div>
                </Card.Body>
              </Card>

            </div>
          )
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" className="text-dark" onClick={() => setModal(false)}>Discard</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CandidatesModal;
