import ArticleList from "./components/ArticleList";

export default function Page() {
  //データ呼び出し
  return (
    <div className="p-4">
      <section>
        <a className="text-xl font-bold" href="/personal">
          個人記事一覧
        </a>
        <ArticleList apiEndpoint="/api/microcms" />
      </section>
    </div>
  );
}
