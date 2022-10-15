import { IBlogCard } from "@/src/interfaces";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const BlogCard = ({ imageSrc, title, date }: IBlogCard) => {
  return (
    <div className="space-y-5 text-gray-900 w-[300px]">
      <Image src={imageSrc} alt="" width={300} height={200} />
      <div>
        <h2>{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>

      <button className="flex items-center space-x-2 bg-cloudax-blue cursor-pointer font-semibold px-4 py-2 rounded-lg text-gray-50">
        Read More
        <span>
          <BsArrowRightShort className="w-5 h-5" />
        </span>
      </button>
    </div>
  );
};

export default BlogCard;
