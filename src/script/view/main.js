import '../component/mission-list.js';
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const missionListElement = document.querySelector("mission-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMission(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        missionListElement.missions = results;
    };

    const fallbackResult = message => {
        missionListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;