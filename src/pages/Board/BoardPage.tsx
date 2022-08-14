import React from "react";
import { useParams } from "react-router-dom";
import ThreadList from "./ThreadList/ThreadList";

const BoardPage = () => {
  const { id } = useParams();

  return <div>{id && <ThreadList boardId={id} />}</div>;
};

export default BoardPage;
