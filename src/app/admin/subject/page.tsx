import dynamic from "next/dynamic";
const Subject = dynamic( ()=>import("@/components/subject/Subject"))

const SubjectPage = ()=>{
    return(
        <>
        <Subject/>
        </>
    )
}

export default SubjectPage