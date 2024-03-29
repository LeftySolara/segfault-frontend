import React from "react";
import { Button, Breadcrumbs, Text } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useGetBoardByIdQuery } from "services/board";
import { useAppSelector } from "hooks/reduxHooks";
import { selectCurrentUser } from "store/auth/auth.slice";
import ThreadList from "./ThreadList/ThreadList";

import useBoardPageStyles from "./BoardPage.styles";

const BoardPage = () => {
  const { id } = useParams();
  const { classes } = useBoardPageStyles();
  const user = useAppSelector(selectCurrentUser);

  const { data: fetchedBoard } = useGetBoardByIdQuery({ id });

  const crumbs = [
    { title: "Index", href: "/" },
    {
      title: fetchedBoard?.board.topic ? `${fetchedBoard.board.topic}` : "",
      href: `/board/${id}`,
    },
  ].map((item, index) => {
    return (
      <Text component={Link} to={item.href} key={index === 0 ? 0 : id}>
        {item.title}
      </Text>
    );
  });

  return (
    <div>
      <div className={classes.header}>
        <Breadcrumbs className={classes.anchor}>{crumbs}</Breadcrumbs>
        <Button
          component={Link}
          to={user ? `/board/${id}/newThread` : "/login"}
        >
          New Thread
        </Button>
      </div>
      {id && <ThreadList boardId={id} />}
    </div>
  );
};

export default BoardPage;
