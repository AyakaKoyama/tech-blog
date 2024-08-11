import ArticleList from "../components/ArticleList";

export default function PersonalPage() {
  //データ呼び出し
  return (
    <div className="p-4">
      <section>
        <div className="bg-green-300 w-full h-40 flex items-center px-20 mb-10">
          <h1 className="text-3xl  font-bold">個人記事一覧</h1>
        </div>

        <ArticleList apiEndpoint="/api/qiita" />
      </section>
      <div className="text-right">
        <a className="text-3xl underline font-bold" href="/">
          戻る
        </a>
      </div>
    </div>
  );
}
