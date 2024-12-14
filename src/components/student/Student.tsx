import DeleteIcon from '@mui/icons-material/Delete';

const StudentPage =()=>{

  const Data = [
    { name:'Ramanan', class:'10'},
    { name:'poopi', class:'+2'},
    { name:'maya', class:'10'},
  ]

    return(
      <div className="flex flex-col w-full h-full box-border items-center ml-24 ">
      
        
        {/* Table Section */}
        <div className="mt-6 px-2 py-4 bg-white rounded-lg">
          <table className="min-w-full table-auto border-separate border-spacing-2 ">
            <thead>
              <tr>
                <th className="px-24 py-2 border-4 border-double border-slate-300 rounded-lg">Name</th>
                <th className="px-24 py-2 border-4 border-double border-slate-300 rounded-lg">Class</th>
                <th className="px-14 py-2 border-4 border-double border-slate-300 rounded-lg">View</th>
                <th className="px-14 py-2 border-4 border-double border-slate-300 rounded-lg">Add</th>
                <th className="px-14 py-2 border-4 border-double border-slate-300 rounded-lg">Update</th>
                <th className="px-14 py-2 border-4 border-double border-slate-300 rounded-lg">Delete</th>
              </tr>
            </thead>
            <tbody>
                { Data.map((table)=>(
                  <tr>
                    <td className="px-6 py-2 border rounded-md">{table.name}</td>
                    <td className="px-6 py-2 border rounded-md">{table.class}</td>
                    <td className="px-16 py-2 border rounded-md"><button className="bg-indigo-600 text-white rounded text-sm px-4 py-2"> VIEW</button></td>
                    <td className="px-16 py-2 border rounded-md"><button className="bg-fuchsia-600 text-white rounded text-sm px-4 py-2"> ADD</button></td>
                    <td className="px-16 py-2 border rounded-md"><button className="bg-cyan-600 text-white rounded text-sm px-4 py-2"> Update</button></td>
                    <td className="px-16 py-2 border rounded-md"> <DeleteIcon /></td>
                    
                  </tr>
                )) }
            </tbody>
          </table>
        </div>
      </div>
  
    )
}

export default StudentPage