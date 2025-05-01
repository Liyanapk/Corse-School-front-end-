import ContentSection from "../content/Content";
interface OtherCoursesProps {
  category: string;
}

export default function OtherCourses({ category }: OtherCoursesProps) {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-purple-200">
      <ContentSection category={category} />
    </div>
  );
}
