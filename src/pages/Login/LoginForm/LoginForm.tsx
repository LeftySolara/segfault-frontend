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
import { login } from "store/authentication/authentication.slice";

import { loginUser } from "api/user";

import useFormStyles from "./LoginForm.styles";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    dispatch(login());
    const response = await loginUser(values.email, values.password);
    setLoading(false);

    if (response && response.status === 200) {
      navigate("/", { replace: false });
    } else if (response && response.data) {
      setError(response.data.message);
    } else {
      setError("Internal server error");
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
      <LoadingOverlay visible={loading} />
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
      {error && <Text className={classes.error}>{error}</Text>}
    </Box>
  );
};

export default LoginForm;
