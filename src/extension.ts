import * as vscode from "vscode";

export function activate(_context: vscode.ExtensionContext) {
    const exts = vscode.workspace
        .getConfiguration("activator")
        .get<string[]>("activateOnStart", []);

    exts.map((extName) => {
        const ext = vscode.extensions.getExtension(extName);
        if (!ext) {
            return;
        }
        if (ext.isActive) {
            return;
        }
        return ext.activate();
    });
}
