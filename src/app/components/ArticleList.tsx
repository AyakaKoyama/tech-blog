"use client";

//useEffectはクライアントサイドでのみ使用可能
import React, { useEffect } from "react";
import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  date: string;
  url: string;
  //サンプル画像サムネ
  thumbnail: string;
  //microCMS
  content: string;
}

//両記事の共通部分を再利用
interface ArticleListProps {
  apiEndpoint: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ apiEndpoint }) => {
  const [articles, setArticles] = React.useState<Article[]>([]);

  //クライアントサイドでデータを取得する際にはfetch("/api")を使う
  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched articles:", data);
        setArticles(data);
      })
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <>
          <ArticleCard
            data-testid="article-card"
            key={index}
            title={article.title}
            date={article.date}
            url={article.url}
            thumbnail={article.thumbnail}
            content={article.content}
          />
          <a
            data-testid="read-more"
            href={article.url}
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </>
      ))}
    </div>
  );
};
export default ArticleList;
