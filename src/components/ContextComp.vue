<script setup lang="ts">
import { reactive, computed } from "vue";
import vClickOutside from "@/plugins/directives/clickOutside";
import MenuInterface from "@/types/MenuType";

interface Props {
  target?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  target: () => ["preview", "upload"],
});

defineEmits<{(e: "contextAction", menu: MenuInterface): void }>();

const menus: MenuInterface[] = reactive([
  {
    key: "preview",
    icon: "i-eye",
    label: "Preview",
    divider: false,
    show: computed<boolean>(() => !props.target.includes("preview")),
  },
  {
    key: "newFolder",
    icon: "i-folder-open",
    label: "New folder",
    divider: true,
    show: computed<boolean>(() => !props.target.includes("newFolder")),
  },
  {
    key: "upload",
    icon: "i-upload",
    label: "Upload",
    divider: false,
    show: computed<boolean>(() => !props.target.includes("upload")),
  },
  {
    key: "download",
    icon: "i-download",
    label: "Download",
    divider: true,
    show: computed<boolean>(() => !props.target.includes("download")),
  },
  {
    key: "rename",
    icon: "i-document-edit",
    label: "Rename",
    divider: false,
    show: computed<boolean>(() => !props.target.includes("rename")),
  },
  {
    key: "getLink",
    icon: "i-link",
    label: "Get link",
    divider: false,
    show: computed<boolean>(() => !props.target.includes("getLink")),
  },
  {
    key: "moveTo",
    icon: "i-exit",
    label: "Move to",
    divider: false,
    show: computed<boolean>(() => !props.target.includes("moveTo")),
  },
  {
    key: "viewDetails",
    icon: "i-information",
    label: "View details",
    divider: true,
    show: computed<boolean>(() => !props.target.includes("viewDetails")),
  },
  {
    key: "remove",
    icon: "i-trash",
    label: "Remove",
    divider: true,
    show: computed<boolean>(() => !props.target.includes("remove")),
  },
]);

const menuDisplays = computed<MenuInterface[]>(() => {
  return menus.filter((menu) => menu.show);
});

function onContextMenu (event: Event) {
  event.preventDefault();
  event.stopPropagation();
}

function contextHide () {
  const el: HTMLElement | null = document.getElementById("context");
  if (el) el.style.display = "none";
}
</script>

<template>
  <div
    id="context"
    ref="context"
    v-click-outside="contextHide"
    class="context"
    @contextmenu="onContextMenu($event)"
  >
    <ul class="list-group">
      <li
        v-for="menu in menuDisplays"
        class="list-group-item"
        :class="{ 'border-bottom': menu.divider }"
        aria-current="true"
      >
        <a
          href="#"
          class="list-group-item-action"
          aria-current="true"
          @click.prevent="$emit('contextAction', menu)"
        >
          <i class="me-2" :class="menu.icon"></i> {{ menu.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables";
$spacer: 1;
.context {
  position: fixed;
  box-shadow: 0 10px 40px 10px rgb(0 0 0 / 10%);
  transition: opacity 0.2s ease-in-out;
  opacity: 1;
  min-width: 260px;
  .list-group-item {
    border-color: transparent;
    padding: 0;
    > a {
      text-decoration: none;
      padding: 0.5rem 1.25rem;
      display: block;
      white-space: nowrap;
    }
  }
}
</style>
