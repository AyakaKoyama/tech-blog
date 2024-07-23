import ArticleCard from "@/app/components/ArticleCard";
import { ArticleList } from "@/app/components/ArticleList";
import { Blogs, getBlogs, getBlogsList } from "@/pages/api/microcms";

import React from "react";

// ブログデータ取得関数
async function fetchBlog(id: string): Promise<Blogs | null> {
  try {
    const blog = await getBlogs(id);
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// パラメータ生成関数
export async function generateStaticParams() {
  const blogs = await getBlogsList();
  return blogs.map((blog) => ({
    id: blog.id,
    url: `/blog/${blog.id}`,
  }));
}

// サーバーコンポーネント
const BlogPage = async ({ params }: { params: { id: string } }) => {
  const blog = await fetchBlog(params.id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-4">
      <section>
        <ArticleCard
          title={blog.title}
          date={blog.updatedAt}
          url={blog.url}
          thumbnail={blog.eyecatch.url}
          content={blog.content}
        />
      </section>
    </div>
  );
};

export default BlogPage;
