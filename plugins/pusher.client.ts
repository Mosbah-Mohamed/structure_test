// plugins/pusher.client.ts
// import Pusher from 'pusher-js'

// export default defineNuxtPlugin(() => {
//   const pusher = new Pusher('25c2544966750de03799', {
//     cluster: "mt1",
//     encrypted: true,
//   })

//   return {
//     provide: {
//       pusher,
//     },
//   }
// })
import Echo from "laravel-echo";
import Pusher from "pusher-js";

declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }
}

export default defineNuxtPlugin(() => {
  window.Pusher = Pusher;
  window.Echo = new Echo({
    broadcaster: "pusher",
    key: "25c2544966750de03799",
    cluster: "mt1",
    ncrypted: true,
  });
});