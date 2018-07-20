import { Injector } from "ugly-injector";

export class Utilities {

  public static async createPathWithoutFilename(uri: string, delimiter: string): Promise<string> {
    const parts = Utilities.splitKeepDelimeter(uri, delimiter);
    const totalPath = Utilities.createFilePath(parts);

    return await this.removeLastElement(totalPath, delimiter);
  }

  public static splitKeepDelimeter(text: string, delimeter: string) {
    let parts = text.split(delimeter);

    parts = parts.map(item => {
      return item ? delimeter.concat(item) : "";
    });
    return parts;
  }

  public static createFilePath(parts: string[]): string {
    return parts.reduce((prev, curr) => prev.concat(curr));
  }

  public static async removeLastElement(path: string, delimiter: string): Promise<string> {
    const fileSystem: IFilesystem = await Injector.Instance("fs");
    return fileSystem.lstatSync(path).isDirectory() ? path : path.slice(0, path.lastIndexOf(delimiter));
  }
}
