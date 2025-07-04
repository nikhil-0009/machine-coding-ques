import React from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="w-full overflow-x-auto px-2">
      <div className="flex justify-center md:justify-center mt-4 gap-2 flex-nowrap min-w-max">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 min-w-[40px] rounded text-sm transition-all duration-200 whitespace-nowrap ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white font-semibold shadow'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
