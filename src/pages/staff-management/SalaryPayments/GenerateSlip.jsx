import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import logo from '../../../assets/images/logo-icon.png'
import { Link, useParams } from 'react-router-dom';
import { GetSingleSalary } from '../../actions/salary';
import { IoIosArrowBack } from 'react-icons/io';

const GenerateSlip = () => {
  const {id} = useParams();
 const {record, loading} = GetSingleSalary(id);

//  console.log(record);
 
  return (
    <>

      <Link to="/staff-management/salary-payments">
        <Button className="d-flex justify-content-center align-items-center my-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

       <Row>
        <Col xs={12}>
       {record &&    
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
                      {record._id.slice(0,10)}
                    </dd>

                    <dt className="col-sm-3 fw-normal">Date :</dt>
                    <dd className="col-sm-9 fw-normal">
                      {record?.createdAt?.slice(0,10)}
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
                  <h2>{record.empId.personalDetails.name}</h2>
                  <address>
                    {record.empId.addresses.currentAddress}
                    <br />
                    {record.empId.addresses.permanentAddress}
                  </address>
                </Col>

                <Col md={6}>
                  <div className="text-md-end">
                    <h6 className="fw-normal">Total</h6>
                    <h2>Rs. {record.totalSalary}</h2>
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
                          <td>{record.totalHours}</td>
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
                              <td>{record.empId.salaryDetails.hourlySalary}</td>
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
                              <td>{record.bonus}</td>
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
                              <td>{record.deduction}</td>
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
                        <h3>{record.totalSalary}Rs</h3>
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
          }
        </Col>
      </Row>
    </>
  )
}

export default GenerateSlip
