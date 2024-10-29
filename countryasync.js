const search = async()=>{
    console.log(countryname.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryname.value}?fullText=true`)
    response.json().then((data)=>{
        console.log(data[0]);

        // common
        let common = data[0].name.common
        console.log(common);
        

        let official = data[0].name.official
        console.log(official);

        for(var curr in data[0].currencies){
            var currencyname = data[0].currencies[curr].name
            var symbol = data[0].currencies[curr].symbol
        }
        console.log(currencyname , symbol);
        
            
        
        let capital = data[0].capital
        console.log(capital);

        let nationalLang = []
        for(var lang in data[0].languages){
           nationalLang.push(data[0].languages[lang])
        }
        console.log(nationalLang);
        
        
        let borders = data[0].borders
        console.log(borders);


        let area = data[0].area
        console.log(area);
        
        let map = data[0].maps.googleMaps
        console.log(map);
        

       let population = data[0].population
       console.log(population);

       let timezones = data[0].timezones
       console.log(timezones);

       let continents = data[0].continents
       console.log(continents);

       let flags = data[0].flags.png
       console.log(flags);
       
       
       result.innerHTML =` <div class="card text-center  mt-6 " style="max-width: 100%;">
                    <img src=${flags} class="card-img-top p-2" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center fs-1 fw-bolder">${common}</h5>
                      <hr>
                      <p>Capital:${capital}</p>
                      <hr>
                      <p>Continent:${continents}</p>
                      <hr>
                      <p>Population:${population}</p>
                      <hr>
                      <p>Language:${nationalLang}</p>
                      <hr>
                      <p>Currency:${currencyname} ${symbol}</p>
                      <hr>
                      <p>TimeZone:${timezones}</p>
                     <hr>
                     <a href="">Google Maps:${map}</a>
                    </div>
                  </div>`
       
        

     
       
        
    })



    
}


// common


// official
//currencies name and symbol
//capital
//languages
//borders
//area
//google maps
//population
//timezones
//continents
//flag-png