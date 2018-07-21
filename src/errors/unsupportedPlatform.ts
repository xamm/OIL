export class UnsupportedPlatform extends Error {
  constructor() {
    const message = "System platform not supported.";
    super(message);
  }
}
