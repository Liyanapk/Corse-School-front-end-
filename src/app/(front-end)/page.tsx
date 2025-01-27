import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/banner/Banner"));
const ContentSection = dynamic(() => import("@/components/content/Content"));
const Catagory = dynamic(() => import("@/components/catagory/Catagory"));
const InstructorPage = dynamic( () => import("@/components/instructor/Instructor"));
const FeedBack = dynamic(() => import("@/components/feedback/FeedBack"));
const BlogPost = dynamic(() => import("@/components/post/BlogPost"));
const SendEmail = dynamic(() => import("@/components/email/Email"));


export default function HomePage() {
  return (
    <>
      <Banner />
      <ContentSection  />
      <Catagory />
      <InstructorPage />
      <FeedBack />
      <BlogPost />
      <SendEmail />
    </>
  );
}
