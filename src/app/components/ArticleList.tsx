"use client";

//useEffectはクライアントサイドでのみ使用可能
import React, { useEffect } from "react";
import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  date: string;
  url: string;
  thumbnail: string;
}

export const ArticleList: React.FC = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);

  //クライアントサイドでデータを取得する際にはfetch("/api")を使う
  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          date={article.date}
          url={article.url}
          thumbnail={article.thumbnail}
        />
      ))}
    </div>
  );
};
