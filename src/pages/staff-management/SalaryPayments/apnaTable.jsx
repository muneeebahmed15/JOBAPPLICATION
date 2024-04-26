
import { Button, Card } from 'react-bootstrap';
import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import FinalSalaryTable from './FinalSalaryTable';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const columns = [
  {
    title: "Employee Details",
    child:[
    {
      Header: "Emp Image",
    accessor: "empImg",
    sort: true,
  },
  {
    Header: "Employee Name",
    accessor: "employeeName",
    sort: true,
  },
]},
{
  title: "Calculations",
  child: [
  {
    Header: "Hourly Rate",
    accessor: "hourly",
    sort: true,
  },
  {
    Header: "Total Hours",
    accessor: "totalHours",
    sort: true,
  },
  {
    Header: "Overtime Hours (OTH)",
    accessor: "overtimeHours",
    sort: true,
  },
  {
    Header: "Additional Bonus",
    accessor: "bonus",
    sort: true,
  },
  {
    Header: "Monthly Deduction",
    accessor: "deduction",
    sort: true,
  }
]},
{
  title: "Total Earnings",
  child:[
  {
    Header: "Employee Total Salary",
    accessor: "totalSalary",
    sort: true,
  }
  ]},
  {
    title: "Actions",
    child:[
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Remarks",
        accessor: "remarks"
      }
    ]
  }
];

 
const MyTable = () => {

  // console.log(detail);

    // const [updatedData, setUpdatedData] = useState(data);


    // const handleFilterChange = (filterOption) => {
    //   let newData = [];
    
    //   switch (filterOption) {
    //     case 'name':
    //       newData = data.slice().sort((a, b) => a.employeeName.localeCompare(b.employeeName));
    //       break;
    //     case 'highestSalary':
    //       newData = data.slice().sort((a, b) => b.totalSalary - a.totalSalary);
    //       break;
    //     case 'lowestSalary':
    //       newData = data.slice().sort((a, b) => a.totalSalary - b.totalSalary);
    //       break;
    //     default:
    //       newData = data;
    //   }
    
    //   setUpdatedData(newData);
    // };
    

  // const handleSearchChange = (e) => {
  //   const filterValue = e.target.value;
  //   const newData = data.filter((item) =>
  //     item.employeeName.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     item.totalSalary.toString().includes(filterValue)
  //   );
  //   setUpdatedData(newData);
  // };


  return (
    <>
    <Link to="/staff-management/salary-payments">
        <Button className="d-flex justify-content-center align-items-center my-3">
          <IoIosArrowBack /> Back
        </Button>
      </Link>
<Card>
<Card.Body>

<h2 className='mb-4'>Process Salary</h2>

    <FinalSalaryTable columns={columns} avatar1={avatar1}/>
  
</Card.Body>
</Card>

    </>
  )
}

export default MyTable

