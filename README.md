# ChatGPT-Search/Deeplink
A Firefox extension that allows using ChatGPT from the search bar as a custom search engine

Available on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/chatgpt-deeplink/)

![](https://raw.githubusercontent.com/ImDarkTom/ChatGPT-Search/main/preview.png)

## Features
- Use ChatGPT from the address bar.
- URL parameters for chat.openai.com.

## Explanation
- On installation (or on extension icon click) opens a tab that allows adding 'ChatGPT' as a search engine, letting you make queries from the address bar.
- When the search is made the browser goes to the ChatGPT url with the 'query' url parameter e.g: https://chatgpt.com/?query=What+is+the+capital+of+France%3F
- The addon then takes this query and automatically enters it into the text box and presses send. 

## FAQ
- **Q**: Is there be a chromium version of this extension?
- **A**: I do not plan on making/maintaining a version for chromium browsers. You are free to create a chromium fork if you wish.
