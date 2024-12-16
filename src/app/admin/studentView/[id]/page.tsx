import ViewStudent from "@/components/viewStudent/ViewStudent";

const StudentView = ({ params }: { params: { id: string } }) => {
    return (
      <ViewStudent params={params} />
    );
  };

export default StudentView;
