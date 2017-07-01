export class Clipboard {
	public static copyPathToClipboard(path: string): void {
		// tslint:disable-next-line:no-require-imports
		const ncp = require('copy-paste');
		ncp.copy(path);
	}
}