import dynamic from "next/dynamic";
import ViewAdmin from "@/components/viewAdmin/ViewAdmin";

const StudentView = ({ params }: { params: { id: string } }) => {
    return (
      <ViewAdmin params={params} />
    );
  };

export default StudentView;
