"use client";

//useEffectはクライアントサイドでのみ使用可能
import React, { useEffect } from "react";
import ArticleCard from "./ArticleCard";

interface Article {
  title: string;
  date: string;
  url: string;
  thumbnail: string;
}

export const ArticleList: React.FC = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);

  //クライアントサイドでデータを取得する際にはfetch("/api")を使う
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setArticles(data));
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
