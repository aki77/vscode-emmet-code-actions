import * as vscode from 'vscode';
import { CodeAction, CodeActionKind, commands, workspace } from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const updateTag = new CodeAction(
    `Emmet: Update tag`,
    CodeActionKind.RefactorRewrite,
  );
  updateTag.command = {
    title: 'Emmet: Update tag',
    command: 'editor.emmet.action.updateTag',
  };

  const removeTag = new CodeAction(
    `Emmet: Remove tag`,
    CodeActionKind.RefactorRewrite,
  );
  removeTag.command = {
    title: 'Emmet: Remove tag',
    command: 'editor.emmet.action.removeTag',
  };

  const wrapTag = new CodeAction(
    `Emmet: Wrap tag`,
    CodeActionKind.RefactorRewrite,
  );
  wrapTag.command = {
    title: 'Emmet: Wrap tag',
    command: 'editor.emmet.action.wrapWithAbbreviation',
  };

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      workspace.getConfiguration().get('emmet-code-actions.languageIds', []),
      {
        provideCodeActions() {
          return [updateTag, wrapTag, removeTag];
        }
       },
      {
        providedCodeActionKinds: [CodeActionKind.RefactorRewrite]
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
