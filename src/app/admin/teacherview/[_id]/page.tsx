import dynamic from "next/dynamic";
// const ViewTeacher = dynamic( ()=>import ("@/components/ViewTeacher/ViewTeacher"))
import ViewTeacher from "@/components/ViewTeacher/ViewTeacher";

const ViewTeacherPage = ({ params }: { params: { _id: string } }) => {
    return <ViewTeacher params={params} />;
  };     

export default ViewTeacherPage