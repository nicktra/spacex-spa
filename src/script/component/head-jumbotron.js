class HeadJumbotron extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .jumbotron {
                    background-image: url("images/home_moon.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }

                @media screen and (max-width: 480px) {
                    .jumbotron {
                        height: 350px;
                    }
                
                    .jumbotron .display-4 {
                        margin-top: 20px;
                        font-size: 32px;
                    }
                }
            </style>

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-white text-center">MAKING HUMANITY MULTIPLANETARY</h1>
                    <p class="text-white text-center">Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system.</p>
                </div>
            </div>
        `;
    }

}

customElements.define("head-jumbotron", HeadJumbotron);