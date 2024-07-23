import React from "react";
import { ArticleList } from "../components/ArticleList";

export default function PersonalPage() {
  //データ呼び出し
  return (
    <div className="p-4">
      <section>
        <ArticleList apiEndpoint="/api/qiita" />
      </section>
    </div>
  );
}
