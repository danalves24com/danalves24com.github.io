const defaultOPT = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/json',
        "Access-Control-Allow-Origin": "*",
    },
    mode: 'cors',
}    
function getData(link, options) {
    fetch(link, options)
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
