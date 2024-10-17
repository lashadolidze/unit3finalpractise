import { Button, Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class SampleApp extends BasePage {
  constructor() {
    super(
      new Label(`//*[@class="container"]`, "the header of the page"),
      "user page"
    );

    this.inputuser = new Input(`//*[@type="text"]`, "username input");
    this.inputpass = new Input(`//*[@type="password"]`, "password input");
    this.loginButton = new Button(`//*[@id="login"]`, "login button");
    this.statusText = new Label(`//*[@id="loginstatus"]`, "status text");
  }

  async typeName(name) {
    await this.inputuser.typeText(name);
  }
  async typePassword(password) {
    await this.inputpass.typeText(password);
  }
  async ClickLogin() {
    await this.loginButton.click();
  }
  async getStatus() {
    return this.statusText.getText();
  }
}

export default new SampleApp();
