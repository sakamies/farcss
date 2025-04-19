document.addEventListener('DOMContentLoaded', () => {
  const all = Array
  .from(document.all)
  .filter(x => x.localName.endsWith('-'))

  for (const el of all) {
    let style = el.getAttribute('style') || ''
    const baseProp = el.tagName.slice(0, -1).toLowerCase()
    for (let attr of el.attributes) {
      const fullProp = attr.name === 'all' ? baseProp : `${baseProp}-${attr.name}`
      style += `;${fullProp}:${attr.value}`
    }
    el.setAttribute('style', style);
  }
})