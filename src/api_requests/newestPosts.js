export default async function newestPosts() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  return res.json();
}
