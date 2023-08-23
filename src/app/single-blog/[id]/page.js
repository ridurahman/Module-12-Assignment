import newestPosts from "@/api_requests/newestPosts";
import singlePost from "@/api_requests/singlePost";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  console.log(params.id);

  //const postPromise = singlePost(id);

  const post = (await singlePost(id)) || {};
  //const details = await post.postDetails;
  return (
    <div className="p-5 m-5 mx-40 ">
      {/* <h1 className="text-center">Post: {id}</h1> */}
      <h1 className="text-center text-3xl font-semibold">{post.title}</h1>
      <img className="mx-auto m-5" src={post.img} />
      <p className="text-justify">{post.content}</p> <br />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const posts = await newestPosts();

  return posts.map((post) => ({
    id: "" + post.id,
  }));
}
