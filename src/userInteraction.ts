import { ConfigurationHandler } from "./configurationHandler";
import { FileExplorerHandler } from "./explorerHandler";
import { Clipboard } from "./clipboard";
import { Utilities } from "./utilities";
import { Injector } from "ugly-injector";
import { IProcess } from "./IProcess";
import { UnsupportedPlatform } from "./errors/UnsupportedPlatform";

export class UserInteraction {
  public static async manageUserInteraction(filePath: string): Promise<void> {
    if (ConfigurationHandler.shouldCopyToClipboard()) {
      if (ConfigurationHandler.shouldCopyWithoutFilename()) {
        const delimiter = await this.getDelimiter();
        const pathWithoutFileName: string = await Utilities.createPathWithoutFilename(filePath, delimiter);
        Clipboard.copyPathToClipboard(pathWithoutFileName);
      } else {
        Clipboard.copyPathToClipboard(filePath);
      }
    } else {
      FileExplorerHandler.openFolder(filePath);
    }
  }

  private static async getDelimiter(): Promise<string> {
    const process: IProcess = await Injector.Instance("process");
    switch (process.platform) {
      case "linux":
        return "/";
      case "darwin":
        return "/";
      case "win32":
        return "\\";
      default:
        throw new UnsupportedPlatform();
    }
  }
}
