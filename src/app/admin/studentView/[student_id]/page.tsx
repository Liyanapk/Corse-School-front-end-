import dynamic from "next/dynamic";
import ViewStudent from "@/components/viewStudent/ViewStudent";

const StudentView = ({ params }: { params: { student_id: string } }) => {
  return (
    <ViewStudent params={params} />
  );
};

export default StudentView;