import React from "react";
import { useAuth } from "../../context/Authprovider";
const Chatuser = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="w-full bg-slate-800 duration-200 hover:bg-slate-700 flex items-center gap-2 justify-center py-1 rounded-md">
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-white">{authUser.name} </h1>
        <span>Online</span>
      </div>
      </div>
    </>
  );
};

export default Chatuser;
