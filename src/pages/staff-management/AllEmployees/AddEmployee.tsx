import React, { useEffect, useState } from 'react'
import { FormInput,VerticalForm } from '../../../components'
import { Button, Card } from 'react-bootstrap'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Employee } from '../../actions/employee';
import { Department } from '../../actions/department';


interface UserData {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    checkbox: boolean;
  }

  interface DepartmentInterface  {
    _id: string;
    name: string;
    description: string;
    __v: number;
  }
  

const AddEmployee = () => {
  const {data, changeHandler, addemployee, loading} = Employee();

  const [require, setRequire] = useState(false);
  
 const {allDep, loading: depLoading} = Department();
 
 const [dep, setDep] = useState<DepartmentInterface[]>([]);

 useEffect(() => {
  if (allDep) {
    setDep(allDep);
  }
}, [allDep]);


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
            name="personalDetails.name"
            value={data.personalDetails.name}
            onChange={changeHandler}
            placeholder="Enter your name"
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
          <FormInput
            label={"Father Name"}
            type="text"
            name="personalDetails.fatherName"
            value={data.personalDetails.fatherName}
            onChange={changeHandler}
            placeholder="Enter father name"
            containerClass={"mb-3"}
          />
          </div>

          <div className="col-sm-6 col-md-4">
              <FormInput
            label={"CNIC"}
            type="text"
            name="personalDetails.CNIC"
            placeholder="CNIC"
            value={data.personalDetails.CNIC}
            onChange={changeHandler}
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
            name="personalDetails.email"
            value={data.personalDetails.email}
            onChange={changeHandler}
            placeholder="Enter email"
            containerClass={"mb-3"}
          />
              </div>

              <div className='col-sm-6 col-md-4'>
              <FormInput
            label={"Phone Number"}
            type="number"
            name="personalDetails.phone"
            value={data.personalDetails.phone}
            onChange={changeHandler}
            placeholder="Enter phone number"
            containerClass={"mb-3"}
          />
              </div>

              <div className='col-sm-6 col-md-4'>
              <label className='form-label'>Department</label>
         <select className="form-select mb-3"
          aria-label="Default select example"
          name='personalDetails.department'
          value={data.personalDetails.department}
          onChange={changeHandler}
          >
  <option selected>Choose Department</option>
  {depLoading ? "loading..." : dep?.map((x)=>(<option value={x._id}>{x.name}</option>))}
</select>
              </div>

              <div className="col-sm-6 col-md-4">
              <FormInput
            label={"Employee ID"}
            type="text"
            name="personalDetails.employeeId"
            placeholder="Employee ID"
            containerClass={"mb-3"}
          />
              </div>

              <div className="col-sm-6 col-md-4">
              <FormInput
            label={"Date of Birth"}
            type="date"
            name="personalDetails.DOB"
            value={data.personalDetails.DOB}
            onChange={changeHandler}
            containerClass={"mb-3"}
          />
              </div>

               <div className="col-sm-6 col-md-4">
              <label className='form-label'>Gender</label>
         <select className="form-select mb-3"
          aria-label="Default select example"
          name='personalDetails.gender'
          value={data.personalDetails.gender}
          onChange={changeHandler}
          >
            <option selected>Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Martial Status</label>
         <select className="form-select mb-3"
          aria-label="Default select example"
          name='personalDetails.martialStatus'
        value={data.personalDetails.martialStatus}
        onChange={changeHandler}
        >
            <option selected>Choose Stauts</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Religion</label>
         <select className="form-select mb-3"
          aria-label="Default select example"
          name='personalDetails.religion'
        value={data.personalDetails.religion}
        onChange={changeHandler}
        >
            <option selected>Choose Religion</option>
            <option value="Islam">Islam</option>
            <option value="Christian">Christian</option>
            <option value="Hindu">Hindu</option>
          </select>
              </div>
              
              <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Languages"}
            type="text"
            placeholder='Enter languages'
            name="personalDetails.languages"
          value={data.personalDetails.languages}
          onChange={changeHandler}
            containerClass={"mb-3"}
          />
                </div>

                <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Number of Dependents"}
            type="number"
            placeholder='Number of Dependents'
            name="personalDetails.dependents"
          value={data.personalDetails.dependents}
          onChange={changeHandler}
            containerClass={"mb-3"}
          />
                </div>

                <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Height"}
            type="number"
            placeholder='Height'
            name="personalDetails.height"
            value={data.personalDetails.height}
            onChange={changeHandler}
            containerClass={"mb-3"}
          />
                </div>


                <div className="col-sm-6 col-md-4">
                <FormInput
            label={"Linkedin URL"}
            type="text"
            placeholder='Linkedin URL'
            name="personalDetails.linkedURL"
            value={data.personalDetails.linkedURL}
            onChange={changeHandler}
            containerClass={"mb-3"}
          />
                </div>

                <div className="col-sm-6 col-md-4">
                <label className="form-label">Current Address</label>
                <textarea className='form-control'
                 placeholder='Current Address' rows={3}
                 name='addresses.currentAddress'
          value={data.addresses.currentAddress}
          onChange={changeHandler}
          />
                </div>

                <div className="col-sm-6 col-md-4 mb-3">
                <label className="form-label">Permanent Address</label>
                <textarea className='form-control'
                 placeholder='Permanent Address' rows={3}
                 name='addresses.permanentAddress'
          value={data.addresses.permanentAddress}
          onChange={changeHandler}
          />
                </div>

                {/* {} */}

                <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Medical History</h4>

                <div className="col-sm-6 col-md-4"><FormInput
            label={"Blood Group"}
            type="text"
            placeholder='Blood Group'
            name="medicalHistory.bloodGroup"
     value={data.medicalHistory.bloodGroup}
     onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

          <div className="col-sm-6 col-md-4 mb-3">
                <label className="form-label">Any Disease/Alergy/Disability</label>
                <textarea className='form-control' 
                placeholder='Any Disease/Alergy/Disability' 
                rows={3}  
            name="medicalHistory.disease"
            value={data.medicalHistory.disease}
            onChange={changeHandler}
                />
                </div>

                <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Employee Emergency Contact Details</h4>

                  <div className="col-sm-6 col-md-4"><FormInput
                  label={"Name"}
                  type="text"
                  placeholder='Name'
                  name="employeeEmergencyContact.emergencyContactName"
           value={data.employeeEmergencyContact.emergencyContactName}
           onChange={changeHandler}
                  containerClass={"mb-3"}
                  /></div>

                <div className="col-sm-6 col-md-4"><FormInput
                  label={"Relation"}
                  type="text"
                  placeholder='Relation'
                  name="employeeEmergencyContact.relation"
                  value={data.employeeEmergencyContact.relation}
                  onChange={changeHandler}
                  containerClass={"mb-3"}
                  /></div>

                  <div className="col-sm-6 col-md-4"><FormInput
                  label={"Phone Number"}
                  type="number"
                  placeholder='Phone Number'
                  name="employeeEmergencyContact.phone"
                  value={data.employeeEmergencyContact.phone}
                  onChange={changeHandler}
                  containerClass={"mb-3"}
                  /></div>

                  <div className="col-sm-6 col-md-4 mb-3">
                    <label className="form-label">Current Address</label>
                    <textarea className='form-control'
                     placeholder='Current Address' rows={3}
                     name="employeeEmergencyContact.currentAddress"
           value={data.employeeEmergencyContact.currentAddress}
           onChange={changeHandler}
                     />
                  </div>

                  <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Joining Details</h4>

                    <div className="col-sm-6 col-md-4"><FormInput
                    label={"Date of Joining"}
                    type="date"
                    // placeholder='Joining Date'
                    name="joiningDetails.joiningDate"
                    value={data.joiningDetails.joiningDate}
                    onChange={changeHandler}
                    containerClass={"mb-3"}
                    /></div>

                    <div className="col-sm-6 col-md-4"><FormInput
                    label={"Mode of Recruitment"}
                    type="text"
                    placeholder='Mode of Recruitment'
                    name="joiningDetails.recruitmentMode"
                    value={data.joiningDetails.recruitmentMode}
                    onChange={changeHandler}
                    containerClass={"mb-3"}
                    /></div>

                  <div className="col-sm-6 col-md-4"><FormInput
                    label={"Total Working Hours"}
                    type="number"
                    placeholder='Working Hours'
                    name="joiningDetails.totalHours"
                    value={data.joiningDetails.totalHours}
                    onChange={changeHandler}
                    containerClass={"mb-3"}
                    /></div>

              <div className="col-sm-6 col-md-4"><FormInput
                    label={"Benefits & Perks"}
                    type="text"
                    placeholder='Benefits & Perks'
                    name="joiningDetails.benefits"
                    value={data.joiningDetails.benefits}
                    onChange={changeHandler}
                    containerClass={"mb-3"}
                    /></div>

          <div className="col-sm-6 col-md-4">
              <label className='form-label'>Shift</label>
           <select className="form-select mb-3"
            aria-label="Default select example"
            name="joiningDetails.shift"
            value={data.joiningDetails.shift}
            onChange={changeHandler}>
            <option selected>Choose shift</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Timing</label>
           <select className="form-select mb-3" 
           aria-label="Default select example"
           name="joiningDetails.timing"
           value={data.joiningDetails.timing}
           onChange={changeHandler}>
            <option selected>Choose timing</option>
            <option value="9-6">9AM - 6PM</option>
            <option value="10-19">10AM - 7PM</option>
            <option value="21-6">9PM - 6AM</option>
            <option value="22-7">10PM - 7AM</option>
          </select>
              </div>

          <div className="col-sm-6 col-md-4">
              <label className='form-label'>Job Type</label>
         <select className="form-select mb-3" 
         aria-label="Default select example"
         name="joiningDetails.jobType"
         value={data.joiningDetails.jobType}
         onChange={changeHandler}>
            <option selected>Choose job type</option>
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
            <option value="intern">Intern</option>
          </select>
              </div>

              <div className="col-sm-6 col-md-4">
              <label className='form-label'>Job Status</label>
         <select className="form-select mb-3" 
         aria-label="Default select example"
         name="joiningDetails.jobStatus"
         value={data.joiningDetails.jobStatus}
         onChange={changeHandler}
         >
            <option selected>Choose job status</option>
            <option value="online">Online</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
              </div>

                <h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Bank Details</h4>

                <div className="col-sm-6 col-md-4"><FormInput
            label={"Bank Name"}
            type="text"
            placeholder='Bank Name'
            name="bankDetails.bankName"
            value={data.bankDetails.bankName}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>
           
           <div className="col-sm-6 col-md-4"><FormInput
            label={"Branch Code"}
            type="text"
            placeholder='Branch Code'
            name="bankDetails.branchCode"
            value={data.bankDetails.branchCode}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

        <div className="col-sm-6 col-md-4"><FormInput
            label={"Account Title"}
            type="text"
            placeholder='Account Title'
            name="bankDetails.accountTitle"
            value={data.bankDetails.accountTitle}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"IBAN"}
            type="text"
            placeholder='IBAN'
            name="bankDetails.IBAN"
            value={data.bankDetails.IBAN}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Educational History</h4>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Degree"}
            type="text"
            placeholder='Degree'
            name="employeeEducation.degree"
            value={data.employeeEducation.degree}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Borard/University"}
            type="text"
            placeholder='Board/University'
            name="employeeEducation.institution"
            value={data.employeeEducation.institution}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Marks/CGPA"}
            type="number"
            placeholder='Marks/CGPA'
            name="employeeEducation.score"
            value={data.employeeEducation.score}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Passing Year"}
            type="number"
            placeholder='Passing Year'
            name="employeeEducation.passingYear"
            value={data.employeeEducation.passingYear}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

          <div className="col-sm-6 col-md-4"><FormInput
                      label={"Majors"}
                      type="text"
                      placeholder='Majors'
                      name="employeeEducation.majors"
                      value={data.employeeEducation.majors}
                      onChange={changeHandler}
                      containerClass={"mb-3"}
                    /></div>

                    <div className="col-sm-6 col-md-4"><FormInput
                      label={"Percentage/Grade"}
                      type="number"
                      placeholder='Percentage/Grade'
                      name="employeeEducation.grade"
                      value={data.employeeEducation.grade}
                      onChange={changeHandler}
                      containerClass={"mb-3"}
                    /></div>

