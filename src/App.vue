<script setup lang="ts">
import { computed } from "vue";
import { useLayoutStore } from "@/store/layout";
import TheNavbar from "@/components/TheNavbar.vue";
import TheSidebar from "@/components/TheSidebar.vue";

const layoutStore = useLayoutStore();

const fluid = computed<string>(() =>
  layoutStore.fluid ? "fluid" : "collapsed"
);
</script>

<template>
  <TheSidebar :fixed-class="fluid" />
  <TheNavbar :class="fluid" />

  <div class="main" :class="fluid">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
