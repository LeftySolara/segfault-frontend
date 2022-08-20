import React, { useState } from "react";
import { Button, Paper, Title } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import usePostEditorStyles from "./PostEditor.styles";

const PostEditor = () => {
  const { classes } = usePostEditorStyles();
  const [content, setContent] = useState("");

  return (
    <Paper className={classes.container}>
      <Title order={4} className={classes["header-text"]}>
        Quick Reply
      </Title>
      <RichTextEditor
        value={content}
        onChange={setContent}
        className={classes.editor}
      />
      <Button className={classes["submit-button"]} type="button">
        Submit
      </Button>
    </Paper>
  );
};

export default PostEditor;
