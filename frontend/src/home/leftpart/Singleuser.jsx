import React from "react";

const Singleuser = ({user}) => {
  return (
    <>
      <div className="flex gap-3 px-4 py-3 hover:bg-zinc-700 duration-200 cursor-pointer items-center">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-white">{user.name} </h1>
          <span>{user.email}</span>
        </div>
      </div>
    </>
  );
};

export default Singleuser;
