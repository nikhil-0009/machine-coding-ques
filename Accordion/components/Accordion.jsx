import React, { useState } from "react";

const Accordion = () => {
  const list = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React JS Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node JS",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Fullstack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (idx) => {
    setIsOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="head">
      {list.map((item, idx) => (
        <div key={idx} className="main border p-4 mb-2 rounded shadow">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleClick(idx)}
          >
            <span className="font-semibold">{item.title}</span>
            <span>{isOpen === idx ? "▲" : "▼"}</span>
          </div>
          {isOpen === idx && (
            <p className="mt-2 text-gray-700">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;