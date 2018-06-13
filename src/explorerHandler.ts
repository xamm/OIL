import * as child_process from "child_process";
import * as process from "process";
import { Utilities } from "./utilities";
export class FileExplorerHandler {
  public static openFolder(uri: string): void {
    switch (process.platform) {
      case "linux":
        this.openLinux(uri);
        break;
      case "darwin":
        this.openMac(uri);
        break;
      //case 'win32':
    }
  }

  private static async openLinux(uri: string): Promise<void> {
    const argument: string = await Utilities.createPathWithoutFilename(uri);
    const command = "xdg-open  " + argument + "/";
    child_process.exec(command);
  }

  private static async openMac(uri: string): Promise<void> {
    const argument: string = await Utilities.createPathWithoutFilename(uri);
    const command = "open " + argument + "/";
    child_process.exec(command);
  }
}
