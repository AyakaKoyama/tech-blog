import data from "@/data/sampleData";
import { NextApiRequest, NextApiResponse } from "next";

//記事一覧取得
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //sampleData.ts呼び出す

  const error = data.length === 0 ? "No data found" : null;

  res.status(200).json(data);
}
