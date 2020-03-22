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
    fetch("https://api.covid19api.com/summary", opt).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("Response: "+data)
    })

