import React, { FormEvent, useState } from "react";
import { Button, Text, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "@mantine/rte";
import { useCreateThreadMutation } from "services/thread";
import useNewThreadFormStyles from "./NewThreadForm.styles";

interface NewThreadFormProps {
  boardId: string;
  authorId: string;
}

const NewThreadForm = (props: NewThreadFormProps) => {
  const { boardId, authorId } = props;

  const navigate = useNavigate();
  const { classes } = useNewThreadFormStyles();

  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [createThread] = useCreateThreadMutation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await createThread({
        topic,
        boardId,
        authorId,
        content: message,
      }).unwrap();
      navigate(`/board/${boardId}`, { replace: false });
      window.location.reload();
    } catch (err: unknown) {
      setError("An unknown error occurred");
    }
  };

  const handleCancel = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/board/${boardId}`, { replace: false });
  };

  return (
    <div className={classes.form}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          required
          id="topic-input"
          name="topic-input"
          type="text"
          label="Topic"
          onChange={(e) => setTopic(e.target.value)}
          className={classes["text-input"]}
          classNames={{
            label: classes.label,
            required: classes.asterisk,
            input: classes["inner-input"],
          }}
        />
        <Text className={classes.label}>Message</Text>
        <RichTextEditor
          value={message}
          onChange={setMessage}
          className={classes.rte}
        />
        <Button type="submit" className={classes["submit-button"]}>
          Submit
        </Button>
        <Button
          type="button"
          className={classes["cancel-button"]}
          variant="outline"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </form>
      {error && <Text>{error}</Text>}
    </div>
  );
};

export default NewThreadForm;
