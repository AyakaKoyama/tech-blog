import { ArticleList } from "./components/ArticleList";

export default function Page() {
  //データ呼び出し
  return (
    <div className="p-4">
      <section>
        <ArticleList />
      </section>
    </div>
  );
}
