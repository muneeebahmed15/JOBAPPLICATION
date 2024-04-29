import React, { useEffect, useState } from 'react'
import { GetSalaries, GetSingleSalary } from '../../actions/salary'
import { Col, Row, Card, Button, Form } from 'react-bootstrap';
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
// import GenerateSlip from './GenerateSlip';
import logo from '../../../assets/images/logo-icon.png'

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
    console.log(filterList);
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
    
    // <Col key={x._id} md={4} sm={6}>
    //   <Card>
    //     <Row className="g-0">
    //       <Col md={4}>
    //         <img src={avatar7} className="card-img" alt="" style={{height: "100%"}} />
    //       </Col>
    //       <Col md={8}>
    //         <Card.Body>
    //           <Card.Title as="h5" className="mb-1">
    //             {x?.empId?.personalDetails?.name}
    //           </Card.Title>
    //           <h6 className="text-muted fw-normal mt-0 mb-1">{x?.empId?.personalDetails?.department?.name ? x?.empId?.personalDetails?.department?.name : <i style={{color: "red"}}>N/A</i>}</h6>
    //           <h6 className="text-muted fw-normal mt-0 mb-1">{`Rs.${x?.totalSalary}`}</h6>
    //           <Row>
    //             <Col>
    //               <Link to={`/staff-management/salary-payments/generate-slip/${x?._id}`}>
    //                 <Button variant="primary" className="btn-sm w-100 me-1">
    //                   Salary Slip
    //                 </Button>
    //               </Link>
    //             </Col>
    //           </Row>
    //         </Card.Body>
    //       </Col>
    //     </Row>
    //   </Card>
    // </Col>

    <Card>
    <Card.Body>
      <div className="clearfix">
        <div className="float-sm-end">
          <div className="auth-logo">
            <Link to="/" className="logo logo-dark text-center">
              <span className="logo-lg">
                <img src={logo} alt="" height="100" />
              </span>
            </Link>
          </div>

          <address className="mt-2">
            Office No. 1, 1st Floor,
            <br />
             Sun Skill Techs, Geniqe Plaza, Bolan St, Block D 
            <br />
            Islamabad, Punjab Pakistan 
            47510,
          </address>
        </div>

        <div className="float-sm-start">
          <h4 className="m-0 d-print-none">Invoice</h4>
          <dl className="row mb-2 mt-3">
           <dt className="col-sm-3 fw-normal">Invoice Number :</dt>
             <dd className="col-sm-9 fw-normal">
              {x._id}
            </dd>

            <dt className="col-sm-3 fw-normal">Date :</dt>
            <dd className="col-sm-9 fw-normal">
              {x?.createdAt?.slice(0,10)}
            </dd>

            {/* <dt className="col-sm-3 fw-normal">Due Date :</dt>
            <dd className="col-sm-9 fw-normal">
             {invoiceData.due_date}
            </dd> */}

          </dl>
        </div>
        
      </div>

      <Row className="mt-4">
        <Col md={6}>
          <h6 className="fw-normal">Invoice For:</h6>
          <h2>{x?.empId?.personalDetails?.name}</h2>
          <address>
            {x?.empId?.addresses?.currentAddress}
            <br />
            {x.empId?.addresses?.permanentAddress}
          </address>
        </Col>

        <Col md={6}>
          <div className="text-md-end">
            <h6 className="fw-normal">Total</h6>
            <h2>Rs. {x?.totalSalary}</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="table-responsive">
            <table className="table mt-4 table-centered  table-nowrap">

              <thead>
                <tr>
                  <th></th>
                  <th>Compensation Breakdown</th>
                  <th style={{ width: "10%" }}>Hours</th>
                  <th style={{ width: "10%" }}>Hours Rate</th>
                  <th style={{ width: "10%" }}>Bonus</th>
                  <th style={{ width: "10%" }}>Deduction</th>
                  {/* <th style={{ width: "10%" }} className="text-end">
                    Total Amount
                  </th> */}
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td></td>
                  <td>
                    <h5 className="fs-16 mt-0 mb-2">Total Hours</h5>
                  </td>
                  <td>{x?.totalHours}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                    <tr>
                      <td></td>
                      <td>
                        <h5 className="fs-16 mt-0 mb-2">Hourly Price</h5>
                      </td>
                      <td></td>
                      <td>{x?.empId?.salaryDetails?.hourlySalary}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <h5 className="fs-16 mt-0 mb-2">Bonus</h5>
                      </td>
                      <td></td>
                      <td></td>
                      <td>{x?.bonus}</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <h5 className="fs-16 mt-0 mb-2">Deduction</h5>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{x?.deduction}</td>
                    </tr>

              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          {/* <div className="clearfix pt-5">
            <h6 className="text-muted">Notes:</h6>
            <small className="text-muted">{invoiceData.notes}</small> 
          </div> */}
        </Col>
        <Col sm={6}>
          <div className="float-end mt-4">
            <p className="d-flex align-items-center">
              <span className="fw-medium me-2">Sub-total :</span>
              <span className="float-end">
                <h3>{x?.totalSalary}  Rs</h3>
              </span>
            </p>
          
          </div>
        </Col>
      </Row>

      <div className="mt-5 mb-1">
        <div className="text-end d-print-none">
          <Link
            to="#"
            onClick={() => {
              window.print();
            }}
            className="btn btn-primary me-1"
          >
            <i className="uil uil-print me-1"></i> Print
          </Link>
          <Link to="#" className="btn btn-info">
            Submit
          </Link>
        </div>
      </div>
    </Card.Body>
  </Card>
// "loaded"
  ) : null
))}

        </Row>
      </Card>


    </div>
  )
}

export default SalarySlip