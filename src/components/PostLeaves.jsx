import React, { useContext, useEffect, useState } from "react";
import Table from "../components/Table";
import { UserContext } from "../context/UserContext";
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

  const {jwtToken} = useContext(UserContext)

  useEffect(() => {
    async function getLeaves(){
        const token = localStorage.getItem("jwt_token")
        console.log(token , jwtToken)
        try{
            const options = {
                method:"GET" , 
                headers:{
                    "Content-Type":"application/json" , 
                    "Authorization":`Bearer ${token}`
                }
            }
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/leavebyuser` , options)
            const data = await response.json()
            
            setData(data.leaves)
        }catch(error){
            console.log(error)
        }
    }

    getLeaves()
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

    { id: "leaveType", header: "Leave Type" },
    {
      id: "reason",
      header: "Reason"
    },
    // { id: "_id", header: "Leave Id" },
    // { id: "name", header: "Name" },

    { id: "from", header: "From" },

    {
      id: "to",
      header: "To",
      
    },
    {
      id: "status",
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
    },
    { id: "AppliedAt", header: "Applied At" },
  ];
  return (
    
    <>
     

      <div className="flex justify-between py-4 px-4">
        <div>
          <p className="text-center text-[#00a99d] font-semibold text-2xl ">
            Manage Leaves
          </p>
        </div>
        <div className="flex gap-4">
          
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

      <div id="jobs" className="p-4 w-screen">
        <Table data={data} columns={columns} />

        <div className="flex justify-center items-center mt-10 gap-4 px-7 flex-row">
          <span className="text-lg flex-1 text-[#444444] font-medium">
            
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
             
              className={`p-2 bg-[#00a99d] rounded-full ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
             
            </button>
            <button
             
              className={`p-2 bg-[#00a99d] rounded-full ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
            </button>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Mangemployee;
