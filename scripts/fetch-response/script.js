function workTest(obj) {
console.log("input:" + obj)
}
    const opt = {
        method: 'GET',
        headers: {
            'Content-Type': 'text/json',
            "Access-Control-Allow-Origin": "*",
        },
        mode: 'cors',
        cache: 'default'
    }
    function getData(link) {
    fetch(link, opt).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
    })
    }
