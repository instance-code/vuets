import { shallowMount, mount } from "@vue/test-utils"
import { describe, test, expect } from "vitest"

import { createTestingPinia } from "@pinia/testing"
import { useLayoutStore } from "@/store/layout"

import TheSidebar from "@/components/TheSidebar.vue"

describe("TheSidebar.vue", () => {
  test("renders correct style for error", () => {
    const fixedClass = ""
    const wrapper = shallowMount(TheSidebar, {
      props: { fixedClass },
      global: {
        plugins: [createTestingPinia()]
      }
    })

    const store = useLayoutStore() // uses the testing pinia!

    // state can be directly manipulated
    store.fluid = false
    // can also be done through patch
    store.$patch({ fluid: false })
    expect(store.fluid).toBe(false)
    // expect(wrapper.text()).toBe('OK');
  })
})
