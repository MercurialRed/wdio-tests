class Locators {

    // Test Case 1
    get signUpButton() { return $('div[class="d-lg-flex flex-items-center mb-3 mb-lg-0 text-center text-lg-left ml-3"] a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') }
    get welcomeMessage() { return $('h1[class="sr-only"]') }
    get signUpEmail() { return $('input[id="email"]') }
    get firstContinueButton() { return $('button[data-continue-to="password-container"]') }
    get signUpPassword() { return $('input[id="password"]') }
    get secondContinueButton() { return $('button[data-continue-to="username-container"]') }
    get signUpUsername() { return $('input[id="login"]') }
    get thirdContinueButton() { return $('button[data-continue-to="opt-in-container"]') }
    get sigUpOptIn() { return $('input[id="opt_in"]') }
    get lastContinueButton() { return $('button[data-continue-to="captcha-and-submit-container"]') }

    // Test Case 2

    get firstHeader() { return $('h2[class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3"]') }
    get trialLink() { return $('a[class="btn-mktg btn-large-mktg btn-muted-mktg"]') }
    get secondHeader() { return $('h1[class="d-none d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra "]') }
    get recommendedLink() { return $('//main/div/div[2]/div/div/div[1]/a') }

    // Test Case 3

    get subscribeLink() { return $('a[class="btn-mktg mb-4 btn-muted-mktg"]') }
    get subscribeHeader() { return $('h1[id="hero-section-brand-heading"]') }
    get workEmail() { return $('input[type="email"]') }
    get selectCountry() { return $('//option[' + Math.ceil(Math.random() * 241) + ']') }
    get subscribeCheckbox() { return $('input[id="gated-agree-marketingEmailOptin1"]') }
    get subscibeButton() { return $('button[type="submit"]') }
    get thanksText() { return $('h1[id="hero-section-brand-heading"]') }

    // Test Case 4
    get searchButton() { return $('button[data-target="qbsearch-input.inputButton"]') }
    get searchInput() { return $('input[id="query-builder-test"]') }
    get elements() { return $('div[class="Box-sc-g0xbh4-0 kzrAHr"]') }

    // Test Case 5
    get pricingLink() { return $('a[class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"]') }
    get pricingHeader() { return $('h1[class="h2-mktg"]') }
    get compareLink() { return $('a[class="d-flex flex-column flex-items-center flex-justify-center h5-mktg"]') }
    get compareHeader() { return $('h1[class="h1"]') }
}

export default new Locators()
