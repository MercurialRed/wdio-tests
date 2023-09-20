class Functions {

    async waitUntilDisplayed(value) {
        return browser.waitUntil(async () => { return value.isDisplayed() }, 5000, "Input is not visible" ) }

    async waitUntilEnabled(value) {
        return browser.waitUntil(async () => { return value.isEnabled() }, 5000, "Button is not enabled" ) }
}

export default new Functions()