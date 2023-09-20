import assert from "assert/strict"
import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'

import Locators from "../locators/locators.js"
import Functions from "../pages/main.page.js"
import TestCases from "../specs/testCases.js"


describe("TestTask: ", () => {

    it("test case #1", async () => {
        await browser.url('https://github.com/');
        await Locators.signUpButton.click()    
        await Functions.waitUntilDisplayed(Locators.signUpEmail)      
        
        let welcomeMessageText = await Locators.welcomeMessage.getText()
        assert (welcomeMessageText == "Welcome to GitHub! Let's begin the adventure", "The welcome message does not match")

        await Locators.signUpEmail.addValue("examplemail" + Math.ceil(Math.random() * 1000000) + "@qwe.com")
        await Functions.waitUntilEnabled(Locators.firstContinueButton)
        await Locators.firstContinueButton.click()
        
        await Functions.waitUntilDisplayed(Locators.signUpPassword)
        await Locators.signUpPassword.addValue("PassWord" + Math.ceil(Math.random() * 1000000) + "QwE")
        await Functions.waitUntilEnabled(Locators.secondContinueButton)
        await Locators.secondContinueButton.click()
        
        await Functions.waitUntilDisplayed(Locators.signUpUsername)
        await Locators.signUpUsername.addValue("user-name" + Math.ceil(Math.random() * 1000000) + "zXc")
        await Functions.waitUntilEnabled(Locators.thirdContinueButton)
        await Locators.thirdContinueButton.click()
        
        await Functions.waitUntilDisplayed(Locators.sigUpOptIn)
        await Locators.sigUpOptIn.addValue("y")
        await Functions.waitUntilEnabled(Locators.lastContinueButton)
        await Locators.lastContinueButton.click()
        await browser.pause(2000)
    });
    
    it("test case #2", async () => {
        await browser.url('https://github.com/');
        await Locators.firstHeader.scrollIntoView()
        let firstHeaderText = await Locators.firstHeader.getText()
        assert (firstHeaderText == "The place for anyone from anywhere to build anything", "The header text does not match")
        
        await expect(Locators.trialLink).toBeClickable()
        await Locators.trialLink.click()
        
        let secondHeaderText = await Locators.secondHeader.getText()
        assert (secondHeaderText == "Pick your trial plan", "The header text does not match")
        await Locators.recommendedLink.click()     
    });

    it("test case #3", async () => {
        await browser.url('https://github.com/');
        await expect(Locators.subscribeLink).toExist()
        await Locators.subscribeLink.scrollIntoView()
        await expect(Locators.subscribeLink).toBeClickable()
        await Locators.subscribeLink.click()

        let newSubsribePage = await browser.getUrl()
        assert (newSubsribePage == "https://resources.github.com/newsletter/", "The url does not match")        
        
        await expect(Locators.subscribeHeader).toBeDisplayed()        
        await Locators.workEmail.scrollIntoView()
        await Locators.workEmail.addValue("examplemail" + Math.ceil(Math.random() * 1000000) + "@qwe.com")
        await Locators.selectCountry.click()
        await Locators.subscribeCheckbox.click()
        await Locators.subscibeButton.click()
        
        let thanksText = await Locators.thanksText.getText()
        assert (thanksText == "Thanks for subscribing!", "The thanking text does not match")   
    });

    it("test case #4", async () => {
        await browser.url('https://github.com/');
        await Locators.searchButton.click()
        let searchText = "fml"
        await Locators.searchInput.addValue(searchText)
        await browser.keys(Key.Enter)
        await browser.pause(2000)
        await expect(Locators.elements).toHaveTextContaining('fml')    
    });

    it("test case #5", async () => {
        await browser.url('https://github.com/');
        await Locators.pricingLink.click()
        await expect(Locators.pricingHeader).toBeDisplayed()
        await Locators.compareLink.scrollIntoView()
        await Locators.compareLink.click()
        await Locators.compareHeader.scrollIntoView()
        await expect(Locators.compareHeader).toBeDisplayed()
        await expect(Locators.compareHeader).toHaveText("Compare features")               
    });

});