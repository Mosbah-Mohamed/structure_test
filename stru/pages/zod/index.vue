<script lang="ts" setup>
import { ref } from "vue";
import { z } from "zod";

// Define a Zod schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// Form state
const formData = ref({
  name: "",
  email: "",
  password: "",
});

const errors = ref<{ [key: string]: string }>({});

// Handle form submission
const handleSubmit = () => {
  const result = formSchema.safeParse(formData.value);
  if (!result.success) {
    // Populate errors if validation fails
    errors.value = result.error.flatten().fieldErrors;
  } else {
    // Process the form (e.g., send data to an API)
    console.log("Form submitted successfully:", result.data);
    errors.value = {};
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="formData.name" type="text" />
      <p v-if="errors.name">{{ errors.name[0] }}</p>
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="formData.email" type="email" />
      <p v-if="errors.email">{{ errors.email[0] }}</p>
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password" v-model="formData.password" type="password" />
      <p v-if="errors.password">{{ errors.password[0] }}</p>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
/* Add your styles here */
p {
  color: red;
  font-size: 0.9em;
}
</style>
