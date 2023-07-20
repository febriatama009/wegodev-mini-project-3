import React from "react";
import { BiError } from "react-icons/bi";

const Error = () => {
  //refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center m-6 h-screen">
      <BiError size={128} color="red" />
      <p className="text-red-500 font-bold">Something Wrong Just Happend!</p>
      <button
        className="mt-8 px-4 py-2 text-red-600 rounded-md border border-red-500 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
