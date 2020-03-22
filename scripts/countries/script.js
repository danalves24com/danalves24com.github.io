/*

*/
function allCountries() {
    fetch("https://restcountries-v1.p.rapidapi.com/all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "bacd86d576msh7e4f10ea742f8b2p10a49cjsn06a2e594a624"
	}
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch(err => {
	console.log(err);
});
}

function countryOfCapital(capital) {
    fetch("https://restcountries-v1.p.rapidapi.com/capital/"+capital, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "bacd86d576msh7e4f10ea742f8b2p10a49cjsn06a2e594a624"
	}
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch(err => {
	console.log(err);
});
}
function CountryCode(ccd) {
    fetch("https://restcountries-v1.p.rapidapi.com/alpha/"+ccd, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "bacd86d576msh7e4f10ea742f8b2p10a49cjsn06a2e594a624"
	}
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch(err => {
	console.log(err);
});
}
function callingCode(cacd) {
    fetch("https://restcountries-v1.p.rapidapi.com/callingcode/"+cacd, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "bacd86d576msh7e4f10ea742f8b2p10a49cjsn06a2e594a624"
	}
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch(err => {
	console.log(err);
});
}