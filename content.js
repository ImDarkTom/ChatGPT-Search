let delay = "500";

browser.storage.sync.get('delay').then(result => {
    if (result.delay) {
        delay = result.delay;
    }
});

delay = parseInt(delay);

let hasExecuted = false;

const observer = new MutationObserver((mutationsList, observer) => {
    if (hasExecuted) {
        return;
    }

    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const url = window.location.href;
            const urlParams = new URLSearchParams(new URL(url).search);
            const query = urlParams.get('query');

            if (query) {
                const textarea = document.getElementById('prompt-textarea');

                if (textarea) {
                    const button = textarea.nextElementSibling;

                    if (button && button.nodeName === 'BUTTON') {
                        observer.disconnect(); // Disconnect observer

                        hasExecuted = true;

                        setTimeout(() => {
                            textarea.focus();
                            // Simulate typing the word character by character
                            for (let i = 0; i < query.length; i++) {
                                const char = query.charAt(i);

                                // Set the value of the textarea
                                textarea.value += char;

                                // Dispatch an input event
                                textarea.dispatchEvent(new Event("input", { bubbles: true }));
                            }
                            textarea.blur();
                            button.click();
                        }, delay);
                    }
                }
            }
        }
    }
});

observer.observe(document, { childList: true, subtree: true });