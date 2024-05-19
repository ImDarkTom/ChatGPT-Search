let delay = 500;

const initObserver = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (!query) {
        console.log('ChatGPT Deeplink: No query found.');
        return;
    }

    const textarea = document.getElementById('prompt-textarea');
    if (!textarea) {
        console.error('ChatGPT Deeplink: Input textarea not found.');
        return;
    }

    const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                //Odd workaround
                let sendButton = null;
                const allButtons = document.querySelectorAll('button');
                for (const button of allButtons) {
                    if (button.firstChild.classList.contains('icon-2xl')) {
                        sendButton = button;
                        break;
                    }
                }

                if (sendButton && sendButton.nodeName === 'BUTTON') {
                    observer.disconnect();

                    setTimeout(() => {
                        textarea.focus();
                        // Simulate typing the word character by character
                        for (let i = 0; i < query.length; i++) {
                            const char = query.charAt(i);

                            textarea.value += char;

                            textarea.dispatchEvent(new Event("input", { bubbles: true }));
                        }
                        textarea.blur();
                        sendButton.click();
                    }, delay);
                } else {
                    console.error('ChatGPT Deeplink: Send button not found.')
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
} else {
    initObserver();
}
