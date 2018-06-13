import { FilePath } from "./filePath";
import { Disposable, window } from "vscode";
export class FilePathController {
  private filePath: FilePath;
  private disposable: Disposable;

  constructor(filePath: FilePath) {
    this.filePath = filePath;
    this.filePath.updateFilePath();

    const subscriptions: Disposable[] = [];
    window.onDidChangeActiveTextEditor(this.onEvent, this, subscriptions);

    this.filePath.updateFilePath();

    this.disposable = Disposable.from(...subscriptions);
  }

  public dispose() {
    this.disposable.dispose();
  }

  private onEvent() {
    this.filePath.updateFilePath();
  }
}
