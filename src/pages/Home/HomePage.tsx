import React, { useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";

import { useGetBoardsQuery } from "services/board";
import type { Board, GetBoardsResponse } from "services/board";

import BoardCategoryGroup from "./BoardCategoryGroup/BoardCategoryGroup";

interface MappedBoard {
  id: string;
  topic: string;
  description: string;
  threadCount: number;
}

interface BoardGroup {
  category: string;
  boards: Array<MappedBoard>;
}

const sampleBoardCategories = [
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

const sampleBoards = [
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
  const { data: fetchedBoards, isLoading } = useGetBoardsQuery();
  let groupedBoards: Array<BoardGroup>;

  /**
   * Group boards based on their categories.
   *
   * @param boards An array of board objects to group
   *
   * @returns An object containing the boards grouped by category
   */
  const groupBoardsByCategory = (boards: Array<Board>) => {
    // Get a set of board categories
    const boardCategories: Array<string> = [];
    boards.forEach((board) => {
      boardCategories.push(board.category.topic);
    });
    const categories = [...new Set(boardCategories)];

    // Group boards based on their categories
    const boardGroups: Array<BoardGroup> = [];
    categories.forEach((category) => {
      const categoryBoards = boards
        .filter((board) => board.category.topic === category)
        .map((board) => {
          return {
            id: board.id,
            topic: board.topic,
            description: board.description,
            threadCount: board.threads.length,
          };
        });
      boardGroups.push({ category, boards: categoryBoards });
    });

    return boardGroups;
  };

  useEffect(() => {
    if (fetchedBoards) {
      groupedBoards = groupBoardsByCategory(fetchedBoards.boards);
    }
  }, [fetchedBoards]);

  /*
  const matchBoardsToCategories = () => {
    let categoryBoards;
    let boardCategory;

    const categories: Array<BoardCategory> = [];

    sampleBoardCategories.forEach((category) => {
      categoryBoards = sampleBoards
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

      // categories.push(boardCategory);
    });

    return categories;
  };
*/
  // const categories = matchBoardsToCategories();

  return (
    <div>
      <LoadingOverlay visible={isLoading} />
    </div>
  );
};

export default HomePage;
