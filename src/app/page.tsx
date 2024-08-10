import ArticleList from "./components/ArticleList";

export default function Page() {
  //データ呼び出し
  return (
    <div className="p-4">
      <div className="bg-green-300 w-full h-40 flex items-center px-20 mb-10">
        <h1 className="text-3xl  font-bold">Tech Blog</h1>
      </div>
      <section>
        <a className="text-3xl font-bold mb-20" href="/personal">
          個人記事一覧へ
        </a>
        <ArticleList apiEndpoint="/api/microcms" />
      </section>
    </div>
  );
}
