import { Plugin } from "obsidian";
import { App } from "vue";

import { createPiniaApp } from "src/vue";

import { DEFAULT_SETTINGS } from "./default_settings";
import { ISetting } from "./obsidian_vue.type";
import { ObVueSettingsTab } from "./setting/Setting";

import { exampleStatusBar } from "./status-bar/example";
import { exampleCommand } from "./command/example";
import { exampleComplexCommand } from "./command/example-complex";
import { exampleEditorCommand } from "./command/example-editor";
import { exampleRibbon } from "./ribbon/example";
import { useDefaultSettingStore } from "./vue/store";

export default class ObsidianVueTemplate extends Plugin implements ISetting {
  settingsTab!: ObVueSettingsTab;
  settingsStore!: ReturnType<typeof useDefaultSettingStore>;
  dummyVueApp!: App;
  basePath!: string;

  get settings() {
    return this.settingsStore.settings;
  }

  set settings(newSetting: any) {
    this.settingsStore.reset(newSetting);
  }

  async onload() {
    this.dummyVueApp = createPiniaApp(this);
    this.settingsStore = useDefaultSettingStore();

    await this.loadSettings();

    this.settingsTab = new ObVueSettingsTab(this, {
      onSettingsChange: async (newSettings) => {
        this.settings = newSettings;
        await this.saveSettings();
      },
    });

    exampleRibbon(this);
    exampleStatusBar(this);

    exampleCommand(this);
    exampleComplexCommand(this);
    exampleEditorCommand(this);
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
