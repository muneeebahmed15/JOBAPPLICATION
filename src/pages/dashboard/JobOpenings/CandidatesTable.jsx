import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { IoEyeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const CandidatesTable = ({ record, loading }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (record) {
      setFilteredData(record);
    }
  }, [record]);

  const searchHandler = (e) => {
    const value = e.target.value;

    const filteration = record.filter(
      (x) =>
        x.name
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        x.city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteration);
  };

  return (
    <div>
      <h4 className="header-title mt-0 mb-1">
        List of Candidates
      </h4>

      <div className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search...."
          onChange={searchHandler}
          style={{ maxWidth: "25%" }}
        />
        {/* <FaEdit size={20} role='button' onClick={()=>setDel(true)}/>  */}
      </div>

      <div className="table-responsive">
        <Table className="mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">Candidate Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">Linked URL</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((x) => (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
                <td>{x.city}</td>
                {/* <td style={{ width: "10px", overflow: "hidden", whiteSpace: "wrap", textOverflow: "ellipsis" }}>{x.interviewAvailability}</td> */}
                <td>{x.linkedIn}</td>

                <td>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="light"
                      //   onClick={() => settingModal(x._id)}
                    >
                      <IoEyeSharp size={20} />
                    </Button>

                    <Button
                      variant="light"
                      //   onClick={() => settingModal(x._id)}
                    >
                      <MdEmail size={20} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* 
     <EmployeeDetails modal={modal} setModal={setModal} loading={singleLoading} data={data}/> */}
    </div>
  );
};

export default CandidatesTable;
