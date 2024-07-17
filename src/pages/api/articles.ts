import data from "@/data/sampleData";
import { NextApiRequest, NextApiResponse } from "next";
import { getBlogsList } from "./microcms";
import { getQiitaArticles } from "./qiita";

//記事一覧取得
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //sampleData.ts呼び出す

  try {
    const [qiitaArticles, microcmsArticles] = await Promise.all([
      getQiitaArticles(),
      getBlogsList(),
    ]);

    //サムネイル
    const sampleThumbnails = [
      "https://sample-thumbnail-1.jpg",
      "https://sample-thumbnail-2.jpg",
      "https://sample-thumbnail-3.jpg",
      "https://sample-thumbnail-4.jpg",
    ];

    //データを結合
    const articles = [
      ...qiitaArticles.map((article, index) => ({
        ...article,
        thumbnail: sampleThumbnails[index % sampleThumbnails.length],
      })),
      ...microcmsArticles.map((blog, index) => ({
        ...blog,
        thumbnail:
          sampleThumbnails[
            (index + qiitaArticles.length) % sampleThumbnails.length
          ],
      })),
    ];
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
