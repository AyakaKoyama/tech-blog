import ArticleList from "./components/ArticleList";

export default function Page() {
  //データ呼び出し
  return (
    <div className="p-4">
      <div className="bg-green-300 w-full h-40 flex items-center px-20 mb-20">
        <h1 className="text-3xl  font-bold">Tech Blog</h1>
      </div>
      <section>
        <div className="bg-green-100 w-full h-20 flex items-center px-20 mb-10">
          <h1 className="text-2xl  font-bold">ブログ一覧</h1>
        </div>
        <ArticleList apiEndpoint="/api/microcms" />
        <div className="text-right  mb-5">
          <a className="text-2xl underline  font-bold mb-20" href="/blog">
            もっと見る
          </a>
        </div>
        <div className="bg-green-100 w-full h-20 flex items-center px-20 mb-10">
          <h1 className="text-2xl  font-bold">個人記事一覧</h1>
        </div>
        <ArticleList apiEndpoint="/api/qiita" />
        <div className="text-right">
          <a className="text-2xl underline  font-bold mb-20" href="/personal">
            もっと見る
          </a>
        </div>
      </section>
    </div>
  );
}
