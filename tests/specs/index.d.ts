import type ChromiumCommands from "node_modules/@wdio/protocols/build/commands/chromium";
import type WebdriverCommands from "node_modules/@wdio/protocols/build/commands/webdriver";

declare global {
  namespace WebdriverIO {
    interface Browser extends ChromiumCommands, WebdriverCommands {}
  }
}
