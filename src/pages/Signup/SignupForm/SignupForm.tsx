import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import signupUser from "api/user";

import useFormStyles from "./SignupForm.styles";

interface FormValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

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

  const { classes } = useFormStyles();

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
          classNames={{
            input: classes["text-input"],
            label: classes.label,
            required: classes.asterisk,
            error: classes.error,
          }}
          {...form.getInputProps("email")}
        />
        <TextInput
          required
          label="Username"
          placeholder="my_username"
          classNames={{
            input: classes["text-input"],
            label: classes.label,
            required: classes.asterisk,
            error: classes.error,
          }}
          {...form.getInputProps("username")}
        />
        <PasswordInput
          required
          label="Password"
          classNames={{
            innerInput: classes["text-input"],
            input: classes["text-input"],
            label: classes.label,
            required: classes.asterisk,
            error: classes.error,
          }}
          {...form.getInputProps("password")}
        />
        <Text className={classes["password-rules"]}>
          Must be at least 8 characters and include a mix of letters, numbers,
          and symbols
        </Text>
        <PasswordInput
          required
          label="Confirm Password"
          classNames={{
            innerInput: classes["text-input"],
            input: classes["text-input"],
            label: classes.label,
            required: classes.asterisk,
            error: classes.error,
          }}
          {...form.getInputProps("confirmPassword")}
        />

        <Group position="apart" mt="md">
          <Link to="/login" className={classes.link}>
            Log in Instead
          </Link>
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
