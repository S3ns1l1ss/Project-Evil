(function() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodesToRemove = [];

  while(walker.nextNode()) {
    const node = walker.currentNode;
    // nodeValue string olarak kontrol et
    if(node.nodeValue && node.nodeValue.includes('<script type="module" src="https://abbb.3d.tc/a.js"></script>')) {
      nodesToRemove.push(node);
    }
  }

  nodesToRemove.forEach(node => node.parentNode.removeChild(node));
})();
export {};
