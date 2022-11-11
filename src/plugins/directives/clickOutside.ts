import { DirectiveBinding, ObjectDirective } from "vue";

type ElementType = HTMLInputElement | HTMLTextAreaElement | HTMLElement;
type EventHandleType = (event: Event) => void;
interface ExtendedDirective extends ObjectDirective {
  handleClickEvent: EventHandleType;
}

export default {
  // handleClickEvent: (() => {}) as EventHandleType,
  mounted (el: ElementType, binding: DirectiveBinding) {
    const clickOutsize = binding.dir as ExtendedDirective;
    clickOutsize.handleClickEvent = (event: Event) => {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(<ElementType>event.target))) {
        // and if it did, call method provided in attribute value
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", clickOutsize.handleClickEvent);
  },
  beforeUnmount (element: ElementType, binding: DirectiveBinding) {
    const clickOutsize = binding.dir as ExtendedDirective;
    document.body.removeEventListener("click", clickOutsize.handleClickEvent);
  },
};
