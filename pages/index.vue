<template>
  <div>

    <Button label="test button" class="main_btn" />

    <!-- <div class="card flex flex-wrap justify-center gap-4"> -->
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="value1" placeholder="Search" />
    </IconField>

    <IconField>
      <InputText v-model="value2" variant="filled" />
      <InputIcon class="pi pi-spin pi-spinner" />
    </IconField>
    <!-- </div> -->

    <LazySection1 />
    <LazySection2 />
    <LazySection3 />
    <LazySection4 />
    <LazySection5 />

    <!-- add seo tags -->

    <!-- <Head>
      <Title>index page</Title>
      <Meta name="description" :content="'index page'" />
    </Head> -->

    <!-- add seo tags -->

    <h1>index.vue</h1>

    <!-- <MainHeader /> -->

    <h2>================== start nuxt link config =============</h2>
    <ul class="flex gap-4">
      <li>
        <NuxtLink :to="localePath(`/products/1`)">Products</NuxtLink>
      </li>
      <li>
        <!-- <NuxtLink :to="{ name: 'about', params: { user: 'mmm' } }">about</NuxtLink> -->
        <NuxtLink to="about">about</NuxtLink>
      </li>
      <li>
        <NuxtLink to="mode" target="_blank">mode</NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://www.google.com" target="_blank">google</NuxtLink>
      </li>
      <li>
        <CustomLink to="/about">custom link</CustomLink>
      </li>
    </ul>

    <h2>================== use utils from utils folder =============</h2>

    <!-- <p>{{ FormatDate(new Date()) }}</p> -->

    <h2>================== start composables =============</h2>

    <p>{{ user }}</p>
    <p>{{ student }}</p>
    <p>{{ cart }}</p>
    <p>use state : {{ reward }}</p>

    <button @click="increment">increment</button>

    <h2>================== start pinia =============</h2>

    <p>{{ store.count }}</p>
    <button @click="store.increment">increment</button>

    <h2>===================== i18n ====================</h2>

    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('ar')">Arabic</NuxtLink>

    <NuxtLink :to="localePath('/about')">about </NuxtLink>

    <NuxtLink :to="localePath('/mode')">mode </NuxtLink>

    <NuxtLink :to="localePath('/toast')">toast </NuxtLink>

    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between"
    >
      <div>لمّا كان الاعتراف بالكرامة المتأصلة في جميع
      </div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
      <div>07</div>
      <div>08</div>
      <div>09</div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "~~/store/counter";
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
// start composables

const user = useUser();
const student = useStudent();
const cart = useCart();
const reward = useReward();

const store = useCounterStore();

const increment = () => {
  reward.value++;
};

// definePageMeta({
//     layouts: 'default'
// })

// add seo tags and head config

// seo tags when share page in social the shape of its appearing

useSeoMeta({
  title: "index vue",
  ogTitle: "",
  description: "",
  ogDescription: "",
});

// for use dynamic data seo

// useSeoMeta({
//   title: () => product.value?.name,
//   description: () => product.value?.short_description,
//   ogTitle: () => product.value?.name,
//   ogDescription: () => product.value?.short_description,
// });

// useServerSeoMeta({
//     title: 'index vue',
//     ogTitle: '',
//     description: '',
//     ogDescription: '',
//     ogImage: '',
//     twitterCard: 'summary_large_image'

// })

// useHead({
//     title: 'index page',
//     meta: [
//         { name: 'index', content: 'iam in index page' }
//     ],
//     link: [
//         { rel: "icon", type: "image/x-icon", href: "" },
//         { rel: "stylesheet", href: "" },
//     ],
//     style: [],
//     noscript: [],

// })

// const { data: products } = await useFetch(
//   "https://www.fakestoreapi.com/products"
// );

// console.log(products);
</script>

<style lang="scss" scoped>
.router-link-active {
  color: brown;
}
</style>
