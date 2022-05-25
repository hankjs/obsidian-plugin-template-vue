import { setIcon } from "obsidian";
import { Directive } from "vue";

export const icon: Directive = {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(parent: HTMLElement, binding: any) {
    const { value: iconId } = binding;
    setIcon(parent, iconId);
  },
};
