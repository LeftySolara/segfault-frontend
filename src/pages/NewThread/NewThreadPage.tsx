import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Title } from "@mantine/core";
import { useAppSelector } from "hooks/reduxHooks";
import { selectCurrentUser } from "store/auth/auth.slice";
import NewThreadForm from "./NewThreadForm/NewThreadForm";
import useNewThreadPageStyles from "./NewThreadPage.styles";

const NewThreadPage = () => {
  const { classes } = useNewThreadPageStyles();
  const { id } = useParams();

  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  if (!id) {
    return (
      <div>
        <Text className={classes.title}>Board not found</Text>
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <Title order={1} className={classes.title}>
          Post New Thread
        </Title>
        <NewThreadForm boardId={id} authorId={user.id} />
      </div>
    );
  }

  navigate("/login", { replace: false });
  return null;
};

export default NewThreadPage;
