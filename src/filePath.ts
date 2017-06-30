import { StatusBarItem, window, StatusBarAlignment, TextDocument } from 'vscode';

export class FilePath {

	private statusBarItem: StatusBarItem;
	public path: string;

	public updateFilePath() {

		if (!this.statusBarItem) {
			this.statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
		}

		const editor = window.activeTextEditor;
		if (!editor) {
			this.statusBarItem.hide();
			return;
		}

		const doc = editor.document;
		this.path = this.getFilePath(doc);

		this.fillStatusBarItem(this.path);
		this.statusBarItem.show();

	}

	private fillStatusBarItem(filePath: string): void {
		this.statusBarItem.text = filePath ? `$(link-external) ` + filePath : '';
		this.statusBarItem.command = 'extension.openFolder';
	}

	public getFilePath(doc: TextDocument): string {

		const fullFileName = doc.fileName;
		return fullFileName;
	}

	public dispose() {
		this.statusBarItem.dispose();
	}
}