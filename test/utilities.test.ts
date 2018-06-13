import * as assert from "assert";
import { Filesystem } from "../src/singletons/fsSingleton";
import { Utilities } from "../src/utilities";
export class Filesys {
  constructor(private returnValue: boolean) {}
  public lstatSync(): any {
    return { isDirectory: () => this.returnValue };
  }
}
suite("Utilities Test", () => {
  test("SplitKeepDelimeterTests path with delimeter in front", () => {
    const filePathWitFileName = "/Users/Test/test.ts";

    const expectedArray = ["", "/Users", "/Test", "/test.ts"];
    const actualArray = Utilities.splitKeepDelimeter(filePathWitFileName, "/");
    assert.deepEqual(actualArray, expectedArray);
  });

  test("SplitKeepDelimeterTests path without delimeter in front", () => {
    const filePathWitFileName = "Users/Test/test.ts";

    const expectedArray = ["/Users", "/Test", "/test.ts"];
    const actualArray = Utilities.splitKeepDelimeter(filePathWitFileName, "/");
    assert.deepEqual(actualArray, expectedArray);
  });

  test("CombineToPathWithoutFileName with filename in path", () => {
    const filePathArray = ["/Users", "/Test", "/test.ts"];

    const expectedFilePath = ["/Users/Test/test.ts"];
    const actualFilePath = Utilities.createFilePath(filePathArray);
    assert.equal(actualFilePath, expectedFilePath);
  });

  test("CombineToPathWithoutFileName without filename in path", () => {
    const filePathArray = ["/Users", "/Test"];

    const expectedFilePath = ["/Users/Test"];
    const actualFilePath = Utilities.createFilePath(filePathArray);
    assert.equal(actualFilePath, expectedFilePath);
  });

  test("CombineToPathWithoutFileName without filename in path", () => {
    const filePathArray = ["/Users", "/Test", "/test"];

    const expectedFilePath = ["/Users/Test/test"];
    const actualFilePath = Utilities.createFilePath(filePathArray);
    assert.equal(actualFilePath, expectedFilePath);
  });

  test("removeLastElement with filename in path", () => {
    //sets isDirectory to false
    Filesystem.setInstance(new Filesys(false));

    const filePathArray = ["/Users", "/Test", "/test"];

    const expectedFilePath = ["/Users/Test"];
    const actualFilePath = Utilities.removeLastElement(
      Utilities.createFilePath(filePathArray),
      filePathArray
    );
    actualFilePath.then(path => {
      assert.equal(path, expectedFilePath);
    });
  });

  test("removeLastElement without filename in path", () => {
    //sets isDirectory to false
    Filesystem.setInstance(new Filesys(true));

    const filePathArray = ["/Users", "/Test", "/test"];

    const expectedFilePath = ["/Users/Test"];
    const actualFilePath = Utilities.removeLastElement(
      Utilities.createFilePath(filePathArray),
      filePathArray
    );
    actualFilePath.then(path => {
      assert.equal(path, expectedFilePath);
    });
  });
});
