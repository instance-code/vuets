import type RouterContextType from "@/types/RouterContextType";
export default (context: RouterContextType) => {
  try {
    context.next();
  } catch (error) {}
};
