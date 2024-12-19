import dynamic from "next/dynamic";
const ViewTeacher = dynamic( ()=>import ("@/components/ViewTeacher/ViewTeacher"))

const ViewTeacherPage = ( { params }: { params: { id: string } } )=>{
    return(
        <div>
            <ViewTeacher params={params}/>
        </div>

    )
}


export default ViewTeacherPage