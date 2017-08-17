import axios from 'axios';

export const fetchSomething = (param) => (dispatch, getState) => {
	/*const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    };
  fetch(`https://mcpstaging.softwareseni.com/api/activities?api_token=ZmA3ItoNtSaO7SutnlMvuHNUZmPUqLNByqCX8cfCtOyg4MEb3ARD2dP3MACLIiLF`, options)
      .then(response => response.json())
      .then(responseJson => {
        //this.setState({visible:false});
        console.log(responseJson);
        dispatch({
          type: 'GET_ACTIVITY',
          payload: responseJson,
        });
      })
      .catch((error)=>{
        console.log(error);
        dispatch({
          type: 'ERROR_ACTIVITY',
          payload: error,
        });
      });*/
  const options = {
      mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    };
  axios.get("https://mcpstaging.softwareseni.com/api/activities?api_token=ZmA3ItoNtSaO7SutnlMvuHNUZmPUqLNByqCX8cfCtOyg4MEb3ARD2dP3MACLIiLF", options)
    .then((response) => {
      console.log(response);
      dispatch({
        type: 'GET_ACTIVITY',
          payload: response.data,
      })
    })
    .catch((err)=>{
      console.log(err);
      dispatch({
        type: 'ERROR_ACTIVITY',
          payload: err,
      })
    })
}
