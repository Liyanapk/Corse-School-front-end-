import dynamic from "next/dynamic";
import ViewStudent from "@/components/viewStudent/ViewStudent";

const StudentView = ({ params }: { params: { _id: string } }) => {
  return <ViewStudent params={params} />;
};

export default StudentView;
