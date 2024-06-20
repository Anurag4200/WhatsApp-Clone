import React from "react";
import Singleuser from "./Singleuser";
import UseGetAllUsers from "../../context/UseGetAllUsers";

const User = () => {
  const [users,loading]=UseGetAllUsers()
  console.log(users)
  return (
    <>
      <div className="">
        <h1 className="px-4 py-3 text-white font-semibold bg-zinc-800 rounded-md h-10 flex items-center">
          Messages
        </h1>
        <div className="h-[450px] overflow-y-auto remove-scroll">
          {users.map((user,index)=>(
            <Singleuser key={index} user={user}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
