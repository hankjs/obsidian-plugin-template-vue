import { App, Component, createApp } from "vue";
import { createPinia } from "pinia";
import { ObVuePlugin } from "../obsidian_vue.type";
import { useObsidianStore } from "./store";
import Dummy from "./components/Dummy.vue";

export const pinia = createPinia();

// (rootComponent: Component, rootProps?: Data | null) => App<HostElement>
export function createPiniaApp(plugin: ObVuePlugin): App {
  const app = createApp(Dummy);

  app.use(pinia);

  const obStore = useObsidianStore();
  obStore.init(plugin);
  return app;
}
