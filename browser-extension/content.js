// content.js
// This script captures selected text in the browser and can be extended for further functionality.

document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText) {
        console.log('Selected text:', selectedText);
        // Further processing of the selected text can be done here.
    }
});