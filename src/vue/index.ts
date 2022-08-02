import { App, Component, createApp } from "vue";
import { GanttPlugin } from "src/types";
import { useObsidianStore } from "src/store";
import { pinia } from "src/vue/pinia";
import Dummy from "src/components/Dummy.vue";

// (rootComponent: Component, rootProps?: Data | null) => App<HostElement>
export function createPiniaApp(plugin: GanttPlugin): App {
  const app = createApp(Dummy);

  app.use(pinia);

  const obStore = useObsidianStore();
  obStore.init(plugin);
  return app;
}
