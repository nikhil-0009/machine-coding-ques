import React, {useState } from "react";
import SingleItem from "./SingleItem";
import Pagination from "./pagination";

const Allitems = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const end=currentPage*pageSize
  const start=end-pageSize
  const totalPages=Math.ceil(data.length/pageSize)
  const currentItems=data.slice(start,end)
  return (
    <div>
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <SingleItem data={currentItems} />
    </div>
  );
};

export default Allitems;
