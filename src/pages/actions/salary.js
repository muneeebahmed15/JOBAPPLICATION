import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const EnterSalary = () =>{
    const [loading, setLoading] = useState(false);
    const [salaries, setSalaries] = useState([]);
    const router = useNavigate();

// console.log(salaries);

    const enterSalary = async()=>{
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/v2/job-application/company/add-salary', {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(salaries), 
            });
            const responseData = await response.json();
            console.log(responseData);
            if(responseData.status === true){
                    router('/staff-management/salary-payments/salary-slip')
            }
          } catch (error) {
            console.error("Error adding salaries:", error);
        } finally {
          setLoading(false);
        }
    }

    return { loading, salaries, setSalaries, loading, enterSalary }
}

export const GetSalaries = () =>{
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

 const getSalaries = async() =>{
  setLoading(true);
  try {
      const response = await fetch('http://localhost:4000/v2/job-application/company/all-salaries', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(salaries), 
      });
      const responseData = await response.json();
      setList(responseData.record);
    } catch (error) {
      console.error("Error adding salaries:", error);
  } finally {
    setLoading(false);
  }
 }

// console.log(list);

 useEffect(()=>{
 getSalaries()
 },[])

 return { loading, list }
}

export const GetSingleSalary = (id) =>{
    const [loading, setLoading] = useState(false);
    const [record, setRecord] = useState()
    const router = useNavigate() 

    const getSingleSalary = async() =>{
      setLoading(true);
      try {
          const response = await fetch(`http://localhost:4000/v2/job-application/company/single-salary/${id}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(salaries), 
          });
          console.log(id);
          const responseData = await response.json();
          if(responseData.status === true){
          console.log(responseData.Salary, "from hook");
          setRecord(responseData.Salary);
        }
        } catch (error) {
          console.error("Error adding salaries:", error);
      } finally {
        setLoading(false);
      }
     }

     useEffect(()=>{
      if(id){
        getSingleSalary();
      }
     },[id])

     return {record, loading}
}

export const GetSingleEmployeeSalary = (id) =>{
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState();

  const getSingleEmployeeSalary = async() =>{
    setLoading(true);
    try {
        const response = await fetch(`http://localhost:4000/v2/job-application/company/single-employee-salary/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(salaries), 
        });
        console.log(id);
        const responseData = await response.json();
        if(responseData.status === true){
        console.log(responseData.Salary, "from hook");
        setList(responseData.Salary);
      }
      } catch (error) {
        console.error("Error adding salaries:", error);
    } finally {
      setLoading(false);
    }
   }

   useEffect(()=>{
    if(id){
      getSingleEmployeeSalary();
    }
   },[id])

   return {list, loading}
}