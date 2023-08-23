import newestPosts from "@/api_requests/newestPosts";
import Link from "next/link";
import React from "react";

const Blogs = async () => {
  const posts = await newestPosts();
  return (
    <div className="container mx-auto" style={{ maxWidth: "1200px" }}>
      <h1 className="font-bold text-lg">Blog Posts</h1>

      <div className="p-10 box-border w-750">
        {posts.map((post) => {
          return (
            <Link href={`/single-blog/${post.id}`}>
              <div className="border border-gray-400 w-full my-3 lg:max-w-full lg:flex">
                <p className="pb-5" key={post.id}></p>

                <div
                  style={{ width: "400px" }}
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  title="Mountain"
                >
                  <img src={post.img} />
                </div>
                <div className=" p-4 flex items-center leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {post.title}
                    </div>
                    <p className="text-gray-700 text-base">{post.short}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
