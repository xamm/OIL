'use strict';
import * as vscode from 'vscode';
export class ConfigurationHandler {

	private static getBooleanSettingValue(settingName: string): boolean {
		const setting: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('showFileExtension');
		if (!setting) {
			return false;
		}
		const settingValue: boolean | undefined = setting.get(settingName);
		if (!settingValue) {
			return false;
		}
		return settingValue;
	}

	public static shouldCopyWithoutFilename(): boolean {
		return this.getBooleanSettingValue('copyWithoutFilename');
	}

	public static shouldCopyToClipboard(): boolean {
		return this.getBooleanSettingValue('copyPathToClipBoard');
	}
}