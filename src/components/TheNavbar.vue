<script setup lang="ts">
import { ref, computed } from "vue";
import { useControlStore } from "@/store/control";

const controlStore = useControlStore();
const navbarBurgerToggled = ref(false);
const driverLgSize = computed<boolean>(() => controlStore.driverLgSize);

function toggleNavbar(setValue?: boolean) {
  navbarBurgerToggled.value = setValue ?? !navbarBurgerToggled.value;
}

function setDriverSize() {
  controlStore.$patch({ driverLgSize: !controlStore.$state.driverLgSize });
  // await nextTick();
}
</script>

<template>
  <nav class="navbar">NAVBAR</nav>
</template>
