<script setup lang="ts">
import { computed, onMounted, onBeforeMount } from "vue";
import { useControlStore } from "@/store/control";
import ContextComp from "@/components/ContextComp.vue";
import FileStoreService from "@/services/FileStoreService";
import MenuInterface from "@/types/MenuType";

const controlStore = useControlStore();
const driverLgSize: boolean = computed(
  (): boolean => controlStore.driverLgSize
);
// console.log(driverLgSize)
// lifecycle hooks
onBeforeMount(async () => {
  // const x = await getAll();
  // console.log(111, 2222);
});

onMounted(() => {
  window.addEventListener(
    "resize",
    function () {
      const el: HTMLElement | null = document.getElementById("context");
      if (el) el.style.display = "none";
    },
    false
  );
});

function onContextMenu (e: MouseEvent) {
  e.preventDefault();
  const winH = window.innerHeight;
  const winW: number = window.innerWidth;
  const menu: HTMLElement | null = document.getElementById("context");
  if (!menu) return;
  // Set the mouse position
  // Show menu

  const top = winH < e.y + menu.clientHeight ? winH - menu.clientHeight : e.y;
  const left = winW < e.x + menu.clientWidth ? winW - menu.clientWidth : e.x;
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.display = `block`;
}

function contextAction (menu: MenuInterface) {
  // console.log(menu)
}

async function getAll () {
  return await FileStoreService.getAll();
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">Home</div>
    </div>
  </div>
</template>
