import { Plugin } from "obsidian";
import { exampleCommand } from "./command/example";
import { exampleComplexCommand } from "./command/example-complex";
import { exampleEditorCommand } from "./command/example-editor";
import { exampleRibbon } from "./ribbon/example";
import { GanttSettingsTab } from "./setting/Setting";
import { DEFAULT_SETTINGS } from "./default-settings";
import { exampleStatusBar } from "./status-bar/example";
import { GanttSettings, IGantt } from "./gantt.type";

export default class Gantt extends Plugin implements IGantt {
  settingsTab!: GanttSettingsTab;
  settings!: GanttSettings;

  async onload() {
    await this.loadSettings();

    exampleRibbon(this);
    exampleStatusBar(this);

    exampleCommand(this);
    exampleComplexCommand(this);
    exampleEditorCommand(this);

    this.settingsTab = new GanttSettingsTab(this, {
      onSettingsChange: async (newSettings) => {
        this.settings = newSettings;
        await this.saveSettings();
      },
    });

    this.addSettingTab(this.settingsTab);
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
