import { PluginSettingTab } from "obsidian";
import { GanttPlugin, GanttSettings } from "src/gantt.type";
import { SettingsManager } from "./SettingsManager";

export interface SettingsManagerConfig {
  onSettingsChange: (newSettings: GanttSettings) => void;
}

export class GanttSettingsTab extends PluginSettingTab {
  plugin: GanttPlugin;
  settingsManager: SettingsManager;

  constructor(plugin: GanttPlugin, config: SettingsManagerConfig) {
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
