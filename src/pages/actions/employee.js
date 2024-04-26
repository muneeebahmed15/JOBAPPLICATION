import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Employee = () =>{
    const [loading, setLoading] = useState(false);
    const router = useNavigate();

    const [data,  setData] = useState({
        // companyId: "abc",
        personalDetails: {
           name: "",
           fatherName: "",
           CNIC: "",
           email: "",
           phone: "",
           department: "",
           DOB: "",
           gender: "",
           martialStatus: "",
           religion: "",
           languages: "",
           dependents: "",
           height: "",
           linkedURL: "",
           password: ""
        },
        addresses: {
                currentAddress: "",
                permanentAddress: "",
        },
        medicalHistory: {
            bloodGroup: "",
            disease: "",
        },
        employeeEmergencyContact: {
            emergencyContactName: "",
            relation: "",
            phone: "",
            currentAddress: "",
        },
        joiningDetails: {
            joiningDate: "",
            recruitmentMode: "",
            totalHours: "",
            benefits: "",
            shift: "",
            timing: "",
            jobType: "",
            jobStatus: ""
        },
        bankDetails: {
            bankName: "",
            branchCode: "",
            accountTitle: "",
            IBAN: ""
        },  
        employeeEducation: {
            degree: "",
            institution: "",
            score: "",
            passingYear: "",
            majors: "",
            grade: "",
        },
        employeeEmployement: {
            companyName: "",
            designation: "",
            majorRoles: "",
            workDuration: "",
            location: ""
        },
        salaryDetails: {
            currentSalary: "",
            joiningSalary: "",
            basicSalary: "",
            hourlySalary: "",
        },
        // hrID: "abc"
    });

    // console.log(data);

    const changeHandler = (e) => {
        const { name, value } = e.target;
    
        // Split the name to access nested properties
        const [parentKey, childKey] = name.split('.');
    
        // Update the state based on nested properties
        setData(prevData => ({
            ...prevData,
            [parentKey]: {
                ...prevData[parentKey],
                [childKey]: value
            }
        }));
    }

    const addemployee = async() => {
            setLoading(true);
          try {
            const response = await fetch('http://localhost:4000/v2/job-application/company/add-staff', {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const responseData = await response.json();
            if (responseData.status === true) {
                router("/staff-management/employees");
                console.log("Response Data:", responseData);
            } 
          } catch (error) {
            console.error(error);
          }finally{
            setLoading(false);
          }
    }

// console.log(data);

    return {changeHandler, data, addemployee, loading}
}

export const GetEmployee = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getemployee = async() =>{
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/v2/job-application/company/all-staff', {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            const responseData = await response.json();
            if (responseData.status === true) {
                setData(responseData.data);
            } else {
                throw new Error('Failed to fetch employees');
            }
          } catch (error) {
            console.error("Error fetching employees:", error);
        } finally {
            setLoading(false);
        }
    }
    const {_id} = data;

    useEffect(() => {
        getemployee();
    }, []);

   return { loading, data, _id }
}

export const SingleEmployee = (id) =>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const singleEmployee = async() =>{
        setLoading(true);
        console.log(id)
        try {
            const response = await fetch(`http://localhost:4000/v2/job-application/company/single-staff/${id}`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            const responseData = await response.json();
            if (responseData.status === true) {
                setData(responseData.user);
            } else {
                throw new Error('Failed to fetch employees');
            }
          } catch (error) {
            console.error("Error fetching employees:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        singleEmployee()
    },[id])

   return { loading, data, singleEmployee }
}








// export const Test = () =>{

//     const addemployee = async () => {
//         try {
//             const res = await axios.post("http://localhost:4000/v2/job-application/company/test", {});
//             console.log(res);
//         } catch (error) {
//             console.log(error);
//         }

    


//         // try {
//         //     const response = await fetch('http://localhost:4000/v2/job-application/company/test', {
//         //       method: "POST",
//         //       headers: {
//         //         Accept: "application/json",
//         //         "Content-Type": "application/json",
//         //       },
//         //     //   body: JSON.stringify(data),
//         //     });
//         //     if (response.ok) {
//         //       const abc = await response.json();
//         //       console.log(abc);}
//         //   } catch (error) {
//         //     // Handle fetch or other errors
//         //     console.error(error);
//         //   }
//     }
    

//     return {addemployee}
// }
 

  