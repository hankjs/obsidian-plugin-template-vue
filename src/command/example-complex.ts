import { MarkdownView, Plugin, Editor } from "obsidian";

// This adds a complex command that can check whether the current state of the app allows execution of the command
export function exampleComplexCommand(plugin: Plugin) {
  // This adds an editor command that can perform some operation on the current editor instance
  plugin.addCommand({
    id: "sample-editor-command",
    name: "Sample editor command",
    editorCallback: (editor: Editor, view: MarkdownView) => {
      console.log(editor.getSelection());
      editor.replaceSelection("Sample Editor Command");
    },
  });
}
