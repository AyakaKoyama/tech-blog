import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleCard from "@/app/components/ArticleCard";

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

it("記事の詳細が表示される", () => {
  render(<ArticleCard {...mockedArticles[0]} />);

  const article = screen.getByTestId("article-card");
  expect(article).toBeInTheDocument();
});

it("クリックすると新しいタブで記事が開く", () => {
  render(<ArticleCard {...mockedArticles[0]} />);

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "https://example.com");
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});
