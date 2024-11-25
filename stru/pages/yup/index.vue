<template>
  <div>
    <h1>Registration Form</h1>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="name">Name</label>
        <Field name="name" as="input" type="text" id="name" />
        <ErrorMessage name="name" />
      </div>

      <div>
        <label for="email">Email</label>
        <Field name="email" as="input" type="email" id="email" />
        <ErrorMessage name="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <Field name="password" as="input" type="password" id="password" />
        <ErrorMessage name="password" />
      </div>

      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const onSubmit = (values: FormValues) => {
  console.log("Form submitted with values:", values);
};
</script>

<style scoped>
div {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
}
button {
  padding: 0.5rem 1rem;
}
</style>
