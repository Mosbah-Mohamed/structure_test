<template>
  <div>
    <div class="flex flex-row gap-[10px] flex-wrap" data-aos="fade-up">
      <div class="box bg-mediumGray h-[200px] mt-[700px] basis-1/4">box 1</div>
      <div class="box bg-mediumGray h-[200px] mt-[700px] basis-1/4">box 2</div>
      <div class="box bg-mediumGray h-[200px] mt-[700px] basis-1/2">box 3</div>
    </div>
  </div>

  <div class="flex ...">
    <div class="flex-none w-14 h-14 ...">01</div>
    <div class="grow h-14 ...">02</div>
    <div class="flex-none w-14 h-14 ...">03</div>
  </div>

  <div
    class="flex gap-[10px] flex-wrap items-center justify-center"
    data-aos="fade-up"
  >
    <div class="box bg-blue w-[400px] h-[200px]">box 1</div>
    <div class="box bg-blue w-[400px] h-[200px]">box 2</div>
    <div class="box bg-blue w-[400px] h-[200px]">box 3</div>
  </div>
</template>

<script setup lang="ts"></script>
