import { Plugin } from "obsidian";

// This creates an icon in the left ribbon.
export function exampleStatusBar(plugin: Plugin) {
  // This adds a status bar item to the bottom of the app. Does not work on mobile apps.
  const statusBarItemEl = plugin.addStatusBarItem();
  statusBarItemEl.setText("Example StatusBar");
}
