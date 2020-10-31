export default (...navEls) => {
  const result = navEls.map(element => {
    return `
      <li class="nav-el white__text"><a href="#${element.toLowerCase().replace(/\s+/g,'')}">${element}</a></li>
    `
  }).join('');

  return `
    <nav>
      ${result}
    </nav>
  `
};