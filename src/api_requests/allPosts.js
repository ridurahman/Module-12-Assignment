export default async function allPosts() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-list", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  return res.json();
}
