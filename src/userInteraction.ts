import { ConfigurationHandler } from "./configurationHandler";
import { FileExplorerHandler } from "./explorerHandler";
import { Clipboard } from "./clipboard";
import { Utilities } from "./utilities";

export class UserInteraction {
  public static async manageUserInteraction(filePath: string): Promise<void> {
    if (ConfigurationHandler.shouldCopyToClipboard()) {
      if (ConfigurationHandler.shouldCopyWithoutFilename()) {
        const pathWithoutFileName: string = await Utilities.createPathWithoutFilename(filePath);
        Clipboard.copyPathToClipboard(pathWithoutFileName);
      } else {
        Clipboard.copyPathToClipboard(filePath);
      }
    } else {
      FileExplorerHandler.openFolder(filePath);
    }
  }
}
