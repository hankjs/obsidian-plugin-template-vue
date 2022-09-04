import { defineStore } from "pinia";
import { ObVueSettings } from "../../obsidian_vue.type";

export interface DefaultSettingState {
  settings: ObVueSettings;
}

export const useDefaultSettingStore = defineStore("defaultSetting", {
  state: () =>
    ({
      settings: null as any,
    } as DefaultSettingState),

  actions: {
    reset(settings: ObVueSettings) {
      this.settings = settings;
    },
  },
});
