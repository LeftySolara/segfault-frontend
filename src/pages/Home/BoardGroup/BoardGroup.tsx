import React from "react";

import BoardCategoryTitle from "../BoardCategoryTitle/BoardCategoryTitle";
import BoardCard from "../BoardCard/BoardCard";

interface Board {
  id: string;
  topic: string;
  description: string;
  threadCount: number;
}

interface BoardGroupProps {
  category: string;
  boards: Array<Board>;
}

const BoardGroup = (props: BoardGroupProps) => {
  const { category, boards } = props;

  return (
    <div>
      <BoardCategoryTitle text={category} />
      {boards.map((board: Board) => (
        <BoardCard
          topic={board.topic}
          description={board.description}
          threadCount={board.threadCount}
        />
      ))}
    </div>
  );
};

export default BoardGroup;
