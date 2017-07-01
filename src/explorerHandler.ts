import * as child_process from 'child_process';
import * as process from 'process';
import { Utilities } from './utilities';
export class FileExplorerHandler {

	public static openFolder(uri: string): void {
		switch (process.platform) {
			case 'linux':
				this.openLinux(uri);
				break;
			case 'darwin':
				this.openMac(uri);
				break;
			//case 'win32':
		}
	}

	private static createPath(uri: string): string {
		const parts = Utilities.splitKeepDelimeter(uri, '/');
		const argument = Utilities.combineToPathWithoutFileName(parts);
		return argument;
	}

	private static openLinux(uri: string): void {
		const argument = this.createPath(uri);
		const command = 'xdg-open  ' + argument + '/';
		child_process.exec(command);
	}

	private static openMac(uri: string): void {
		const argument = this.createPath(uri);

		const command = 'open ' + argument + '/';
		child_process.exec(command);
	}
}
