import React from "react";
import { Breadcrumbs, Text } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useGetBoardByIdQuery } from "services/board";
import ThreadList from "./ThreadList/ThreadList";

import useBoardPageStyles from "./BoardPage.styles";

const BoardPage = () => {
  const { id } = useParams();
  const { classes } = useBoardPageStyles();

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
      <Breadcrumbs className={classes.anchor}>{crumbs}</Breadcrumbs>
      {id && <ThreadList boardId={id} />}
    </div>
  );
};

export default BoardPage;
