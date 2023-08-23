import React from "react";
import newestPosts from "@/api_requests/newestPosts";
import Link from "next/link";

const ForBlogsPage = async () => {
  const posts = await newestPosts();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold m-5">Blog Posts</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <Link href={`/single-blog/${post.id}`}>
              <img
                className="w-full"
                src={post.img}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 font-bold text-xl mb-2">
                {post.title}
              </div>
            </Link>
            <div className="px-6 ">
              <p className="text-gray-700 text-base">{post.short}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForBlogsPage;
