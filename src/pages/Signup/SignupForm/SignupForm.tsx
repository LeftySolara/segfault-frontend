import React, { useState } from "react";

import {
  Box,
  Button,
  createStyles,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import signupUser from "api/user";

interface FormValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const useStyles = createStyles((theme) => ({
  "form-container": {
    width: "640px",
    height: "768px",
    maxWidth: "640px",
    maxHeight: "768px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `10px 10px 20px ${theme.colors["cool-grey"][3]}`,
    borderRadius: "20px",
  },
  form: {
    width: "396px",
  },
  button: {
    width: "128px",
    height: "55px",
    color: theme.colors.purple[0],
    backgroundColor: theme.colors.purple[4],
    borderRadius: 50,
  },
  "text-input": {
    width: "100%",
    height: "64px",
    marginBottom: "48px",
    backgroundColor: theme.colors["cool-grey"][0],
    border: "none",
    borderRadius: "10px",
    boxShadow: `3px 3px 5px ${theme.colors["cool-grey"][2]}`,
  },
}));

const SignupForm = (): JSX.Element => {
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (values: FormValues) => {
    const response = await signupUser(
      values.username,
      values.email,
      values.password,
      values.confirmPassword,
    );

    if (response && response.status !== 201) {
      setErrorMsg(response.data.message);
    } else {
      setErrorMsg("");
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          value,
        )
          ? null
          : "Password does not meet minimum requirements",
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords must match" : null,
    },
  });

  const { classes } = useStyles();

  return (
    <Box className={classes["form-container"]}>
      <form
        className={classes.form}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          classNames={{ input: classes["text-input"] }}
          {...form.getInputProps("email")}
        />
        <TextInput
          required
          label="Username"
          placeholder="myusername"
          classNames={{ input: classes["text-input"] }}
          {...form.getInputProps("username")}
        />
        <PasswordInput
          required
          label="Password"
          placeholder="password"
          classNames={{ input: classes["text-input"] }}
          {...form.getInputProps("password")}
        />
        <PasswordInput
          required
          label="Confirm Password"
          placeholder="confirm password"
          classNames={{ input: classes["text-input"] }}
          {...form.getInputProps("confirmPassword")}
        />

        <Group position="right" mt="md">
          <Button type="submit" className={classes.button}>
            Sign Up
          </Button>
        </Group>
      </form>
      {errorMsg && <p>{errorMsg}</p>}
    </Box>
  );
};

export default SignupForm;
