import { MarkdownView, Plugin } from "obsidian";
import { SampleModal } from "src/modal/SampleModal";

// This adds a complex command that can check whether the current state of the app allows execution of the command
export function exampleEditorCommand(plugin: Plugin) {
  plugin.addCommand({
    id: "open-sample-modal-complex",
    name: "Open sample modal (complex)",
    checkCallback: (checking: boolean) => {
      // Conditions to check
      const markdownView =
        plugin.app.workspace.getActiveViewOfType(MarkdownView);
      if (markdownView) {
        // If checking is true, we're simply "checking" if the command can be run.
        // If checking is false, then we want to actually perform the operation.
        if (!checking) {
          new SampleModal(plugin.app).open();
        }

        // This command will only show up in Command Palette when the check function returns true
        return true;
      }
    },
  });
}
