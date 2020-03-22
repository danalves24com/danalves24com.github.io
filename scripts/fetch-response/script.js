    var opt = ""
    function getData(link) {
        opt = {
            method: 'GET',
            headers: {
                'Content-Type': 'text/json',
                "Access-Control-Allow-Origin": '"'+link+'"',
            },
            mode: 'no-cors',
            cache: 'default'
        }
    fetch(link, opt).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
    })
    }
