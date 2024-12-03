chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveAsMarkdown",
    title: "Guardar como txt",
    contexts: ["selection"]
  });
});

function downloadMarkdown(content, fileName) {
  // Convertir el contenido a Base64
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const reader = new FileReader();
  
  reader.onload = function() {
    chrome.downloads.download({
      url: reader.result,
      filename: fileName,
      saveAs: true
    });
  };
  
  reader.readAsDataURL(blob);
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveAsMarkdown" && info.selectionText) {
    const selectedText = info.selectionText;
    const date = new Date().toLocaleString();
    const markdownContent = `# Texto guardado de ${tab.url}\n\n_Guardado el: ${date}_\n\n---\n\n${selectedText}`;
    const fileName = `saved_text_${Date.now()}.txt`;
    
    downloadMarkdown(markdownContent, fileName);
  }
});
