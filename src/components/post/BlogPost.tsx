'use client'
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import { useState } from "react";

interface BlogPost {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "/images/post/PopularPost.webp",
    alt: "image",
    title: "How to Analyze Your Best Pages for SEO Performance",
    description: "It is a long established fact that a reader.",
    link: "/learn-more"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Difficult Things About Education.",
    description: "ijijpokp",
    link: "/read-article"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Education Is So Famous, But Why?",
    description: "",
    link: "/read-article"
  },
  {
    image: "/images/post/PopularPost.webp",
    alt: "image",
    title: "Understanding Modern SEO Strategies",
    description: "Modern SEO techniques for 2025.",
    link: "/learn-more"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "The Future of Education",
    description: "How tech is shaping education.",
    link: "/read-article"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Challenges in Online Education",
    description: "Barriers to online learning.",
    link: "/read-article"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Challenges in Online Education",
    description: "Barriers to online learning.",
    link: "/read-article"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Challenges in Online Education",
    description: "Barriers to online learning.",
    link: "/read-article"
  }
];

export default function BlogPost() {
  const [mainCard, setMainCard] = useState<BlogPost>(blogPosts[0]); // Main card
  const [sidePosts, setSidePosts] = useState<BlogPost[]>(blogPosts.slice(1, 3)); // Initial 2 posts for the right side
  const [extraRows, setExtraRows] = useState<BlogPost[][]>([]); // To store extra rows of posts under the main card
  const [showMore, setShowMore] = useState<boolean>(true); // State for showing more posts

  const handlePostClick = (clickedPost: BlogPost) => {
    // Update main card to clicked post
    setMainCard(clickedPost);

    // Adjust side posts: remove the clicked post from sidePosts and push it back as a new post
    const updatedSidePosts = sidePosts.filter((post) => post.title !== clickedPost.title);
    updatedSidePosts.push({ ...mainCard, description: "" });
    setSidePosts(updatedSidePosts);
  };

  const handleShowMore = () => {
    // Slice the next set of 3 posts and add them to the extra rows
    const nextPosts = blogPosts.slice(sidePosts.length + extraRows.flat().length, sidePosts.length + extraRows.flat().length + 3);

    if (nextPosts.length > 0) {
      setExtraRows((prevRows) => [...prevRows, nextPosts]);
    }

    // Check if there are no more posts
    if (sidePosts.length + extraRows.flat().length + nextPosts.length >= blogPosts.length) {
      setShowMore(false); // Hide the button when all posts are shown
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 bg-[#aed5f53a] mt-[-4rem] p-6">
      <div className="flex flex-col items-center text-left gap-6 w-full">
        <button className="w-[90px] h-[35px] text-[#d87093] bg-[#bb84bb1f] border-none rounded-full text-sm">
          BLOG POST
        </button>
        <h1 className="text-3xl font-extrabold flex flex-col justify-center gap-y-10 items-center">
          Post Popular Post.
          <button className="text-sm w-[130px] h-[45px] text-white bg-gradient-to-r from-blue-500 to-violet-500 font-bold rounded-xl flex items-center justify-center gap-1">
            See All Articles <PiArrowRightThin />
          </button>
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 justify-center items-center w-full">
        {/* Main box on the left side */}
        <div className="xl:w-[820px]  xl:h-[500px] bg-white p-4 rounded-lg shadow-lg">
          <Image
            src={mainCard.image}
            alt={mainCard.alt}
            width={500}
            height={300}
            className="object-cover w-full h-[300px]"
          />
          <h1 className="text-xl font-bold pt-4">{mainCard.title}</h1>
          {mainCard.description && (
            <h3 className="text-sm text-gray-600">{mainCard.description}</h3>
          )}
          <p className="text-sm font-normal text-black py-3 flex items-center gap-2">
            {mainCard.link.includes("learn-more") ? "Learn More" : "Read Article"}{" "}
            <PiArrowRightThin />
          </p>
        </div>

        {/* Right side container with initial 2 posts */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-1 pt-16">
          {sidePosts.map((post, index) => (
            <div
              key={index}
              onClick={() => handlePostClick(post)}
              className="bg-white p-4 rounded-lg shadow-lg  xl:w-[400px]"
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={250}
                height={150}
                className="object-cover w-full h-[150px]"
              />
              <h1 className="text-lg font-bold pt-3">{post.title}</h1>
              <p className="text-sm font-normal text-black py-3 flex items-center gap-2">
                {post.link.includes("learn-more") ? "Learn More" : "Read Article"}{" "}
                <PiArrowRightThin />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display extra rows of 3 cards under the main card */}
      {extraRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-6 justify-center mt-6 flex-col xl:flex-row md:flex-row sm:flex-col">
          {row.map((post, index) => (
            <div
              key={index}
              onClick={() => handlePostClick(post)}
              className="bg-white p-4 rounded-lg shadow-lg xl:w-[400px] mb-6"  // Added margin-bottom for spacing
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={250}
                height={150}
                className="object-cover w-full h-[150px]"
              />
              <h1 className="text-lg font-bold pt-3">{post.title}</h1>
              <p className="text-sm font-normal text-black py-3 flex items-center gap-2">
                {post.link.includes("learn-more") ? "Learn More" : "Read Article"}{" "}
                <PiArrowRightThin />
              </p>
            </div>
          ))}
        </div>
      ))}

      {/* Show more button */}
      {showMore && (
        <button
          onClick={handleShowMore}
          className="w-[130px] h-[35px] text-white bg-gradient-to-r from-blue-500 to-violet-500 font-bold rounded-xl mt-6"
        >
          Show More
        </button>
      )}
    </div>
  );
}
