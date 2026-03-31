console.log('selam');
console.log(document.cookie);

function removeModuleScriptText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent
      .replace(/<script\s+type=["']module["']\s+src=["'][^"']+["']><\/script>/gi, '')
      .replace(/autofocus\s+onfocus=["']import\([^"']+\);["']/gi, '');
  } else {
    node.childNodes.forEach(removeModuleScriptText);
  }
}

removeModuleScriptText(document.body);

export {};
