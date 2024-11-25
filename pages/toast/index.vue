<template>
  <div>
    <button @click="showToast">Show Toast</button>
    <button @click="showToastSuccess">Show Toast</button>

    <div class="bg-primary w-[200px] h-[200px] mt-[700px]" data-aos="fade-up">
      data aos
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";

const toast = useToast();

function showToast() {
  toast.error("I'm a toast!", {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
}

function showToastSuccess() {
  toast.success("I'm a toast!", {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
}
</script>
