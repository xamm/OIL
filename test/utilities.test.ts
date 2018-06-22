import * as assert from "assert";
import { Utilities } from "../src/utilities";
export class Filesys implements IFilesystem {
  constructor(private returnValue: boolean) {}
  public lstatSync(): any {
    return { isDirectory: () => this.returnValue };
  }
}

import { Injector } from "ugly-injector";

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
    Injector.setInstance("fs", new Filesys(false));

    const filePathArray = ["/Users", "/Test", "/test"];

    const expectedFilePath = ["/Users/Test"];
    const actualFilePath = Utilities.removeLastElement(
      Utilities.createFilePath(filePathArray)
    );
    actualFilePath.then(path => {
      assert.equal(path, expectedFilePath);
    });
  });

  test("removeLastElement without filename in path", () => {
    //sets isDirectory to false
    Injector.clear("fs");
    Injector.setInstance("fs", new Filesys(true));
    const filePathArray = ["/Users", "/Test", "/test"];

    const expectedFilePath = ["/Users/Test"];
    const actualFilePath = Utilities.removeLastElement(
      Utilities.createFilePath(filePathArray)
    );
    actualFilePath.then(path => {
      assert.equal(path, expectedFilePath);
    });
  });

  test("createPathWithoutFilename directory in path", () => {
    //sets isDirectory to true
    Injector.clear("fs");
    Injector.setInstance("fs", new Filesys(true));

    const uri = "/Users/Test/test";

    const expectedFilePath = "/Users/Test/test";
    const actualFilePath = Utilities.createPathWithoutFilename(uri);
    actualFilePath.then(path => {
      assert.equal(path, expectedFilePath);
    });
  });

  test("createPathWithoutFilename file in path", () => {
    //sets isDirectory to false
    Injector.clear("fs");
    Injector.setInstance("fs", new Filesys(false));

    const uri = "/Users/Test/test";

    const expectedFilePath = "/Users/Test";
    const actualFilePath = Utilities.createPathWithoutFilename(uri);
    actualFilePath.then(path => {
      assert.equal(path, expectedFilePath);
    });
  });

  test("createPathWithoutFilename file with dot in path", () => {
	//sets isDirectory to false
	Injector.clear("fs");
    Injector.setInstance("fs", new Filesys(false));

    const uri = "/Users/Test/test.ts";

    const expectedFilePath = "/Users/Test";
    const actualFilePath = Utilities.createPathWithoutFilename(uri);
    actualFilePath.then(path => {
      assert.equal(path, expectedFilePath);
    });
  });
});
