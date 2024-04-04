import React from 'react'
import { Card } from 'react-bootstrap'
import Table from '../../../components/Table'
import { FaUser } from 'react-icons/fa';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { useNavigate} from 'react-router-dom';


const CandidateTable = () => {
    
 
    const columns = [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Date",
          accessor: "date",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Gender",
          accessor: "gender",
        },
        {
          Header: "Phone",
          accessor: "phone",
        },
        {
          Header: "City",
          accessor: "city",
        },
        {
          Header: "Role",
          accessor: "role",
        },
        {
          Header: "Profile",
          accessor: "profile",
          Cell: ({ row }) => (
            <div onClick={() => handleNavigator(row.original.id)}>
              <FaUser size={20} role='button'/>
            </div>
          ),
        },
        // {
        //   Header: "CV",
        //   accessor: "cv",
        //   Cell: ({ row }) => (
        //     <div onClick={() => handleDownloadClick(row.original.id)}>
        //       <IoCloudDownloadOutline size={20} />
        //     </div>
        //   ),
        // },
      ];

    const data=[
        {id:"1", date: "1/12/23", name: "ABC", email: "abc@gmail.com", gender: "Male", phone: "123456789", city: "Jhelum", role: "Web Developer"}
      ];
    
      const sizePerPageList = [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "25",
          value: 25,
        },
        {
          text: "All",
          value: data.length,
        },
      ];

     

      const navigate = useNavigate();

      const handleNavigator = (id) =>{
                navigate(`/hiring-management/interviews/details/${id}`);
      }

  return (
    <>
        <Card>
      <Card.Body>


        <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />

      </Card.Body>
    </Card>
    </>
  )
}

export default CandidateTable
