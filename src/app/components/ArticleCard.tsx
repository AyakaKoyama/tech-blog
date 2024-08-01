"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ArticleCardProps {
  title: string;
  date: string;
  url: string;
  thumbnail: string;
  content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  url,
  thumbnail,
  content,
}) => {
  console.log("ArticleCard URL:", url);
  console.log("content", content);

  return (
    <>
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

          <div className="text-gray-600">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          </div>

          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
