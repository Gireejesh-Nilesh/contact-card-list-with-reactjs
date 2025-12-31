import React from "react";

const Card = ({user, deletehandler}) => {
  return (
    <>
      <img
        className="w-[15vw] rounded-[50%] object-cover "
        src={user.imgUrl}
        alt=""
      />
      <h2 className="font-semibold text-[1rem]">{user.name}</h2>
      <p className="font-mono text-lg">{user.num}</p>
      <p style={{ marginBottom: "3rem" }} className="text-sm">
        {user.email}
      </p>
      <button
        style={{ padding: "0.5rem 1rem"}}
        className="bg-red-900 rounded-2xl active:scale-96 cursor-pointer absolute bottom-3"
        onClick={() => {
          deletehandler(user.id);
        }}
      >
        Remove
      </button>
    </>
  );
};

export default Card;
