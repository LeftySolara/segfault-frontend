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
