import update, { Spec } from "immutability-helper";
import { App } from "obsidian";
import { createApp } from "vue";
import { DEFAULT_SETTINGS } from "src/default_settings";
import { ObVuePlugin, ObVueSettings } from "src/obsidian_vue.type";
import { SettingsManagerConfig } from "./Setting";
import Hello from "../vue/components/Hello.vue";

export class SettingsManager {
  app: App;
  plugin: ObVuePlugin;
  config: SettingsManagerConfig;
  settings: ObVueSettings;
  applyDebounceTimer: number = 0;

  constructor(
    plugin: ObVuePlugin,
    config: SettingsManagerConfig,
    settings: ObVueSettings
  ) {
    this.app = plugin.app;
    this.plugin = plugin;
    this.config = config;
    this.settings = settings;
  }

  applySettingsUpdate(spec: Spec<ObVueSettings>) {
    clearTimeout(this.applyDebounceTimer);

    this.applyDebounceTimer = window.setTimeout(() => {
      this.settings = update(this.settings, spec);
      this.config.onSettingsChange(this.settings);
    }, 200);
  }

  getSetting(key: keyof ObVueSettings) {
    return this.settings[key];
  }

  getDefaultSetting(key: keyof ObVueSettings) {
    return DEFAULT_SETTINGS[key];
  }

  constructUI(containerEl: HTMLElement): void {
    containerEl.empty();

    containerEl.createEl("h2", { text: "Settings for Vue plugin." });

    this.uiObVueSettings(containerEl);
  }

  uiObVueSettings(containerEl: HTMLElement) {
    createApp(Hello).mount(containerEl);
  }
}
