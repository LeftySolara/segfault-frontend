import React, { FormEvent, useState } from "react";
import { Button, Text, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import useNewThreadFormStyles from "./NewThreadForm.styles";

const NewThreadForm = () => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const { classes } = useNewThreadFormStyles();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`topic: ${topic}\nmessage: ${message}`);
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
        <Button type="submit" className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewThreadForm;
