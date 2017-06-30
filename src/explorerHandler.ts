import * as child_process from 'child_process';
import * as process from 'process';
import { Utilities } from './utilities';
export class FileExplorerHandler {

	public static openFolder(uri: string): void {
		const parts = Utilities.splitKeepDelimeter(uri, '/');
		const argument = Utilities.combineToPathWithoutFileName(parts);

		const command = 'open ' + argument + '/';
		child_process.exec(command);
	}
}
