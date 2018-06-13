import * as ncp from "copy-paste";

export class Clipboard {
  public static copyPathToClipboard(path: string): void {
	ncp.copy(path);
  }
}
