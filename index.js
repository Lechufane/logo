const paths = document.querySelectorAll('svg path'); // get all paths in the SVG

paths.forEach((path, index) => {
  const length = path.getTotalLength(); // get the length of the current path
  const rule = `#logo path:nth-child(${index+1}) {
    stroke-dasharray: ${length}px;
    stroke-dashoffset: ${length}px;
    animation: line-in 2s infinite alternate;
  }`; // create the CSS rule for the current path

  const style = document.createElement('style'); // create a new style element
  style.innerHTML = rule; // add the CSS rule to the style element
  document.head.appendChild(style); // append the style element to the head of the document
});