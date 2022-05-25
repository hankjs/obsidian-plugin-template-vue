import { Plugin } from "obsidian";
import { SampleModal } from "src/modal/SampleModal";

// This adds a simple command that can be triggered anywhere
export function exampleCommand(plugin: Plugin) {
  plugin.addCommand({
    id: "open-sample-modal-simple",
    name: "Open sample modal (simple)",
    callback: () => {
      new SampleModal(plugin.app).open();
    },
  });
}
