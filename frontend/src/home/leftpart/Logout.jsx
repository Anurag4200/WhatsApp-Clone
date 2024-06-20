import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie"
import axios from "axios"

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("token");
      setLoading(false);
      alert("Logged Out successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="px-4 py-0 h-[5vh]">
        <form action="">
          <div className="flex gap-2">
            <button className="">
              <CiLogout
                onClick={handleLogout}
                className=" text-4xl p-2 text-white hover:bg-zinc-600 duration-300 rounded-full"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Logout;
