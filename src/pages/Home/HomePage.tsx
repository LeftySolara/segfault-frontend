import React from "react";

import BoardCategoryGroup from "./BoardCategoryGroup/BoardCategoryGroup";

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

const boardCategories = [
  {
    id: "0",
    topic: "Programming Languages",
    boards: ["0", "1", "2"],
  },
  {
    id: "1",
    topic: "Domains",
    boards: ["3", "4"],
  },
];

const boards = [
  {
    _id: "0",
    topic: "Python",
    description: "Discuss Python programming here",
    threads: ["0", "1", "2"],
    category: {
      id: "0",
      topic: "Programming Languages",
    },
  },
  {
    _id: "1",
    topic: "C",
    description: "The classic we all know and love",
    threads: ["3", "4"],
    category: {
      id: "0",
      topic: "Programming Languages",
    },
  },
  {
    _id: "2",
    topic: "C++",
    description: "We all hate outselves",
    threads: ["5", "6", "7", "8"],
    category: {
      id: "0",
      topic: "Programming Languages",
    },
  },
  {
    _id: "3",
    topic: "Web Development",
    description: "Topics regarding web development",
    threads: ["9", "10", "11", "12"],
    category: {
      id: "1",
      topic: "Domains",
    },
  },
  {
    _id: "4",
    topic: "Operating Systems",
    description: "For discussion about operating systems",
    threads: ["13", "14", "15", "16"],
    category: {
      id: "1",
      topic: "Domains",
    },
  },
];

const HomePage = (): JSX.Element => {
  const matchBoardsToCategories = () => {
    let categoryBoards;
    let boardCategory;

    const categories: Array<BoardCategory> = [];

    boardCategories.forEach((category) => {
      categoryBoards = boards
        .filter((board) => board.category.id === category.id)
        .map((board) => {
          return {
            id: board._id,
            topic: board.topic,
            description: board.description,
            threadCount: board.threads.length,
          };
        });

      boardCategory = {
        id: category.id,
        topic: category.topic,
        boards: categoryBoards,
      };

      categories.push(boardCategory);
    });

    return categories;
  };

  const categories = matchBoardsToCategories();

  return (
    <>
      {categories.map(
        (category: BoardCategory): JSX.Element => (
          <BoardCategoryGroup category={category} key={category.id} />
        ),
      )}
    </>
  );
};

export default HomePage;
