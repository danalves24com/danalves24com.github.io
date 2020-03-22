function getData(link) {
    const opt = {
        method: 'GET',
        headers: {
            'Content-Type': 'text/json',
            "Access-Control-Allow-Origin": "*",
        },
        mode: 'cors',
        cache: 'default'
    }
    var output = ""
    fetch(link, opt).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("Response: "+data)
        output = data
    })
    return output
}