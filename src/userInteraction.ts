import { ConfigurationHandler } from './configurationHandler';
import { FileExplorerHandler } from './explorerHandler';
import { Clipboard } from './clipboard';
import { Utilities } from './utilities';

export class UserInteraction {
	public static manageUserInteraction(filePath: string): void {
		if (ConfigurationHandler.shouldCopyToClipboard()) {
			if (ConfigurationHandler.shouldCopyWithoutFilename()) {
				const pathWithoutFileName: string = Utilities.createPathWithoutFilename(filePath);
				Clipboard.copyPathToClipboard(pathWithoutFileName);
			} else {
				Clipboard.copyPathToClipboard(filePath);
			}
		} else {
			FileExplorerHandler.openFolder(filePath);
		}
	}
}