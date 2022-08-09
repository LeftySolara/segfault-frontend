import React from "react";

import BoardCategoryTitle from "../BoardCategoryTitle/BoardCategoryTitle";
import BoardCard from "../BoardCard/BoardCard";

interface Board {
  id: string;
  topic: string;
  description: string;
  threadCount: number;
}

interface BoardCategory {
  id: string;
  topic: string;
  boards: Array<Board>;
}

interface BoardCategoryGroupProps {
  category: BoardCategory;
}

const BoardCategoryGroup = (props: BoardCategoryGroupProps) => {
  const { category } = props;

  return (
    <div>
      <BoardCategoryTitle text={category.topic} key={category.id} />
      {category.boards.map((board: Board) => (
        <BoardCard
          topic={board.topic}
          description={board.description}
          threadCount={board.threadCount}
        />
      ))}
    </div>
  );
};

export default BoardCategoryGroup;
