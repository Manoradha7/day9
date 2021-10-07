var rest_Cun = new XMLHttpRequest;
rest_Cun.open("GET","https://restcountries.com/v3.1/all");
rest_Cun.responseType ="json";
rest_Cun.onload=function(){
    const data = rest_Cun.response;
    console.log(data);

// a.Get all the countries from Asia continent /region using Filter function
    let bigCities = data.filter(city => city.population < 200000);
    console.log(bigCities);

// b.Get all the countries with a population of less than 2 lakhs using Filter function
    let continent =data.filter(countries=> countries.region == "Asia")
    console.log(continent);    

// c.Print the following details name, capital, flag using forEach function
    data.forEach((item,index)=>{
    console.log(data[index].name.common,data[index].flag,data[index].capital);
    })

// d.Print the total population of countries using reduce function
    var population = data.reduce((sum,pop)=>sum+pop.population, 0 )
    console.log( population);

// e.Print the country which uses US Dollars as currency.
    var USDollars = data.filter((data) => {
    for (let curr in data.currencies) {
         if (data.currencies[curr].name == 'United States dollar') {
              return true; } 
            } 
        }).map((data) => data.name.common);
        console.log(USDollars);
}


rest_Cun.send();
