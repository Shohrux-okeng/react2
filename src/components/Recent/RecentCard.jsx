const RecentCard = ({ post }) => {
    return (
      <div className="bg-white rounded overflow-hidden shadow-md">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[162px] object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{post.description}</p>
          <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-6 h-6 rounded-full"
              />
              <span>{post.author}</span>
            </div>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecentCard;
  