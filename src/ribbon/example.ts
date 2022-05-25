import { Notice, Plugin } from "obsidian";

// This creates an icon in the left ribbon.
export function exampleRibbon(plugin: Plugin) {
  const ribbonIconEl = plugin.addRibbonIcon(
    "dice",
    "Sample Plugin",
    (evt: MouseEvent) => {
      // Called when the user clicks the icon.
      new Notice("This is a notice!");
    }
  );

  // Perform additional things with the ribbon
  ribbonIconEl.addClass("my-plugin-ribbon-class");
  return ribbonIconEl;
}
