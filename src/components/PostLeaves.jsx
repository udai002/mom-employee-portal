import React, { useEffect, useState } from "react";
import Table from "../components/Table";
// import Search from '../components/Search';
// import Table from '../assets/Employee/Book.png'
// import Delete from '../assets/Employee/Book.png'
// import Book from '../assets/Employee/Book.png'
// import Linkedin from '../assets/Employee/linkedin.png'

function Mangemployee() {
  const [data, setData] = useState([]);
  const [allDept, setAllDept] = useState([]);
  const [showform, setShowForm] = useState(false);
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResponses, setTotalResponses] = useState(0);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [showData, setShowData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employee/allemployees")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  console.log("....data", data);

  function handleDelete() {}

  function handleCheckboxDelete() {}

  function handleSearchChange() {}

  function handleActiveJob() {}

  function handlePrevious() {}

  const columns = [
    {
      id: "select",
      header: (
        <input
          type="checkbox"
          className="w-5 h-5 rounded border-2 border-[#00a99d] peer-checked:bg-[#e0f7f5] flex items-center justify-center"
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRows(data.map((row) => row._id));
            } else {
              setSelectedRows([]);
            }
          }}
          checked={data.length > 0 && selectedRows.length === data.length}
        />
      ),
      cell: (row) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(row._id)}
          className="w-5 h-5 rounded border-2 border-[#00a99d] peer-checked:bg-[#e0f7f5] flex items-center justify-center"
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRows([...selectedRows, row._id]);
            } else {
              setSelectedRows(selectedRows.filter((id) => id !== row._id));
            }
          }}
        />
      ),
    },

    { id: "jobName", header: "Leave Type" },
    {
      id: "jobId_vacancy",
      header: "Reason",
      cell: (row) => (
        <>
          <div>{row.jobId}</div>
          <div>{row.vacancy}</div>
        </>
      ),
    },
    { id: "email", header: "Leave Id" },
    { id: "expiryDate", header: "Name" },

    { id: "location", header: "From" },

    {
      id: "Location_employment_type",
      header: "To",
      cell: (row) => (
        <>
          <div>{row.location}</div>
          <div>{row.employment_type}</div>
        </>
      ),
    },
    {
      id: "jobInfo",
      header: "Status",
      // cell: (row) => (
      //   <span>
      //     {row.type} ({row.experience})
      //   </span>
      // ),
    },

    {
      id: "actions",
      header: "Approved by",
      cell: (row) => (
        <div className="flex gap-2">
          {/* <button onClick={() => handleDelete(row.deptId, row._id)}>
            <img src="/public/Book.png" className="w-9 h-7 block" />
          </button>
          <button onClick={() => handleActiveJob(row)}>
            <img src="/public/Book.png" className="w-9 h-7 block" />
          </button> */}
          <button
            className="w-10 h-10"
            onClick={() => {
              if (row.jobDescription) {
                setShowData(row.jobDescription);
                setShowModal(true);
              }
            }}
          >
            {/* <img src={View} alt="View" className='w-8 h-6' /> */}
          </button>
        </div>
      ),
    },
    { id: "expiryDate", header: "Applied At" },
  ];
  return (
    // <Table data={data} columns={columns}/>
    <>
      {/* {allDept.map((item)=><h1>{item.department_name}</h1>)} */}
      {/* {(showform || active) && ( */}
      <>
        {/* <div className="fixed h-screen w-screen bg-black/45 left-0 top-0 "></div>
          <JobForm
            setShowForm={setShowForm}
            data={active}
            department={uniqueDepartments}
                        

            setActive={setActive}
            departmentId={selectedDepartmentId}
            setDepartmentId={setSelectedDepartmentId}
          /> */}
      </>
      {/* )} */}

      <div className="flex justify-between py-4 px-4">
        <div>
          <p className="text-center text-[#00a99d] font-semibold text-2xl ">
            Manage Leaves
          </p>
        </div>
        <div className="flex gap-4">
          {/* <Search onChange={handleSearchChange} /> */}
          {/* <ExportPDF elementId="jobs" fileName="jobs.pdf" /> */}
          {/* <button className="text-white bg-teal-500 p-3 flex rounded-lg" onClick={() => setShowForm(true)}>Create Job 

          </button> */}
        </div>
      </div>

      <div className="flex justify-between px-5 py-3">
        <p>Total {totalResponses} Responses</p>
        <p>No filters applied</p>
        <button
          onClick={handleCheckboxDelete}
          className="  flex px-2 py-2 bg-white-500 text-red-800 rounded-lg gap-2   border-red-800 group border"
        >
          Delete Selections
          <img src="/public/Delete.png" alt="delete" className=" w-5 h-5" />
        </button>
      </div>

      <div id="jobs">
        <Table data={data} columns={columns} />

        <div className="flex justify-center items-center mt-10 gap-4 px-7 flex-row">
          <span className="text-lg flex-1 text-[#444444] font-medium">
            {/* Page {page} of {totalPages} */}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              // disabled={page === 1}
              className={`p-2 bg-[#00a99d] rounded-full ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {/* <FaArrowLeftLong className="text-2xl text-white" /> */}
            </button>
            <button
              //  onClick={handleNext}
              // disabled={page === totalPages}
              className={`p-2 bg-[#00a99d] rounded-full ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {/* <FaArrowRightLong className="text-2xl text-white" /> */}
            </button>
          </div>
        </div>
        {/* 
        {showModal && showData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-600 text-xl"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
              <p className="mt-4"><strong>{showData}</strong></p>
              <p className="text-gray-700">{showData?.jobDescription}</p>
            </div>
          </div>
        )
        } */}
      </div>
    </>
  );
}

export default Mangemployee;
