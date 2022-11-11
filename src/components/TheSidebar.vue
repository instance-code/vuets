<script setup lang="ts">
import { onMounted } from "vue";
import { Dropdown } from "~/bootstrap";

import { useLayoutStore } from "@/store/layout";

const props = defineProps<{
  fixedClass: string;
}>();
//
const layoutStore = useLayoutStore();
onMounted(() => {
  const elementExistMain: HTMLElement | null =
    document.getElementById("sidebar-scrollbar");
  if (elementExistMain) {
    Scrollbar.init(elementExistMain);
  }

  // Dropdown
  const dropdownElementList: Array<HTMLElement> = [].slice.call(
    document.querySelectorAll(".dropdown-toggle")
  );
  dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl);
  });
});

function setLayout() {
  layoutStore.$patch({ fluid: !layoutStore.$state.fluid });
}
</script>

<template>
  <div class="iq-sidebar sidebar-default" :class="props.fixedClass">
    SIDEBAR
  </div>
</template>
