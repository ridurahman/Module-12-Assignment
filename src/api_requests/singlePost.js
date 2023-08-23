export default async function singlePost(id) {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${id}`
  );

  if (!res.ok) {
    throw new Error("Error fetching post");
  }

  const details = await res.json();

  return details.postDetails;
}
