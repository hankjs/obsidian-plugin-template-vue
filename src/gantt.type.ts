import { Plugin } from "obsidian";

export interface TapMap {}

export interface GanttSettings {}

export interface IGantt {
  settings: GanttSettings;

  loadSettings: () => any;
  saveSettings: () => any;
}

export type GanttPlugin = Plugin & IGantt;
