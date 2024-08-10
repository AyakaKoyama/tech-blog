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
    <div className="w-full px-20 py-20">
      <div data-testid="article-card" className="grid grid-cols-4  gap-4">
        {articles.map((article, index) => (
          <>
            <ArticleCard
              key={index}
              title={article.title}
              date={article.date}
              url={article.url}
              thumbnail={article.thumbnail}
              content={article.content}
            />
          </>
        ))}
      </div>
    </div>
  );
};
export default ArticleList;
