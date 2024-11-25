export default defineEventHandler(async (event) => {
  // handle query parameter
  const { name } = useQuery(event);

  // handle method post

  const { age } = await useBody(event);

  return {
    message: `Hello ${name} your age is${age}`,
  };
});
