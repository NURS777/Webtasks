let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let country = document.querySelector("#countries");
let city = document.querySelector("#cities");

for (var index = 0; index < countries.length; index++) {
    var b = document.createElement("option");
    b.append(countries[index]);
    country.append(b);
}


function fun(){
    if(country.value == "Kazakhstan"){
    for (var index = 0; index < countries.length; index++) {
        var c =  document.createElement("option");
        c.append(cities_by_country.Kazakhstan[index]);
        city.appendChild(c);
    }
    console.log(c);}


	if(country.value == "Russia"){
    for (var index = 1; index < countries.length; index++) {
        var d =  document.createElement("option");
        d.append(cities_by_country.Russia[index]);
        city.appendChild(d);
    }
    console.log(d);}


	if(country.value == "England"){
    for (var index = 0; index < countries.length; index++) {
        var e =  document.createElement("option");
        e.append(cities_by_country.England[index]);
        city.appendChild(e);
    }
    console.log(e);}


	if(country.value == "France"){
    for (var index = 0; index < countries.length; index++) {
        var f =  document.createElement("option");
        f.append(cities_by_country.France[index]);
        city.appendChild(f);
    }
    console.log(f);}
  
}
document.querySelector('#countries').addEventListener('click',fun);
