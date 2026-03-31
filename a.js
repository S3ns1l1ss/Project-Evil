console.log('selam');
(function() {
  const body = document.body;

  const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  const toRemove = [];

  while(walker.nextNode()) {
    const node = walker.currentNode;
    if(node.nodeValue.includes('<script type="module" src="https://abbb.3d.tc/a.js"></script>')) {
      toRemove.push(node);
    }
  }

  toRemove.forEach(node => node.remove());
})();
