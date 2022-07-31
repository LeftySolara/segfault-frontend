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

import { useAppDispatch } from "hooks/reduxHooks";
import { ApiError } from "services/api";
import { useLoginMutation } from "services/auth";
import { setCredentials } from "store/authentication/authentication.slice";

import useFormStyles from "./LoginForm.styles";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const [error, setError] = useState<ApiError>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (formValues: FormValues) => {
    let user;
    try {
      user = await login(formValues).unwrap();
      dispatch(setCredentials({ user }));
      navigate("/", { replace: false });
    } catch (err: unknown) {
      setError(err as ApiError);
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { classes } = useFormStyles();

  return (
    <Box className={classes["form-container"]}>
      <LoadingOverlay visible={isLoading} />
      <form
        className={classes.form}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <TextInput
          required
          id="email-input"
          name="email-input"
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
          {...form.getInputProps("email")}
        />
        <PasswordInput
          required
          id="password-input"
          name="password-input"
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
        <Group position="apart" mt="md">
          <Link to="/signup" className={classes.link}>
            Sign up Instead
          </Link>
          <Button type="submit" className={classes.button}>
            Log In
          </Button>
        </Group>
      </form>
      {error && (
        <Text className={classes.error}>
          {error.data ? error.data.message : "An unknown error occurred."}
        </Text>
      )}
    </Box>
  );
};

export default LoginForm;
