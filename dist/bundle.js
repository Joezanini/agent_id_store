/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/* Adding shadowDOM to a Web Component
			Step 1: attachShadow
			Step 2: create a const template
			Step 3: attach template to innerHTML
			Step 4: attach to document
            Step 5: define custom component to be bundled
*/

class AgentData extends HTMLElement {
    constructor() {
        super();
        // **STEP (1)** //
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // **STEP (2)** //
        const template = document.createElement("template");

        // **STEP (3)** //
        //accessing properties provided by Agent Desktop
        //dynamically with ${this.propertyname}
        template.innerHTML = /* html */`
            <style>
                .btn {
                    background-color:rgb(0, 145, 255);
                    color: white;
                    border: none;
                    border-radius: 15px;
                    padding: 0 2rem;
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    box-shadow: 0 4px 14px 0 rgb(0, 145, 255);
                }
            </style>
            <button class="btn">${this.agentId}</button>
            <button class="btn">${this.agentName}</button>
        `;
        // **STEP (4)** //
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
// **STEP (5)** //
customElements.define("agent-data", AgentData);
/******/ })()
;