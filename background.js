browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        openGuidePage();
    }
});

browser.browserAction.onClicked.addListener(() => {
    openGuidePage();
});

function openGuidePage() {
    browser.tabs.create({
        url: browser.runtime.getURL('addsearch.html'),
    });
}
