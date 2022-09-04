import { PluginSettingTab } from "obsidian";
import { ObVuePlugin, ObVueSettings } from "../obsidian_vue.type";
import { SettingsManager } from "./SettingsManager";

export interface SettingsManagerConfig {
  onSettingsChange: (newSettings: ObVueSettings) => void;
}

export class ObVueSettingsTab extends PluginSettingTab {
  plugin: ObVuePlugin;
  settingsManager: SettingsManager;

  constructor(plugin: ObVuePlugin, config: SettingsManagerConfig) {
    super(plugin.app, plugin);
    this.plugin = plugin;
    this.settingsManager = new SettingsManager(plugin, config, plugin.settings);
  }

  display() {
    const { containerEl } = this;

    containerEl.empty();

    this.settingsManager.constructUI(containerEl);
  }
}
