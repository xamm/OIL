import { Filesystem } from "./singletons/fsSingleton";

export class Utilities {
  public static async createPathWithoutFilename(uri: string): Promise<string> {
    const parts = Utilities.splitKeepDelimeter(uri, "/");
    const totalPath = Utilities.createFilePath(parts);

    return await this.removeLastElement(totalPath, parts);
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

  public static async removeLastElement(
    path: string,
    parts: string[]
  ): Promise<string> {
    const instance = await Filesystem.Instance();
    return instance.lstatSync(path).isDirectory()
      ? path
      : this.createFilePath(parts.slice(0, parts.length - 2));
  }
}
