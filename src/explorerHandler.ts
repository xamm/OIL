import * as child_process from "child_process";
import { Utilities } from "./utilities";
import { IProcess } from "./IProcess";
import { Injector } from "ugly-injector";
import { UnsupportedPlatform } from "./errors/unsupportedPlatform";
export class FileExplorerHandler {
  public static async openFolder(uri: string): Promise<void> {
    const process: IProcess = await Injector.Instance("process");
    switch (process.platform) {
      case "linux":
        this.openLinux(uri);
        break;
      case "darwin":
        this.openMac(uri);
        break;
      default:
        throw new UnsupportedPlatform();
      //case 'win32':
    }
  }

  private static async openLinux(uri: string): Promise<void> {
    const argument: string = await Utilities.createPathWithoutFilename(uri);
    const command = "xdg-open  '" + argument + "/'";
    child_process.exec(command);
  }

  private static async openMac(uri: string): Promise<void> {
    const argument: string = await Utilities.createPathWithoutFilename(uri);
    const command = "open '" + argument + "/'";
    child_process.exec(command);
  }
}
