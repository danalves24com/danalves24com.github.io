var link = ""
const opt = {    
		method: 'GET',
		mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json',
  				'Access-Control-Allow-Origin': '*'
  			}		
}    
    function getData(link, opt) {    

    fetch(link, opt)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })
}
