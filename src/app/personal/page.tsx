import ArticleList from "../components/ArticleList";

export default function PersonalPage() {
  //データ呼び出し
  return (
    <div className="p-4">
      <section>
        <a className="text-xl font-bold">個人記事一覧</a>
        <a className="text-xl font-bold" href="/">
          戻る
        </a>
        <ArticleList apiEndpoint="/api/qiita" />
      </section>
    </div>
  );
}
