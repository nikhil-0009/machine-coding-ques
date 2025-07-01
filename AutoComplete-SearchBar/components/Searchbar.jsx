import React, { useEffect, useState } from 'react';

const Searchbar = () => {
  const [state, getState] = useState('');
  const [search, setSearch] = useState([]);
  const [showResults,setShowResults]=useState(false)        // if we click outside it hides the results

  const handleChange = (e) => {
    getState(e.target.value);
  };
  const  fetchData=async()=>{
  try {
    
       const res= await fetch('https://dummyjson.com/recipes')
      const data= await res.json()
        const items = data.recipes.map((item) => item.name);
        const searchResult = items.filter((e) =>
          e.toLowerCase().includes(state.toLowerCase())
        );
        setSearch(searchResult);
      
  }
   catch (error) {
    console.error("Something went wrong!", error); 
  }}
  

  useEffect(() => {
   const timer= setTimeout(fetchData, 400);
    return ()=>{clearTimeout(timer)}
  }, [state]);

  return (
    <div className="w-full max-w-md mx-auto mt-12 p-4">
      <input
        type="text"
        value={state}
        onChange={handleChange}
        placeholder="Search recipes..."
        onFocus={()=>setShowResults(true)}  // onclicking on search results box it shows data
        onBlur={()=>setShowResults(false)}  // onclicking outside it hides the data
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {showResults && (
  <div className="mt-4 bg-white rounded-md shadow-md divide-y divide-gray-200">
    {state && search.length > 0 &&
      search.map((item, index) => (
        <div
          key={index}
          className="p-3 hover:bg-blue-50 cursor-pointer transition text-gray-800"
        >
          {item}
        </div>
      ))
    }

    {state && search.length === 0 && (
      <div className="p-3 text-gray-500 italic">No results found</div>
    )}
  </div>
)}
    </div>
  );
};

export default Searchbar;
