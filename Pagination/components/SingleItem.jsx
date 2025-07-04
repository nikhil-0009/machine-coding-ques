const SingleItem = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {item.description}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                {item.category}
              </span>
              <span>Rating: ⭐ {item.rating}</span>
            </div>
            <div className="text-lg font-bold text-green-600">
              ₹{item.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleItem;
