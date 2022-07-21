import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Group,
  LoadingOverlay,
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
  const [loading, setLoading] = useState<boolean>(false);
  const [usernameInUse, setUsernameInUse] = useState<boolean>(false);
  const [emailInUse, setEmailInUse] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    const response = await signupUser(
      values.username,
      values.email,
      values.password,
      values.confirmPassword,
    );
    setLoading(false);

    // TODO: Find a way to do this that doesn't rely on specific message content
    if (response && response.status !== 201) {
      if (
        response.data.message.includes("Email") &&
        response.data.message.includes("already in use")
      ) {
        setEmailInUse(true);
      }
      if (
        response.data.message.includes("Username") &&
        response.data.message.includes("already in use")
      ) {
        setUsernameInUse(true);
      }
    } else if (response && response.status === 201) {
      navigate("/", { replace: false });
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
      <LoadingOverlay visible={loading} />
      <form
        className={classes.form}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <TextInput
          required
          type="email"
          label="Email"
          placeholder="your@email.com"
          classNames={{
            input: classes["text-input"],
            label: classes.label,
            required: classes.asterisk,
            error: classes.error,
            invalid: classes["text-input"],
          }}
          error={emailInUse ? "Email address already in use" : undefined}
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
            invalid: classes["text-input"],
          }}
          error={usernameInUse ? "Username already in use" : undefined}
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
            invalid: classes["text-input"],
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
            invalid: classes["text-input"],
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
    </Box>
  );
};

export default SignupForm;
