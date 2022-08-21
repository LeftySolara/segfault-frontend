import React, { FormEvent, useState } from "react";
import { Button, Text, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "@mantine/rte";
import useNewThreadFormStyles from "./NewThreadForm.styles";

interface NewThreadFormProps {
  boardId: string;
}

const NewThreadForm = (props: NewThreadFormProps) => {
  const { boardId } = props;

  const navigate = useNavigate();
  const { classes } = useNewThreadFormStyles();

  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`topic: ${topic}\nmessage: ${message}`);
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
    </div>
  );
};

export default NewThreadForm;
