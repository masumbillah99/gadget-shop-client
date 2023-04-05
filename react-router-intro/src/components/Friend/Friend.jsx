import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { id, name, email, phone } = friend;
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p><Link to={`/friend/${friend.id}`}>show me details</Link></p>
    </div>
  );
};

export default Friend;
