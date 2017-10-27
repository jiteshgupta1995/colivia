import axios from "axios";

export function records( key, order ) {
	// function to fetch record using api call for given sortkey and sortorder 
    return axios.get(`http://localhost:3001/fetchRecord?sortKey=${key}&order=${order}`,{
      method: 'GET'
    }).then(function(res){
    	// returns response data
        return res.data;
    }).catch((error) => {
        console.error(error);
    });
}

export function showAlert(val){
	// function to show alert when action is performed
	alert(val+" is clicked");
}