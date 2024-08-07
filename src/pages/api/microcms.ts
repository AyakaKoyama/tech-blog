import { createClient } from "microcms-js-sdk";
import { NextApiRequest, NextApiResponse } from "next";

// クライアントの作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_API_URL ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});

// お知らせ用の型を定義
export interface Blogs {
  id: string;
  title: string;
  content: string;
  url: string;
  updatedAt: string;
  publishedAt: string;
  eyecatch: { url: string };
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const blogs = await getBlogsList();
    res.status(200).json(
      blogs.map((blog) => ({
        ...blog,
        url: `/blog/${blog.id}`,
        thumbnail: blog.eyecatch?.url || "",
      }))
    );
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
