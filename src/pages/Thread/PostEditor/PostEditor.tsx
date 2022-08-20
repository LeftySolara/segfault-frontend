import React, { useState } from "react";
import { Button, Paper, Title } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { useCreatePostMutation } from "services/post";
import usePostEditorStyles from "./PostEditor.styles";

interface PostEditorProps {
  authorId: string;
  threadId: string | undefined;
}

const PostEditor = (props: PostEditorProps) => {
  const { authorId, threadId } = props;
  const { classes } = usePostEditorStyles();
  const [content, setContent] = useState("");

  const [createPost] = useCreatePostMutation();

  const handleSubmit = async () => {
    if (!threadId) {
      return;
    }

    try {
      await createPost({ content, authorId, threadId });
      window.location.reload();
    } catch (err: unknown) {
      // TODO: Display the error to the user
      console.log(err);
    }
  };

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
      <Button
        className={classes["submit-button"]}
        type="button"
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default PostEditor;
