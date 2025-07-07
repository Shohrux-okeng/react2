import Card1 from "./card1";
import Card2 from "./card2";

const FeaturedPosts = () => {
  return (
    <div className="py-10 px-6 text-center">
      <h1 className="text-2xl font-semibold mb-6">Featured Posts</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
};

export default FeaturedPosts;
