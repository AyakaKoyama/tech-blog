// /pages/api/qiita.ts
import sampleData from "@/data/sampleData";
import { NextApiRequest, NextApiResponse } from "next";

const QIITA_ACCESS_TOKEN = process.env.QIITA_ACCESS_TOKEN;
const QIITA_USER_ID = "AK_React"; // QiitaユーザーID

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://qiita.com/api/v2/users/${QIITA_USER_ID}/items?per_page=4`,
      {
        headers: {
          Authorization: `Bearer ${QIITA_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Qiita articles");
    }

    // 取得した記事にサンプルデータのサムネイルを追加
    const articles = await response.json();
    const articlesWithThumbnails = articles
      .slice(0, 4)
      .map((article, index) => ({
        ...article,
        thumbnail: sampleData[index % sampleData.length].thumbnail,
      }));

    res.status(200).json(articlesWithThumbnails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
