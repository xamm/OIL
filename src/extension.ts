'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { FilePath } from './filePath';
import { FilePathController } from './filePathController';
import { FileExplorerHandler } from './explorerHandler';
export function activate(context: vscode.ExtensionContext) {

	const filePath = new FilePath();
	const controller = new FilePathController(filePath);

	const disposable = vscode.commands.registerCommand('extension.openFolder', () => {
		const uri = vscode.Uri.parse(filePath.path);
		FileExplorerHandler.openFolder(filePath.path);
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(controller);
	context.subscriptions.push(filePath);
}