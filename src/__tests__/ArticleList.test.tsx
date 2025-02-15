import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//import ArticleCard from "@/app/components/ArticleCard";
import ArticleList from "@/app/components/ArticleList";

// モックデータを定義
const mockedArticles = [
  {
    id: "1",
    title: "記事タイトル",
    date: "2022-01-01",
    url: "https://example.com",
    thumbnail: "https://example.com/thumbnail.jpg",
    content: "記事の内容",
  },
];

// モックデータを返す関数を定義
function createMockResponse(data: any) {
  return {
    ok: true,
    status: 200,
    json: async () => data,
  } as Response;
}

// fetchをモックする
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve(createMockResponse(mockedArticles))
  );
});

//react-markdownモック
jest.mock("react-markdown", () => (props) => {
  return <>{props.children}</>;
});

jest.mock("remark-gfm", () => () => {});

jest.mock("rehype-raw", () => () => {});

describe("article-card-view", () => {
  it("ブログ記事の一覧が表示される", async () => {
    render(<ArticleList apiEndpoint="/api/microcms" />);

    // 非同期操作の待機
    const articleCard = await screen.findByTestId("article-card");
    expect(articleCard).toBeInTheDocument();
  });

  it("個人ブログ記事の一覧が表示される", async () => {
    render(<ArticleList apiEndpoint="/api/qiita" />);

    // 非同期操作の待機
    const articleCard = await screen.findByTestId("article-card");
    expect(articleCard).toBeInTheDocument();
  });
});
