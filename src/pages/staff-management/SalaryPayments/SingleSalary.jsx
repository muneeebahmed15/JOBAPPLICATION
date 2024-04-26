import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import { FormInput,VerticalForm } from '../../../components'
import { Button, Card, Modal } from 'react-bootstrap'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetSingleEmployeeSalary } from '../../actions/salary'
import { SingleEmployee } from '../../actions/employee'

const months = [
    {
        value:"january",
        name:"January"
    },
    {
        value:"february",
        name:"February"
    },
    {
        value:"march",
        name:"March"
    },
    {
        value:"april",
        name:"April"
    },
    {
        value:"may",
        name:"May"
    },
    {
        value:"june",
        name:"June"
    },
    {
        value:"july",
        name:"July"
    },
    {
        value:"august",
        name:"August"
    },
    {
        value:"september",
        name:"September"
    },
    {
        value:"october",
        name:"October"
    },
    {
        value:"november",
        name:"November"
    },
    {
        value:"december",
        name:"December"
    },
]

// interface UserData {
//     username: string;
//     email: string;
//     password: string;
//     confirmpassword: string;
//     checkbox: boolean;
//   }

const SingleSalary = () => {
    const [payModal, setPayModal] = useState(false);

    const [newData, setNewData] = useState();

    const {id} = useParams();

    const {list, loading} = GetSingleEmployeeSalary(id);
    const {data, loading: employeeLoading} = SingleEmployee(id);

    console.log(list);
    console.log(data);

    useEffect(()=>{
      if(data){
        setNewData(data)
      }
    },[data])

console.log(newData);

    const [salary, setSalary] = useState({basic:"", bonus:"", deduction:"", deductionType: "", netpay:""});

    const changeHandler = (e) =>{
        setSalary({...salary, [e.target.name]: e.target.value});
    }

    const calculatePay = () => {
        const a = parseInt(salary.basic) || 0; 
        const b = parseInt(salary.bonus) || 0; 
        const c = parseInt(salary.deduction) || 0; 
        const d = a + b - c;
        setSalary({ ...salary, netpay: d.toString() }); }
    

    // const schemaResolver = yupResolver(
    //     yup.object().shape({
    //       username: yup.string().required("Please enter Username"),
    //       email: yup.string().required("Please enter Email address"),
    //       password: yup.string().required("Please enter Password"),
    //       confirmpassword: yup
    //         .string()
    //         .oneOf([yup.ref("password"), null], "Passwords don't match")
    //         .required("This value is required."),
    //       checkbox: yup.bool().oneOf([true]),
    //     })
    //   );

  return (
    <>
     <Link to="/staff-management/salary-payments">
        <Button className="d-flex justify-content-center align-items-center mt-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

      <Card  className='mt-4'>
      <Card.Body>

        <div className='d-flex justify-content-between align-items-center'>
        <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Salary Details</h4>

            <Button onClick={()=>setPayModal(true)}>Calculate Netpay</Button>

        </div>

        <VerticalForm
          onSubmit={() => {}}
          // resolver={schemaResolver}
          defaultValues={{ username: "test" }}>
          <div className="row">

            <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Employee ID"}
            type="text"
            name="employeeID"
            // placeholder="Enter your name"
            value={id}
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Employee Name"}
            type="text"
            name="employeeName"
            // placeholder="Enter your name"
            value={ newData?.personalDetails?.name}
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Department"}
            type="text"
            name="department"
            // placeholder="Enter your name"
            value={data?.personalDetails?.department?.name}
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Basic Salary"}
            type="text"
            name="basicSalary"
            // placeholder="Enter your name"
            value={data?.salaryDetails?.basicSalary}
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Hourly Price"}
            type="text"
            name="bonus"
            // placeholder="Enter your name"
            value={data?.salaryDetails?.hourlySalary}
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Current Salary"}
            type="text"
            name="deduction"
            // placeholder="Enter your name"
            value={data?.salaryDetails?.currentSalary}
            containerClass={"mb-3"}
          />
          </div>

          </div>          

          {/* <div className="text-md-end mb-0">
            <Button variant="primary" className="me-1" type="submit">
              Add Record
            </Button>

             <Button variant="light" className="me-1" type="submit">
              Generate Report
            </Button>
           
          </div> */}
        </VerticalForm>
      </Card.Body>
    </Card>


<Modal
  show={payModal}
  onHide={() => setPayModal(false)}
  // size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='border-bottom border-1 border-dark' style={{ width: "100%" }}>
      Calculate Netpay
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>

    <div className='row'>
      <div className='col-4'>
        <label>Basic Salary</label>
      </div>
      <div className='col-8'>
        <input type="number" name="basic" value={salary.basic} onChange={changeHandler} className='form-control' placeholder='Basic Salary' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Bonus</label>
      </div>
      <div className='col-8'>
      <input type="number" name="bonus" value={salary.bonus} onChange={changeHandler} className='form-control' placeholder='Bonus' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Deduction Type</label>
      </div>
      <div className='col-8'>
      <input type="text" name="deductionType" value={salary.deductionType} onChange={changeHandler} className='form-control' placeholder='Deduction Type' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Deduction</label>
      </div>
      <div className='col-8'>
        <input type="number" name="deduction" value={salary.deduction} onChange={changeHandler} className='form-control' placeholder='Deduction' />
      </div>
    </div>

    <div className='row mt-2'>
      <div className='col-4'>
        <label>Netpay</label>
      </div>
      <div className='col-8'>
        <input type="number" name="netpay" value={salary.netpay} onChange={changeHandler} className='form-control' placeholder='Netpay' />
      </div>
    </div>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={calculatePay}>Calculate</Button>
    <Button variant='light' className='text-dark' onClick={() => setPayModal(false)}>Discard</Button>
  </Modal.Footer>
</Modal>

    </>
  )
}

export default SingleSalary