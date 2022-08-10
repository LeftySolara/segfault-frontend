import React, { useEffect, useState } from "react";
import { LoadingOverlay } from "@mantine/core";

import { useGetBoardsQuery } from "services/board";
import type { Board } from "services/board";

import BoardGroup from "./BoardGroup/BoardGroup";
import RecentThreads from "./RecentThreads/RecentThreads";

import useHomePageStyles from "./HomePage.styles";

interface MappedBoard {
  id: string;
  topic: string;
  description: string;
  threadCount: number;
}

interface MappedBoardGroup {
  category: string;
  boards: Array<MappedBoard>;
}

const HomePage = (): JSX.Element => {
  const { classes } = useHomePageStyles();
  const { data: fetchedBoards, isLoading } = useGetBoardsQuery();
  const [groupedBoards, setGroupedBoards] =
    useState<Array<MappedBoardGroup> | null>([]);

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
    const boardGroups: Array<MappedBoardGroup> = [];
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
      setGroupedBoards(groupBoardsByCategory(fetchedBoards.boards));
    }
  }, [fetchedBoards]);

  return (
    <div className={classes["content-container"]}>
      <LoadingOverlay visible={isLoading} />
      <div className={classes["board-group-container"]}>
        {groupedBoards &&
          groupedBoards.map((boardGroup) => (
            <BoardGroup
              category={boardGroup.category}
              boards={boardGroup.boards}
            />
          ))}
      </div>
      <RecentThreads />
    </div>
  );
};

export default HomePage;
