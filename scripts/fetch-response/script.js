const opt = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/json',
        "Access-Control-Allow-Origin": null,
    },
    mode: 'no-cors',
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
