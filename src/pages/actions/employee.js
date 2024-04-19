import { useState, useEffect } from "react"

export const Employee = () =>{
    const [loading, setLoading] = useState(false);

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
            BasicSalary: "",
            hourlySalary: "",
        },
        // hrID: "abc"
    });

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
            if (response.ok) {
                const responseData = await response.json();
                console.log("Response Data:", responseData);
                // Handle successful response here
            } 
          } catch (error) {
            // Handle fetch or other errors
            console.error(error);
          }finally{
            setLoading(false);
          }
    }

  

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
            if (response.ok) {
                const responseData = await response.json();
                // console.log("Response Data:", responseData);
                setData(responseData);
                // Handle successful response here
            } else {
                throw new Error('Failed to fetch employees');
            }
          } catch (error) {
            console.error("Error fetching employees:", error);
        } finally {
            setLoading(false);
        }
    }

    // const newData = data
    // // console.log(newData);
    
    // const personalDetails = newData.map(x=>x.personalDetails)

    const personalDetails = data.map(item => {
        const { personalDetails, _id } = item;
        const personalDetailsWithId = { ...personalDetails, _id };
        return personalDetailsWithId;
      });

    //   console.log(newData);

    useEffect(() => {
        getemployee();
    }, []); // This will trigger the fetch request when the component mounts

   return { loading, personalDetails, data }
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
 

  