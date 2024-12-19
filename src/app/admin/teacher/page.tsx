import dynamic from "next/dynamic";
const TeacherPage = dynamic( ()=>import("@/components/teacher/Teacher"))

const Teacher =()=>{
    return(
        <>
        <TeacherPage/>
        </>
    )
}
export default Teacher