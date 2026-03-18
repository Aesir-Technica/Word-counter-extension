// Background service worker for the Word Counter extension

chrome.runtime.onInstalled.addListener(() => {
    console.log('Word Counter extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'countWords') {
        const wordCount = countWords(request.text);
        sendResponse({ wordCount: wordCount });
    }
});

function countWords(text) {
    return text.split(/\s+/).filter(word => word.length > 0).length;
}