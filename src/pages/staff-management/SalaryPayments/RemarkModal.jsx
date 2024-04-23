import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const RemarkModal = ({modal, setModal}) => {
  return (
    <div>
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
        <textarea className='form-control mb-2' placeholder='Comment here' name="remarks"  />
    </div>

    {/* {comments && comments.map((x, index) => (
  <div key={index} className='row mx-1'>
    <label className='form-control mb-2'>{x}</label>
  </div>
))} */}

  </Modal.Body>
  <Modal.Footer>
    {/* <Button onClick={addComment}>Add</Button> */}
    <Button onClick={() => setModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>
    </div>
  )
}

export default RemarkModal
