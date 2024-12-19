import dynamic from "next/dynamic";
const ViewStudent = dynamic ( ()=>import("@/components/viewStudent/ViewStudent") ) 

const StudentView = ({ params }: { params: { id: string } }) => {
    return (
      <ViewStudent params={params} />
    );
  };

export default StudentView;
