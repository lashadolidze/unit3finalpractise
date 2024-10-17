import MainPage from "../pageObjects/MainPage.js";
// import CityPage from "../pageObjects/SampleApp.js";
import Browser from "../../framework/browser/Browser.js";
import { assert } from "chai";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import SampleApp from "../pageObjects/SampleAppPage.js";
// import * as dotenv from "dotenv";
// dotenv.config();

const link = "Sample App";
// const userName = process.env.USERNAME;
// const password = process.env.PASSWORD;
describe("User page test", () => {
  before("The main page needs to open", async () => {
    //pre condition, open the main page
    await Browser.openUrl(mainConfig.baseUrl);
  });
  it("Test needs to input credentials and check for success messege", async () => {
    await MainPage.clickLink(link);
    assert.isTrue(await SampleApp.isPageOpened(), "page is not opened");
    await SampleApp.typeName(process.env.USER);
    await SampleApp.typePassword(process.env.PASSWORD);
    await SampleApp.ClickLogin();
    assert.include(await SampleApp.getStatus(), userName, "did not match");
  });
});
