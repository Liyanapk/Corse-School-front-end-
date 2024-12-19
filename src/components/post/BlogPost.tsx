import "./BlogPost.css";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";

export default function BlogPost() {
  return (
    <div className="blog-total">
      <div className="blog-title">
        <button className="blog-box">BLOG POST</button>
        <h1 className="blog-heading">
          Post Popular Post.
          <button className="blog-button">
            See All Articles <PiArrowRightThin className="blog-arrow" />
          </button>
        </h1>
      </div>

      <div className="blog-grid-container">
        <div className="item1">
          <div>
            <Image
              src="/images/post/post(img1).webp"
              alt="image"
              width={638}
              height={330}
            />
          </div>

          <div>
            <h1>How to Analyze Your Best Pages for SEO Performance</h1>
            <h3>It is a long established fact that a reader.</h3>
            <p className="blog-arrow">
              Learn More <PiArrowRightThin />
            </p>
          </div>
        </div>
        <div className="item2">
          <div>
            <Image
              src="/images/post/post(image).webp"
              alt="image"
              width={290}
              height={150}
              className="blog-image"
            />
          </div>
          <div>
            <h1>Difficult Things About Education.</h1>
            <p className="blog-arrow">
              Read Article <PiArrowRightThin />
            </p>
          </div>
        </div>
        <div className="item3">
          <div>
            <Image
              src="/images/post/post(image).webp"
              alt="image"
              width={290}
              height={150}
              className="blog-image"
            />
          </div>
          <div>
            <h1>Education Is So Famous, But Why?</h1>
            <p className="blog-arrow">
              Read Article <PiArrowRightThin />
            </p>
          </div>
        </div>
        <div className="item4">
          <div>
            <Image
              src="/images/post/post(image).webp"
              alt="image"
              width={290}
              height={150}
              className="blog-image"
            />
          </div>
          <div>
            <h1>Five Things You About Education.</h1>
            <p className="blog-arrow">
              Read Article <PiArrowRightThin />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
