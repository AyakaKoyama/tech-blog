import { createClient } from "microcms-js-sdk";

// クライアントの作成
const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_API_URL ?? "",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY ?? "",
});

// お知らせ用の型を定義
export interface Blogs {
  id: string;
  title: string;
  content: string;
}

// ブログ一覧を取得
export async function getBlogsList(): Promise<Blogs[]> {
  const blog = await client.get({ endpoint: "blogs" });
  return blog.contents;
}

// ブログ詳細を取得
export async function getBlogs(id: string): Promise<Blogs> {
  const data = await client.get({
    endpoint: "blogs",
    contentId: id,
  });
  return data;
}
