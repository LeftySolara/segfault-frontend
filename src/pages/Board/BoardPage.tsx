import React from "react";
import { useParams } from "react-router-dom";

const BoardPage = () => {
  const { id } = useParams();
  return <h1>Board Page: {id}</h1>;
};

export default BoardPage;
