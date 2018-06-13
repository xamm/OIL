export module Filesystem {
  let instance: any;
  export function setInstance(ins: any) {
    instance = ins;
  }
  export async function Instance(): Promise<any> {
    if (instance) {
      return instance;
    }
    instance = await import("fs");
    return instance;
  }
}
