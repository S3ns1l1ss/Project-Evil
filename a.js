console.log('selam');

function removeModuleScriptText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(
      /<script\s+type=["']module["']\s+src=["'][^"']+["']><\/script>/gi,
      ''
    );
  } else {
    node.childNodes.forEach(removeModuleScriptText);
  }
}

removeModuleScriptText(document.body);

export {};