<h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Employment History</h4>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Company Name"}
            type="text"
            placeholder='Company Name'
            name="employeeEmployement.companyName"
            value={data.employeeEmployement.companyName}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Designation"}
            type="text"
            placeholder='Designation'
            name="employeeEmployement.designation"
            value={data.employeeEmployement.designation}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Major Roles"}
            type="text"
            placeholder='Major Roles'
            name="employeeEmployement.majorRoles"
            value={data.employeeEmployement.majorRoles}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Duration of Work"}
            type="number"
            placeholder='Duration of Work'
            name="employeeEmployement.workDuration"
            value={data.employeeEmployement.workDuration}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

          <div className="col-sm-6 col-md-4"><FormInput
                      label={"Location"}
                      type="text"
                      placeholder='Location'
                      name="employeeEmployement.location"
                      value={data.employeeEmployement.location}
                      onChange={changeHandler}
                      containerClass={"mb-3"}
                    /></div>

<h4 className="header-title mt-0 mb-1" style={{color: "#5369f8"}}>Salary Details</h4>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Current Salary"}
            type="number"
            placeholder='Current Salary'
            name="salaryDetails.currentSalary"
            value={data.salaryDetails.currentSalary}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Joining Salary"}
            type="number"
            placeholder='Joining Salary'
            name="salaryDetails.joiningSalary"
            value={data.salaryDetails.joiningSalary}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Basic Salary"}
            type="number"
            placeholder='Basic Salary'
            name="salaryDetails.basicSalary"
            value={data.salaryDetails.basicSalary}
            onChange={changeHandler}
            containerClass={"mb-3"}
          /></div>

<div className="col-sm-6 col-md-4"><FormInput
            label={"Hourly Salary"}
            type="number"
            placeholder='Hourly Salary'
            name="salaryDetails.hourlySalary"
            value={data.salaryDetails.hourlySalary}
            onChange={changeHandler}
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
            <Button variant="primary" className="me-1" type="submit" onClick={addemployee}>
              {loading ? "loading..." : "Submit"}
            </Button>
           
          </div>
        </VerticalForm>
      </Card.Body>
    </Card>
  
    </>
  )
}

export default AddEmployee