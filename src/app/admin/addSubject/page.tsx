import dynamic from "next/dynamic";
const SubjectAdd = dynamic( ()=>import("@/components/subjectAdd/SubjectAdd"))
export default function AddSubjectPage (){
    return(
        <>
        <SubjectAdd />
        </>
    )
}