import React, { FormEvent, useState } from "react";
import { Button, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";

const NewThreadForm = () => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`topic: ${topic}\nmessage: ${message}`);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextInput
        required
        id="topic-input"
        name="topic-input"
        type="text"
        label="Topic"
        onChange={(e) => setTopic(e.target.value)}
      />
      <RichTextEditor value={message} onChange={setMessage} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewThreadForm;
