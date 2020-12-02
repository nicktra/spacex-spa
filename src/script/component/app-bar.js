class AppBar extends HTMLElement {
    
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand mx-auto" href="#">
                <img src="./images/spacex_logo.png" width="200" class="d-inline-block" alt="spacex logo">
                </a>
            </nav>`;
    }
}

customElements.define("app-bar", AppBar);