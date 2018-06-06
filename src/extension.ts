'use strict';
import * as vscode from 'vscode';
import { FilePath } from './filePath';
import { FilePathController } from './filePathController';
import { UserInteraction } from './userInteraction';

export function activate(context: vscode.ExtensionContext) {
	const filePath = new FilePath();
	const controller = new FilePathController(filePath);

	const disposable = vscode.commands.registerCommand('extension.openFolder', () => {
		const uri = vscode.Uri.parse(filePath.path);
		UserInteraction.manageUserInteraction(uri.toString());
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(controller);
	context.subscriptions.push(filePath);
}