import React, { useEffect, useState } from 'react'
import { GetSalaries, GetSingleSalary } from '../../actions/salary'
import { Col, Row, Card, Button, Form } from 'react-bootstrap';
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
// import GenerateSlip from './GenerateSlip';

const SalarySlip = () => {
  const {loading, list} = GetSalaries();
  const {getSingleSalary, record, loading: salaryLoading } = GetSingleSalary();
// console.log(record)


  const [filterList, setFilterList] = useState(list)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    if(list.length > 0){
      setFilterList(list)
    }
  },[list])

  const changeHandler = (e) =>{
    const value = e.target.value;
    setSearchTerm(value)
    const data = list.filter((x)=>
    x.empId && x.empId.personalDetails && x.empId.personalDetails.name
    ? x.empId.personalDetails.name.toLowerCase().includes(value.toLowerCase())
    : false
);
    setFilterList(data);
  }

  // console.log(filterList);
    const today = new Date().toISOString().slice(0,10);
    console.log(today);
  return (
    <div>
      <Link to="/staff-management/salary-payments">
        <Button className="d-flex justify-content-center align-items-center my-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

      <Card>

      <div className='d-flex justify-content-between align-items-center p-2'>
      <Form.Control type="text" placeholder={`Search from ${list.length} values`} value={searchTerm} onChange={changeHandler}  style={{width: "32%"}}/>
      <div>
      <input className='form-control' value={today} readOnly style={{widht: "15%"}}/>
      </div>
      </div>

        <Row className="p-2">
          
        {loading ? "loading..." : filterList.map((x) => (
  (x.createdAt.slice(0,10) === today) ? (
    <Col key={x._id} md={4} sm={6}>
      <Card>
        <Row className="g-0">
          <Col md={4}>
            <img src={avatar7} className="card-img" alt="" style={{height: "100%"}} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title as="h5" className="mb-1">
                {x?.empId?.personalDetails?.name}
              </Card.Title>
              <h6 className="text-muted fw-normal mt-0 mb-1">{x?.empId?.personalDetails?.department?.name ? x?.empId?.personalDetails?.department?.name : <i style={{color: "red"}}>N/A</i>}</h6>
              <h6 className="text-muted fw-normal mt-0 mb-1">{`Rs.${x?.totalSalary}`}</h6>
              <Row>
                <Col>
                  <Link to={`/staff-management/salary-payments/generate-slip/${x?._id}`}>
                    <Button variant="primary" className="btn-sm w-100 me-1">
                      Salary Slip
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  ) : null
))}

        </Row>
      </Card>


    </div>
  )
}

export default SalarySlip