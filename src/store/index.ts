import { StorageSerializers, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      fluid: true as boolean,
    };
  },
});
