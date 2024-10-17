import { ElementsList, Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class MainPage extends BasePage {
  constructor() {
    super(new Label(`//*[@id="title]"`, "page header"), "Main page locator");

    this.link = (text) => new Label(PreciseTextLocator(`${text}`), "link text");
  }

  async clickLink(text) {
    await this.link(text).click();
  }
}

export default new MainPage();
