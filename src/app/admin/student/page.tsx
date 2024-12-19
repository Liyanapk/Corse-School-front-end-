import dynamic from "next/dynamic";
const StudentPage = dynamic( ()=>import("@/components/student/Student"))

const Student = ()=>{
    return(
        <>
        <StudentPage/>
        </>
    )
}

export default Student