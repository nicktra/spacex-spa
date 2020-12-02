import './mission-item.js';

class MissionList extends HTMLElement {

    set missions(missions) {
        missions.sort((a, b) => b.flight_number - a.flight_number);
        this._missions = missions;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.setAttribute("class", "text-center mt-5");
        this.innerHTML += `<h2>${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this.setAttribute("class", "movie-list row row-cols-1 row-cols-lg-3 row-cols-md-3");
        this._missions.forEach(mission => {
            const missionItemElement = document.createElement("mission-item");
            missionItemElement.mission = mission;
            this.appendChild(missionItemElement);
        })
    }

}

customElements.define("mission-list", MissionList);