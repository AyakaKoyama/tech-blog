import { title } from "process";
import React from "react";

interface ArticleCardProps {
  title: string;
  date: string;
  url: string;
  thumbnail: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  url,
  thumbnail,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <a href={url} rel="noopener noreferrer">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </a>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{date}</p>
        <a
          href={url}
          className="text-blue-500 hover:underline"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
