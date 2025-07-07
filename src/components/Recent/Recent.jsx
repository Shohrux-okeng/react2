import RecentCard from "./RecentCard";

const posts = [
  {
    title: "Still Standing Tall",
    description: "Life begins at the end of your comfort zone.",
    image: "/public/Frame (5).png",
    author: "William Wong",
    authorImage: "/public/IMAGE (12).png",
    date: "9/25/2015",
  },
  {
    title: "Sunny Side Up",
    description: "No place is ever as bad as they tell you it’s going to be.",
    image: "/public/Frame (6).png",
    author: "Mat Vogels",
    authorImage: "/public/IMAGE (12).png",
    date: "9/25/2015",
  },
  {
    title: "Water Falls",
    description: "We travel not to escape life, but for life not to escape us.",
    image: "/public/Frame (7).png",
    author: "Mat Vogels",
    authorImage: "/public/IMAGE (12).png",
    date: "9/25/2015",
  },
  {
    title: "Through the Mist",
    description:
      "Travel makes you see what a tiny place you occupy in the world.",
    image: "/public/Frame (8).png",
    author: "William Wong",
    authorImage: "/public/IMAGE (12).png",
    date: "9/25/2015",
  },
  {
    title: "Awaken Early",
    description: "Not all those who wander are lost.",
    image: "/public/Frame (9).png",
    author: "Mat Vogels",
    authorImage: "/public/IMAGE (12).png",
    date: "9/25/2015",
  },
  {
    title: "Try it Always",
    description:
      "The world is a book, and those who do not travel read only one page.",
    image: "/public/Frame (10).png",
    author: "Mat Vogels",
    authorImage: "/public/IMAGE (12).png",
    date: "9/25/2015",
  },
];

const Recent = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-8 text-center">Most Recent</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <RecentCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Recent;
