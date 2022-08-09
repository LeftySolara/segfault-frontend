import React from "react";
import { Title } from "@mantine/core";

import useCategoryTitleStyles from "./BoardCategoryTitle.styles";

interface CategoryTitleProps {
  text: string;
}

const BoardCategoryTitle = (props: CategoryTitleProps) => {
  const { text } = props;
  const { classes } = useCategoryTitleStyles();

  return (
    <Title order={3} className={classes["category-title"]}>
      {text}
    </Title>
  );
};

export default BoardCategoryTitle;
