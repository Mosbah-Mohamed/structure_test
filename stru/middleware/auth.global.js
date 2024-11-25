export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = true;

  console.log(to.path);

  if (!isLogin && to.path !== "/login") {
    return navigateTo("/login");
  } else if (isLogin && to.path == "/login") {
    return navigateTo("/");
  }
});
