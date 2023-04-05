import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>Everything about this person is here</h3>
      <h4>{friend.name}</h4>
      <h5>{friend.email}</h5>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default FriendDetail;
