module.exports=function() {

    this.Given(/^I have loaded his site$/, function () {
        browser.url('https://alf.bjorn.hustoft.tech');
    });

    this.Then(/^I see a link to the "([^"]*)" section$/, function (career) {
        browser.waitForExist('a[href*="#/'+career+'"]');
    });
};
