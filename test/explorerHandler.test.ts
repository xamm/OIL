import * as assert from "assert";
import { FileExplorerHandler } from "../src/explorerHandler";
import { IProcess } from "../src/IProcess";
import { Injector } from "ugly-injector";

class Process implements IProcess {
  public platform: NodeJS.Platform;
  constructor(platform: NodeJS.Platform) {
    this.platform = platform;
  }
}

suite("ExplorerHandler Test", () => {
  test("openFolder default throw error", () => {
    Injector.clear("process");
    Injector.setInstance("process", new Process("aix"));
    return FileExplorerHandler.openFolder("")
      .then(() => assert.fail("Default switch not hit"))
      .catch((e: Error) => {
        assert.equal(e.message, "System platform not supported.");
      });
  });

  test("openFolder default throw error", () => {
    Injector.clear("process");
    Injector.setInstance("process", new Process("aix"));
    return FileExplorerHandler.openFolder("")
      .then(() => assert.fail("Default switch not hit"))
      .catch((e: Error) => {
        assert.equal(e.message, "System platform not supported.");
      });
  });
});
