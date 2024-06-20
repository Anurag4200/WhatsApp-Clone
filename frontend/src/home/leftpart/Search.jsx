import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className="px-4 py-3">
        <form action="">
          <div className="flex gap-2">
            <label className="w-[90%] input input-bordered flex items-center gap-2 bg-zinc-600">
              <input type="text" className="grow outline-none text-white" placeholder="Search" />
            </label>
            <button className="">
              <CiSearch className=" text-5xl p-2 hover:bg-zinc-600 duration-300 rounded-full"/>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
