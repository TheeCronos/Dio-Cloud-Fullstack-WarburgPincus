<<<<<<< HEAD
class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // Base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        // Estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `

        // Enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

=======
class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // Base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        // Estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `

        // Enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

>>>>>>> d9b36f1f9c4a2ce8995e33f84ea71f53609b17f1
customElements.define("titulo-dinamico", TituloDinamico);