import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const TeacherPage = () => {
    const Data = [
        { name: 'Ramanan', subject: 'Maths' },
        { name: 'Poopi', subject: 'Physics' },
        { name: 'Maya', subject: 'Biology' },
    ];

    return (
        <div className="flex flex-col w-full h-full box-border items-center px-20 sm:px-20 md:px-8 mt-10">
          
            <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-5xl mt-6 mb-4 pl-[50px] md:pl-[70px]">
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-center sm:text-left mb-4 sm:mb-0">
                    Teacher Management
                </h1>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm sm:text-base px-2 py-2 sm:py-3 sm:px-3 hover:opacity-90 shadow-md transition-all duration-300">
                    + Add Teacher
                </button>
            </div>

            
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg box-border ml-[50px] md:ml-[50px]  ">
                <div className="overflow-x-auto">
                    
                    <table className="w-full border-collapse table-auto">
                        
                        <thead className="bg-blue-600 text-xs sm:text-sm md:text-base font-medium text-white uppercase">
                            <tr>
                                <th className="px-4 sm:px-6 py-3 text-left pl-[50px] md:pl-[70px]">Name</th>
                                <th className="px-4 sm:px-6 py-3 text-left">Subject</th>
                                <th className="px-4 sm:px-6 py-3 text-center">View</th>
                                <th className="px-4 sm:px-6 py-3 text-center">Edit</th>
                                <th className="px-4 sm:px-6 py-3 text-center">Delete</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {Data.map((student, index) => (
                                <tr
                                    key={index}
                                    className="text-xs sm:text-sm md:text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-4 sm:px-6 py-3 border-b pl-[50px] md:pl-[70px]">
                                        {student.name}
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 border-b">{student.subject}</td>
                                    <td className="px-4 sm:px-6 py-3 border-b text-center">
                                        <VisibilityIcon className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-transform duration-200 transform hover:scale-110" />
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 border-b text-center">
                                        <ModeEditOutlineIcon className="text-gray-600 hover:text-cyan-600 cursor-pointer transition-transform duration-200 transform hover:scale-110" />
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 border-b text-center">
                                        <DeleteIcon className="text-gray-600 hover:text-red-600 cursor-pointer transition-transform duration-200 transform hover:scale-110" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default TeacherPage;
