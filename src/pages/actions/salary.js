import { useState } from "react"


export const EnterSalary = () =>{
    const [loading, setLoading] = useState(false);
    const [salaries, setSalaries] = useState([]);

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
          } catch (error) {
            console.error("Error adding salaries:", error);
        } finally {
          setLoading(false);
        }
    }

    return { loading, salaries, setSalaries, enterSalary }
}