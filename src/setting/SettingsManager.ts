import update, { Spec } from "immutability-helper";
import { App } from "obsidian";
import { createApp } from "vue";
import { DEFAULT_SETTINGS } from "src/default-settings";
import { GanttPlugin, GanttSettings } from "src/gantt.type";
import { SettingsManagerConfig } from "./Setting";
import Hello from "src/components/Hello.vue";

export class SettingsManager {
  app: App;
  plugin: GanttPlugin;
  config: SettingsManagerConfig;
  settings: GanttSettings;
  applyDebounceTimer: number = 0;

  constructor(
    plugin: GanttPlugin,
    config: SettingsManagerConfig,
    settings: GanttSettings
  ) {
    this.app = plugin.app;
    this.plugin = plugin;
    this.config = config;
    this.settings = settings;
  }

  applySettingsUpdate(spec: Spec<GanttSettings>) {
    clearTimeout(this.applyDebounceTimer);

    this.applyDebounceTimer = window.setTimeout(() => {
      this.settings = update(this.settings, spec);
      this.config.onSettingsChange(this.settings);
    }, 200);
  }

  getSetting(key: keyof GanttSettings) {
    return this.settings[key];
  }

  getDefaultSetting(key: keyof GanttSettings) {
    return DEFAULT_SETTINGS[key];
  }

  constructUI(containerEl: HTMLElement): void {
    containerEl.empty();

    containerEl.createEl("h2", { text: "Settings for Gantt plugin." });

    this.uiGanttSettings(containerEl);
  }

  uiGanttSettings(containerEl: HTMLElement) {
    createApp(Hello).mount(containerEl);
  }
}
