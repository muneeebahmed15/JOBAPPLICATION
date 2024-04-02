import React from 'react'
import { FormInput,VerticalForm } from '../../../components'
import { Button, Card } from 'react-bootstrap'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';


interface UserData {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    checkbox: boolean;
  }

const AddEmployee = () => {

    const schemaResolver = yupResolver(
        yup.object().shape({
          username: yup.string().required("Please enter Username"),
          email: yup.string().required("Please enter Email address"),
          password: yup.string().required("Please enter Password"),
          confirmpassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords don't match")
            .required("This value is required."),
          checkbox: yup.bool().oneOf([true]),
        })
      );

  return (
    <>

<Link to="/staff-management/employees">
        <Button className="d-flex justify-content-center align-items-center mt-3 mb-4">
          <IoIosArrowBack /> Back
        </Button>
      </Link>

<Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Personal Details</h4>
        <VerticalForm<UserData>
          onSubmit={() => {}}
          resolver={schemaResolver}
          defaultValues={{ username: "test" }}
        >
          <div className="row">

            <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Employee Name"}
            type="text"
            name="employeeName"
            placeholder="Enter your name"
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Father Name"}
            type="text"
            name="fatherName"
            placeholder="Enter father name"
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
              <FormInput
            label={"CNIC"}
            type="text"
            name="cnic"
            placeholder="CNIC"
            containerClass={"mb-3"}
          />
              </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Profile Image"}
            type="file"
            name="profileImage"
            // placeholder="Enter your name"
            containerClass={"mb-3"}
          />
          </div>

              <div className='col-sm-6 col-md-4'>
              <FormInput
            label={"Personal email address"}
            type="email"
            name="email"
            placeholder="Enter email"
            containerClass={"mb-3"}
          />
              </div>

              <div className='col-sm-6 col-md-4'>
              <FormInput
            label={"Phone Number"}
            type="number"
            name="phoneNumber"
            placeholder="Enter phone number"
            containerClass={"mb-3"}
          />
              </div>

              <div className='col-sm-6 col-md-4'>
              <label className='form-label'>Department</label>
         <select className="form-select mb-3" aria-label="Default select example">
  <option selected>Choose Department</option>
  <option value="1">Software Engineer</option>
  <option value="2">HR</option>
  <option value="3">Sales</option>
</select>
              </div>

              <div className="col-sm-6 col-md-4">
              <FormInput
            label={"Employee ID"}
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            containerClass={"mb-3"}
          />
              </div>

              <div className="col-sm-6 col-md-4">
              <FormInput
            label={"Date of Birth"}
            type="date"
            name="dob"
            containerClass={"mb-3"}
          />
              </div>

               <div className="col-sm-6 col-md-4">
              <label className='form-label'>Gender</label>
         <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Choose Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Martial Status</label>
         <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Choose Stauts</option>
            <option value="">Single</option>
            <option value="">Married</option>
            <option value="">Divorced</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Religion</label>
         <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Choose Religion</option>
            <option value="">Islam</option>
            <option value="">Christian</option>
            <option value="">Hindu</option>
          </select>
              </div>
              
              <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Languages"}
            type="text"
            placeholder='Enter languages'
            name="languages"
            containerClass={"mb-3"}
          />
                </div>

                <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Number of Dependents"}
            type="number"
            placeholder='Number of Dependents'
            name="dependents"
            containerClass={"mb-3"}
          />
                </div>

                <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Height"}
            type="number"
            placeholder='Height'
            name="height"
            containerClass={"mb-3"}
          />
                </div>


                <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Linkedin URL"}
            type="text"
            placeholder='Linkedin URL'
            name="linkedURL"
            containerClass={"mb-3"}
          />
                </div>

                <div className="col-sm-6 col-md-4">
                <label className="form-label">Current Address</label>
                <textarea className='form-control' placeholder='Current Address' rows={3}/>
                </div>

                <div className="col-sm-6 col-md-4 mb-3">
                <label className="form-label">Permanent Address</label>
                <textarea className='form-control' placeholder='Permanent Address' rows={3}/>
                </div>

                <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Medical History</h4>

                <div className="col-sm-6 col-md-4"><FormInput
            label={"Blood Group"}
            type="text"
            placeholder='Blood Group'
            name="bloodGroup"
            containerClass={"mb-3"}
          /></div>

          <div className="col-sm-6 col-md-4 mb-3">
                <label className="form-label">Any Disease/Alergy/Disability</label>
                <textarea className='form-control' placeholder='Any Disease/Alergy/Disability' rows={3}/>
                </div>

                <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Employee Emergency Contact Details</h4>

                  <div className="col-sm-6 col-md-4"><FormInput
                  label={"Name"}
                  type="text"
                  placeholder='Name'
                  name="name"
                  containerClass={"mb-3"}
                  /></div>

                <div className="col-sm-6 col-md-4"><FormInput
                  label={"Relation"}
                  type="text"
                  placeholder='Relation'
                  name="relation"
                  containerClass={"mb-3"}
                  /></div>

                  <div className="col-sm-6 col-md-4"><FormInput
                  label={"Phone Number"}
                  type="number"
                  placeholder='Phone Number'
                  name="phoneNumber"
                  containerClass={"mb-3"}
                  /></div>

                  <div className="col-sm-6 col-md-4 mb-3">
                    <label className="form-label">Current Address</label>
                    <textarea className='form-control' placeholder='Current Address' rows={3}/>
                  </div>

                  <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Joining Details</h4>

                    <div className="col-sm-6 col-md-4"><FormInput
                    label={"Date of Joining"}
                    type="date"
                    // placeholder='Joining Date'
                    name="joiningDate"
                    containerClass={"mb-3"}
                    /></div>

                    <div className="col-sm-6 col-md-4"><FormInput
                    label={"Mode of Recruitment"}
                    type="text"
                    placeholder='Mode of Recruitment'
                    name="modeOfRecruitment"
                    containerClass={"mb-3"}
                    /></div>

                  <div className="col-sm-6 col-md-4"><FormInput
                    label={"Total Working Hours"}
                    type="number"
                    placeholder='Working Hours'
                    name="totalHours"
                    containerClass={"mb-3"}
                    /></div>

              <div className="col-sm-6 col-md-4"><FormInput
                    label={"Benefits & Perks"}
                    type="text"
                    placeholder='Benefits & Perks'
                    name="benefits"
                    containerClass={"mb-3"}
                    /></div>

          <div className="col-sm-6 col-md-4">
              <label className='form-label'>Shift</label>
           <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Choose shift</option>
            <option value="">Morning</option>
            <option value="">Evening</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Timing</label>
           <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Choose timing</option>
            <option value="">9AM - 6PM</option>
            <option value="">10AM - 7PM</option>
            <option value="">9PM - 6AM</option>
            <option value="">10PM - 7AM</option>
          </select>
              </div>

          <div className="col-sm-6 col-md-4">
              <label className='form-label'>Job Type</label>
         <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Choose job type</option>
            <option value="">Full time</option>
            <option value="">Part time</option>
            <option value="">Intern</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Job Status</label>
         <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Choose job status</option>
            <option value="">Online</option>
            <option value="">Remote</option>
            <option value="">Hybrid</option>
          </select>
              </div>

                <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Bank Details</h4>

                <div className="col-sm-6 col-md-4"><FormInput
            label={"Bank Name"}
            type="text"
            placeholder='Bank Name'
            name="bankName"
            containerClass={"mb-3"}
          /></div>
           
           <div className="col-sm-6 col-md-4"><FormInput
            label={"Branch Code"}
            type="text"
            placeholder='Branch Code'
            name="branchCode"
            containerClass={"mb-3"}
          /></div>

        <div className="col-sm-6 col-md-4"><FormInput
            label={"Account Title"}
            type="text"
            placeholder='Account Title'
            name="accountTitle"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"IBAN"}
            type="text"
            placeholder='IBAN'
            name="IBAN"
            containerClass={"mb-3"}
          /></div>

<h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Educational History</h4>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Degree"}
            type="text"
            placeholder='Degree'
            name="degree"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Borard/University"}
            type="text"
            placeholder='Board/University'
            name="board"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Marks/CGPA"}
            type="number"
            placeholder='Marks/CGPA'
            name="marks"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Passing Year"}
            type="number"
            placeholder='Passing Year'
            name="year"
            containerClass={"mb-3"}
          /></div>

          <div className="col-sm-6 col-md-4"><FormInput
                      label={"Majors"}
                      type="text"
                      placeholder='Majors'
                      name="majors"
                      containerClass={"mb-3"}
                    /></div>

                    <div className="col-sm-6 col-md-4"><FormInput
                      label={"Percentage/Grade"}
                      type="number"
                      placeholder='Percentage/Grade'
                      name="percentage"
                      containerClass={"mb-3"}
                    /></div>

<h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Employment History</h4>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Company Name"}
            type="text"
            placeholder='Company Name'
            name="company"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Designation"}
            type="text"
            placeholder='Designation'
            name="designation"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Major Roles"}
            type="number"
            placeholder='Major Roles'
            name="majorRole"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Duration of Work"}
            type="number"
            placeholder='Duration of Work'
            name="duration"
            containerClass={"mb-3"}
          /></div>

          <div className="col-sm-6 col-md-4"><FormInput
                      label={"Location"}
                      type="text"
                      placeholder='Location'
                      name="location"
                      containerClass={"mb-3"}
                    /></div>

<h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Salary Details</h4>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Current Salary"}
            type="number"
            placeholder='Current Salary'
            name="currentSalary"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Joining Salary"}
            type="number"
            placeholder='Joining Salary'
            name="joiningSalary"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Basic Salary"}
            type="number"
            placeholder='Basic Salary'
            name="basicSalary"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Hourly Salary"}
            type="number"
            placeholder='Hourly Salary'
            name="hourlySalary"
            containerClass={"mb-3"}
          /></div>

<h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Documents</h4>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Resume"}
            type="file"
            placeholder='Resume'
            name="resume"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Offer Letter"}
            type="file"
            placeholder='Offer Letter'
            name="offerletter"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Latest Degree"}
            type="file"
            placeholder='Latest Degree'
            name="latestDegree"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Contract & Agreement"}
            type="file"
            placeholder='Contract & Agreement'
            name="contract"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Experience Letter"}
            type="file"
            placeholder='Experience Letter'
            name="experienceLetter"
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"ID Proof"}
            type="file"
            placeholder='ID Proof'
            name="idProof"
            containerClass={"mb-3"}
          /></div>

</div>          

          <div className="text-md-end mb-0">
            <Button variant="primary" className="me-1" type="submit">
              Submit
            </Button>
           
          </div>
        </VerticalForm>
      </Card.Body>
    </Card>
  
    </>
  )
}

export default AddEmployee