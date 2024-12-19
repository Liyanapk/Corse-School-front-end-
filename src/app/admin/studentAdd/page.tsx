import dynamic from "next/dynamic";
const AddStudent = dynamic ( ()=>import("@/components/Addstudent/AddStudent") ) 

const StudentAdd = ()=>{
    return(
        <div>
            <AddStudent/>
        </div>
    )
}

export default StudentAdd