import React from "react";

const Message = () => {
  return (
    <>
      <div className="px-4 py-3">
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-warning ">
            To be on the Council at your age.
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
