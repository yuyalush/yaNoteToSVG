document.getElementById('capture').addEventListener('click', async () => {
    // 現在のアクティブタブを取得
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // 「dom-to-image.min.js」と「content.js」をアクティブタブに順番に注入
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['dom-to-image.min.js', 'content.js']
    });
  });
  