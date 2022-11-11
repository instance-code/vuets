import { defineStore } from "pinia";

export const useControlStore = defineStore("control", {
  state: () => {
    return {
      driverLgSize: true as boolean,
    };
  },
});
