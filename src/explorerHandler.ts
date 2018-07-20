import * as child_process from "child_process";
import { Utilities } from "./utilities";
import { IProcess } from "./IProcess";
import { Injector } from "ugly-injector";
import { UnsupportedPlatform } from "./errors/UnsupportedPlatform";
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
      case "win32":
        this.openWindows(uri);
        break;
      default:
        throw new UnsupportedPlatform();
    }
  }

  private static async openLinux(uri: string): Promise<void> {
    const argument: string = await this.getUnixArgument(uri);
    const command = "xdg-open  '" + argument + "/'";
    child_process.exec(command);
  }

  private static async openMac(uri: string): Promise<void> {
    const argument: string = await this.getUnixArgument(uri);
    const command = "open '" + argument + "/'";
    child_process.exec(command);
  }

  private static getUnixArgument(uri: string): Promise<string> {
    const delimiter = "/";
    return Utilities.createPathWithoutFilename(uri, delimiter);
  }

  private static async openWindows(uri: string): Promise<void> {
    const argument: string = await this.getWindowsArgument(uri);
    const command = "start '" + argument + "\\'";
    child_process.exec(command);
  }

  private static getWindowsArgument(uri: string): Promise<string> {
    const delimiter = "\\";
    return Utilities.createPathWithoutFilename(uri, delimiter);
  }
}
