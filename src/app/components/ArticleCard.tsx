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
  return (
    <>
      <div className="mx-auto p-4 my-20 justify-center flex">
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden p-10 max-w-[1000px] w-full h-100 "
          data-testid="article-card"
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          </a>
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-5">{title}</h2>

            <div className=" text-2xl text-gray-600 mb-5">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content}
              </ReactMarkdown>
            </div>
            <div className="text-right">
              <p className=" text-xl text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
