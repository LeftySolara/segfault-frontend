import React from "react";
import { useParams } from "react-router-dom";

const ThreadPage = () => {
  const { id } = useParams();

  return <p>Thread {id}</p>;
};

export default ThreadPage;
