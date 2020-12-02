class FooterBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                @media screen and (max-width: 487px) {
                    .copyright {
                        font-size: 14px;
                    }
                }
                #footerimg {
                    background-image: url("images/footer_feature.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    font-size: 20px;
                    padding: 80px 60px 30px 60px;
                }
            </style>
            
            <div id="footerimg">
                <p class="text-white text-center">“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”<br><br>-Elon Musk</p>
            </div>
            <div class="bg-dark py-4">
                <div class="container">
                <div class="row">
                    <div class="col text-white">Konik Saputra &#9400 2020</div>
                    <div class="col">
                    <button id="btnScroll" class="btn btn-light float-right rounded-circle"><i class="fas fa-arrow-up"></i></button>
                    </div>
                </div>
                </div>
            </div>
        `;

        $("#btnScroll").click(function() {
            $("html, body").animate({
            scrollTop: 0
            }, 500);
        })
    }

}

customElements.define("footer-bar", FooterBar);