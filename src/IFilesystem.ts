interface IFilesystem {
  lstatSync(path: string): { isDirectory(): boolean };
}
