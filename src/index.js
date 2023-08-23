const codeLines = [
"mkdir PageByTerminal",
"cd PageByTerminal",
"mkdir css src",
"nano index.html",
"git init",
"git add index.html",
"git commit -m \"Estructura con HTML\"",
"nano ./src/index.js",
"git add ./src/index.js",
"git commit -m \"Agregar modularidad con Javascript\"",
"nano ./css/styles.css",
"git add ./css/styles.css",
"git commit -m \"Agregar estilos con CSS\""
]

const codeContainer = document.getElementById("code")
for (let index = 0; index < codeLines.length; index++) {
  codeContainer.innerHTML += `<div class="code-container">
  <code class="code-content">
    <span>🚀✨ ~ </span> ${codeLines[index]}
  </code>
</div>`
}
