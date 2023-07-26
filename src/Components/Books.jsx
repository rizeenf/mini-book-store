import React from "react";

const Books = ({
  title,
  author,
  desc,
  img,
  publisher,
  link,
  display_name,
  listId,
}) => {
  return (
    <div className="max-w-sm rounded-[20px] overflow-hidden shadow-lg bg-slate-100">
      <img className="w-full" src={img} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-700 text-2xl mb-2">{title}</div>
        <div className="font-bold mb-2">{author}</div>
        {display_name && (
          <div className="font-bold mb-2" id={`${listId}`}>
            {display_name}
          </div>
        )}

        <button onClick={(e) => console.log(e.target.parentElement)}>
          Test
        </button>

        <p className="text-gray-700 text-base">{desc}</p>
        <p className="text-gray-700 text-base"> Publisher : {publisher}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          target="_blank"
          className="inline-block bg-blue-3 00 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          href={link}
        >
          BUY NOW
        </a>
      </div>
    </div>
  );
};

export default Books;
