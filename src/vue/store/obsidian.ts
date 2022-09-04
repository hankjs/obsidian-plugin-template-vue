import { defineStore } from "pinia";
import { App } from "obsidian";
import { ObVuePlugin } from "../../obsidian_vue.type";

export interface ObsidianState {
  app: App;
  plugin: ObVuePlugin;
}

export const useObsidianStore = defineStore("obsidian", {
  state: () =>
    ({
      app: null as any,
      plugin: null as any,
    } as ObsidianState),
  actions: {
    init(plugin: ObVuePlugin) {
      if (plugin === this.$state.plugin) {
        return;
      }

      this.plugin = plugin;
      this.app = plugin.app;
    },
  },
});
