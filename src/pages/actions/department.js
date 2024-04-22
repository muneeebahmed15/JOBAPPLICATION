import { useEffect, useState } from "react"

export const Department = () =>{
  const [allDep, setAllDep] = useState([]);

  const [loading, setLoading] = useState(false);
  const [regLoading, setRegLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [modal, setModal] = useState(false);
  
  const [regDep, setRegDep] = useState({id: "", name:"", description: ""})

  const changeHandler = (e) => {
    setRegDep(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const registerDepartment = async() =>{
    setRegLoading(true);
                try {
                    const response = await fetch('http://localhost:4000/v2/job-application/company/add-department', {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(regDep), 
                    });

                    const responseData = await response.json();
                    const newData = responseData.data;

                    if (newData) {
                      setAllDep(prev => [...prev, newData]);
                        setModal(false);
                        setRegDep({name:"", description: ""});
                        window.location.reload();
                    } 
                  } catch (error) {
                    console.error("Error registering employees:", error);
                } finally {
                  setRegLoading(false);
                }
  }

  const allDepartments = async() =>{
            setLoading(true);
                try {
                    const response = await fetch('http://localhost:4000/v2/job-application/company/all-departments', {
                      method: "GET",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                    });
                    const responseData = await response.json();
                    // console.log(responseData, "from all departments");
                    if (response.ok) {
                      setAllDep(responseData)
                    } 
                  } catch (error) {
                    console.error("Error fetching employees:", error);
                } finally {
                    setLoading(false);
               }        
  }
  
  const updateDepartment = async() =>{
        setUpdateLoading(true);
            try {
                const response = await fetch('http://localhost:4000/v2/job-application/company/update-department', {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(regDep), 
                });
                const responseData = await response.json();

                if (responseData.status === true) {
                    setRegDep({id: "", name:""})
                    setModal(false);
                    window.location.reload()
                }
             
              } catch (error) {
                console.error("Error fetching employees:", error);
            } finally {
                setUpdateLoading(false);
            }
  }

    const deleteDepartment = async() =>{
      setDeleteLoading(true);
          try {
              const response = await fetch('http://localhost:4000/v2/job-application/company/delete-department', {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(regDep), 
              });
              const responseData = await response.json();
              console.log(responseData);

              if (responseData.status === true) {
                  setRegDep({id: ""})
                  setModal(false);
                  window.location.reload()
              }
           
            } catch (error) {
              console.error("Error fetching employees:", error);
          } finally {
            setDeleteLoading(false);
          }
  }

// console.log(allDep);

        useEffect(() => {
          allDepartments()
        }, [])
  
        return {registerDepartment, updateDepartment, deleteDepartment, deleteLoading, allDepartments, loading, updateLoading, changeHandler, regDep, modal, regLoading, allDep, setModal}
}