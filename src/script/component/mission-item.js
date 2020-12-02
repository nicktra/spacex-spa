import DataSource from "../data/data-source.js";

class MissionItem extends HTMLElement {

    set mission(mission) {
        this._mission = mission;
        this.render();
    }

    render() {
        this.setAttribute("class", "col mb-5");
        this.innerHTML = `
        <style>
            .modal-body {
                background-color: #505050;
            }

            .modal-header {

            }

            .card {
                background-color: #505050;
                border-color: whitesmoke;
                min-height: 430px;
                max-height: 500px;
            }

            .card .card-title {
                font-size: 18px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            
            .card img {
                height: 250px;
                background-position: center;
                object-fit: cover;
            }

            .btn a {
                text-decoration: none;
                color: #fff;
            }

            .list-group li{
                border: none;
                background-color: #505050;
            }
        </style>

        <div class="card">
            <img src="${this._mission.links.mission_patch}" class="card-img-top" alt="${this._mission.mission_name}">
            <div class="card-body">
                <h5 class="card-title">${this._mission.mission_name}</h5>
                <p>${this._mission.launch_year}</p>
                <button class="btn detail-btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter" data-id="${this._mission.flight_number}">Detail</button>
            </div>
        </div>

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Detail Film</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="col">
                            <img src="" class="img-fluid" width=500>
                        </div>
                        <div class="col">
                            <ul class="list-group">
                                <li class="list-group-item name-mission"></li>
                                <li class="list-group-item launch-mission"></li>
                                <li class="list-group-item rocket-mission"></li>
                                <li class="list-group-item det-mission"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer bg-dark">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Tutup</button>
                </div>
                </div>
            </div>
        </div>
        `;

        const detailMission = async (flight_number) => {
            try {
                const result = await DataSource.detailMission(flight_number);
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        }

        const renderResult = result => {
            result.forEach(mis => {
                $(".img-fluid").attr("src", mis.links.mission_patch);
                $(".name-mission").html("Mission Name : " + mis.mission_name);
                $(".launch-mission").html("Date : " + (mis.launch_date_utc).substr(0,10));
                $(".rocket-mission").html("Rocket Name : " + mis.rocket.rocket_name);
                $(".det-mission").html("Detail : " + mis.details);
            });
        }

        const fallbackResult = message => {
            alert(message);
        };

        const detailBtn = this.querySelector(".detail-btn");
        detailBtn.addEventListener("click", function() {
            const missionId = this.getAttribute("data-id");
            detailMission(missionId);
        });

    }
}

customElements.define("mission-item", MissionItem);