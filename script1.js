
var request = new XMLHttpRequest();


request.open('GET', 'https://restcountries.com/v3.1/all', true);


request.send();

request.onload = function () {
    var data = JSON.parse(request.response);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name,[i].region,[i].subregion,[i].population);
    }
}