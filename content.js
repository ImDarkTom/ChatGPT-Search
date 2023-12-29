let delay = 500;

let hasExecuted = false;

const observer = new MutationObserver((mutationsList, observer) => {
    if (hasExecuted) {
        return;
    }

    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const urlParams = new URLSearchParams(document.location.search);
            const query = urlParams.get('query');

            if (query) {
                const textarea = document.getElementById('prompt-textarea');

                if (textarea) {
                    const button = textarea.nextElementSibling;

                    if (button && button.nodeName === 'BUTTON') {
                        observer.disconnect();
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