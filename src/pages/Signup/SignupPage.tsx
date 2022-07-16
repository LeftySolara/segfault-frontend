import React from "react";
import { Box, Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import signupUser from "api/user";

interface FormValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const SampleForm = (): JSX.Element => {
  const handleSubmit = async (values: FormValues) => {
    const res = await signupUser(
      values.username,
      values.email,
      values.password,
      values.confirmPassword,
    );

    console.log(res.data);
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
          : "Invalid password. Password must contain at least eight characters, one letter, one number, and one special character.",
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords must match" : null,
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          required
          label="Username"
          placeholder="myusername"
          {...form.getInputProps("username")}
        />
        <PasswordInput
          required
          label="Password"
          placeholder="password"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          required
          label="Confirm Password"
          placeholder="confirm password"
          {...form.getInputProps("confirmPassword")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

const SignupPage = (): JSX.Element => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SampleForm />
    </div>
  );
};

export default SignupPage;
