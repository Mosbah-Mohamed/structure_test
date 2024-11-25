<template>
    <div>
      <div class="flex flex-col gap-12">
        <div class="flex gap-6 flex-wrap">
          <div
            class="rounded-border p-4 border border-transparent flex items-center justify-center bg-primary hover:bg-primary-emphasis text-primary-contrast font-medium flex-auto transition-colors"
          >
            primary
          </div>
          <div
            class="rounded-border p-4 border border-transparent flex items-center justify-center bg-highlight hover:bg-highlight-emphasis font-medium flex-auto transition-colors"
          >
            highlight
          </div>
          <div
            class="rounded-border p-4 border border-surface flex items-center justify-center text-muted-color hover:text-color hover:bg-emphasis font-medium flex-auto transition-colors"
          >
            box
          </div>
        </div>
      </div>
  
      <Button label="Verify" />
  
      <!-- <Editor v-model="value" editorStyle="height: 320px" /> -->
  
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <strong>{{ slide }}</strong>
        </SwiperSlide>
      </Swiper>
  
  
      <!-- <Swiper
                  :slides-per-view="1"
                  :dir="rtl"
                  :navigation="{
                    nextEl: '#courses-swiper-button-intro-next',
                    prevEl: '#courses-swiper-button-intro-prev',
                  }"
                  :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
                  :pagination="{ clickable: true }"
                  :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }"
                  spaceBetween="35"
                  :breakpoints="{
                    '800': {
                      slidesPerView: 2,
                    },
                    '1200': {
                      slidesPerView: 3,
                    },
                    '1400': {
                      slidesPerView: 4,
                    },
                  }"
                >
                  <swiper-slide v-for="i in data" :key="i.id">
                    <CoursesBox
                      :info="i"
                      :type="type"
                      @get_favorite="get_favorite"
                      @add_to_card_loading="add_to_card_loading"
                    />
                  </swiper-slide>
  
                  <div
                    class="swiper-arrow swiper-button-intro-next"
                    id="courses-swiper-button-intro-next"
                  >
                    <i class="pi pi-angle-left"></i>
                  </div>
                  <div
                    class="swiper-arrow swiper-button-intro-prev"
                    id="courses-swiper-button-intro-prev"
                  >
                    <i class="pi pi-angle-right"></i>
                  </div>
                </Swiper> -->
  
    </div>
  </template>
  
  <script setup>
  
  import { ref } from "vue";
  
  const value = ref("");
  </script>
  