const AdminPage =()=>{
    return(
        <div className="flex flex-col w-full min-h-screen px-10 items-center pt-20">
      
        
        {/* Table Section */}
        <div className="overflow-x-auto mt-6 px-10 py-4">
          <table className="min-w-full table-auto border-separate border-spacing-2 ">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">View</th>
                <th className="px-4 py-2 border">Add</th>
                <th className="px-4 py-2 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Ramanan</td>
                <td className="px-4 py-2 border">Admin</td>
                <td className="px-4 py-2 border"><button> VIEW</button></td>
                <td className="px-4 py-2 border">Data 4</td>
              </tr>
              <tr>
                
                <td className="px-4 py-2 border">Data 5</td>
                <td className="px-4 py-2 border">Data 6</td>
                <td className="px-4 py-2 border">Data 7</td>
                <td className="px-4 py-2 border">Data 8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
    )
}

export default AdminPage