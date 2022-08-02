import { Plugin } from "obsidian";

export interface TapMap {}

export interface ObVueSettings {}

export interface ISetting {
  settings: ObVueSettings;

  loadSettings: () => any;
  saveSettings: () => any;
}

export type ObVuePlugin = Plugin & ISetting;
