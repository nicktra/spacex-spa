class DataSource {
	static searchMission(keyword) {
		return fetch(`https://api.spacexdata.com/v3/launches/past?mission_name=${keyword}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.length > 0) {
				return Promise.resolve(responseJson);
			} else {
				return Promise.reject(`${keyword} is not found`);
			}
		})
	};

	static detailMission(flight_number) {
        return fetch(`https://api.spacexdata.com/v3/launches/past?flight_number=${flight_number}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`error`);
                }
            })
	};
	
 }
  
export default DataSource;