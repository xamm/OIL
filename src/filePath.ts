import { StatusBarItem, window, StatusBarAlignment, TextDocument } from 'vscode';

export class FilePath {

	private statusBarItem: StatusBarItem | null = null;
	public path: string = '';

	public updateFilePath() {

		const editor = window.activeTextEditor;
		if (!editor) {
			this.getStatusBarItemInstance().hide();
			return;
		}

		const doc = editor.document;
		this.path = this.getFilePath(doc);

		this.fillStatusBarItem(this.path);
		this.getStatusBarItemInstance().show();

	}

	private fillStatusBarItem(filePath: string): void {
		this.getStatusBarItemInstance().text = filePath ? `$(link-external) ` + filePath : '';
		this.getStatusBarItemInstance().command = 'extension.openFolder';
	}

	public getFilePath(doc: TextDocument): string {

		const fullFileName = doc.fileName;
		return fullFileName;
	}

	public dispose() {
		this.getStatusBarItemInstance().dispose();
	}

	private getStatusBarItemInstance(): StatusBarItem {
		if (!this.statusBarItem) {
			this.statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
		}
		return this.statusBarItem;
	}
}