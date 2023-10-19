var on = true
var temperature_stations = {}
var rainfall_stations = {}
var aq_stations = {}


var mobileSwitchTemp = false
var mobileSwitchRainfall = false
var mobileSwitchAirQuality = false

function adjustLocationRainfall(){
    if (mobileSwitchRainfall == true){
        mobileSwitchRainfall = false
    }else{
        mobileSwitchRainfall = true
        mobileSwitchAirQuality =true
        mobileSwitchTemp = true
        adjustLocationTemp()
        adjustLocationAirQuality()
    }
    if (window.innerWidth<=500 && (!mobileSwitchRainfall)){
        document.querySelector("#LocationRainfall h3").style.display = "none";
        document.querySelector("#LocationRainfall select").style.display = "none";
        document.querySelector("#LocationRainfall p").style.display = "none";
        document.querySelector("#LocationRainfall").style.height = "70px"


    }else{
        document.querySelector("#LocationRainfall h3").style.display = "flex";
        document.querySelector("#LocationRainfall select").style.display = "flex";
        document.querySelector("#LocationRainfall p").style.display = "flex";
        document.querySelector("#LocationRainfall").style.height = "240px"

    }
}
function adjustLocationRainfall2(){
    if (window.innerWidth<=500){
        mobileSwitchRainfall = false;
        document.querySelector("#LocationRainfall h3").style.display = "none";
        document.querySelector("#LocationRainfall select").style.display = "none";
        document.querySelector("#LocationRainfall p").style.display = "none";
        document.querySelector("#LocationRainfall").style.height = "70px";
    }else{
        document.querySelector("#LocationRainfall h3").style.display = "flex";
        document.querySelector("#LocationRainfall select").style.display = "flex";
        document.querySelector("#LocationRainfall p").style.display = "flex";
        document.querySelector("#LocationRainfall").style.height = "240px"
    }

}

function adjustLocationTemp(){
    if (mobileSwitchTemp == true){
        mobileSwitchTemp = false
    }else{
        mobileSwitchTemp = true
        mobileSwitchAirQuality =true
        mobileSwitchRainfall = true
        adjustLocationRainfall()
        adjustLocationAirQuality()
    }
    if (window.innerWidth<=500 && (!mobileSwitchTemp)){
        document.querySelector("#LocationTemperature h3").style.display = "none";
        document.querySelector("#LocationTemperature select").style.display = "none";
        document.querySelector("#LocationTemperature p").style.display = "none";
        document.querySelector("#LocationTemperature").style.height = "70px"


    }else{
        document.querySelector("#LocationTemperature h3").style.display = "flex";
        document.querySelector("#LocationTemperature select").style.display = "flex";
        document.querySelector("#LocationTemperature p").style.display = "flex";
        document.querySelector("#LocationTemperature").style.height = "240px"

    }
}
function adjustLocationTemp2(){
    if (window.innerWidth<=500){
        mobileSwitchTemp = false;
        document.querySelector("#LocationTemperature h3").style.display = "none";
        document.querySelector("#LocationTemperature select").style.display = "none";
        document.querySelector("#LocationTemperature p").style.display = "none";
        document.querySelector("#LocationTemperature").style.height = "70px";
    }else{
        document.querySelector("#LocationTemperature h3").style.display = "flex";
        document.querySelector("#LocationTemperature select").style.display = "flex";
        document.querySelector("#LocationTemperature p").style.display = "flex";
        document.querySelector("#LocationTemperature").style.height = "240px"
    }

}

function adjustLocationAirQuality(){
    if (mobileSwitchAirQuality == true){
        mobileSwitchAirQuality = false
    }else{
        mobileSwitchAirQuality = true
        mobileSwitchTemp =true
        mobileSwitchRainfall = true
        adjustLocationRainfall()
        adjustLocationTemp()
        
    }
    if (window.innerWidth<=500 && (!mobileSwitchAirQuality)){
        document.querySelector("#LocationAirQuality h3").style.display = "none";
        document.querySelector("#LocationAirQuality select").style.display = "none";
        document.querySelector("#LocationAirQuality p").style.display = "none";
        document.querySelector("#LocationAirQuality p:nth-of-type(2)").style.display = "none";

        document.querySelector("#LocationAirQuality").style.height = "70px"


    }else{
        document.querySelector("#LocationAirQuality h3").style.display = "flex";
        document.querySelector("#LocationAirQuality select").style.display = "flex";
        document.querySelector("#LocationAirQuality p").style.display = "flex";
        document.querySelector("#LocationAirQuality p:nth-of-type(2)").style.display = "flex";

        document.querySelector("#LocationAirQuality").style.height = "240px"

    }
}
function adjustLocationAirQuality2(){
    if (window.innerWidth<=500){
        mobileSwitchAirQuality = false;
        document.querySelector("#LocationAirQuality h3").style.display = "none";
        document.querySelector("#LocationAirQuality select").style.display = "none";
        document.querySelector("#LocationAirQuality p").style.display = "none";
        document.querySelector("#LocationAirQuality p:nth-of-type(2)").style.display = "none";
        document.querySelector("#LocationAirQuality").style.height = "70px";
    }else{
        document.querySelector("#LocationAirQuality h3").style.display = "flex";
        document.querySelector("#LocationAirQuality select").style.display = "flex";
        document.querySelector("#LocationAirQuality p").style.display = "flex";
        document.querySelector("#LocationAirQuality p:nth-of-type(2)").style.display = "flex";
        document.querySelector("#LocationAirQuality").style.height = "240px"
    }

}





//set a windowOnSizeChange listener to change the appearance of LocationData Blocks and Window.onload also detect the size of the window

window.onload = () => {
    document.querySelector('body').innerHTML =`
    <h1>My Weather Portal</h1>
    <div id = "HKANDMyData"> 
        <div id="HK" class="Block">
            <h2>Hong Kong</h2>
            <div id = "HKWeatherIcon">
            </div>
            <div id = "HKTemperature">
                <p></p>
            
                
            </div>
            <div id = "HKHumidity">
                <p></p>
                <img></img> 
            
            </div>
            <div id = "HKRainfall">
                <p></p>
                <img></img>
                
            </div>
            <div id = "HKUVLevel">
                <p></p>
                <img></img>

            </div>
            <div id = "Warning"></div>
            <div id = "LastUpdate"></div>
        
        </div>

        <div id="MyData" class="Block">
            <h2>My Location</h2>
            <h3 id="MyDataSuburbDistrict"></h3>

            <div id = "MyDataTemperature">
                
                
            </div>

            <div id = "MyDataRainfall"></div>

            <div id = "MyDataAQHI">
                
            </div>
        </div>
    </div>    

    <div id="LocationData">
        <div id="LocationTemperature" class="Block">
            <h2>Temperatures</h2>
            <h3>Select the location</h3>
            <select name="" id="LocationTemperatureLocations"></select>
            <p></p>

        </div>

        <div id="LocationRainfall" class="Block">
            <h2>Rainfall</h2>
            <h3>Select the district</h3>
            <select name="" id="LocationRainfallDistricts"></select>
            <p></p>
            
        </div>

        <div id="LocationAirQuality" class="Block">
            <h2>Air Quality</h2>
            <h3>Select the AQ Station</h3>
            <select name="" id="LocationAirQualityAQStations"></select>
            <p></p>
            <p></p>
        </div>

    </div>

    <div id="NineDayForecast" class="Block">
        <h2>9-Day Forecast</h2>

        <div id="Forecasts">
            <div id="FirstDay" class="Days">
            </div>
            <div id="SecondDay" class="Days">
            </div>
            <div id="ThirdDay" class="Days">
            </div>
            <div id="FourthDay" class="Days">
            </div>
            <div id="FifthDay" class="Days">
            </div>
            <div id="SixthDay" class="Days">
            </div>
            <div id="SevenDay" class="Days">
            </div>
            <div id="EighthDay" class="Days">
            </div>
            <div id="NinthDay" class="Days">
            </div>
        </div>
        

    </div>`

    

   
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en")
    .then(response => {
        response.json().then(WR => {
           
            
            document.querySelector('#HKWeatherIcon').innerHTML= `<img src = "https://www.hko.gov.hk/images/HKOWxIconOutline/pic${WR.icon[0]}.png"></img>` 
            document.querySelector('#HKTemperature p').innerHTML= `${WR.temperature.data[1].value}<sup>°C</sup>`
           
            document.querySelector('#HKHumidity p').innerHTML= `${WR.humidity.data[0].value}<sub>%</sub>`

            document.querySelector('#HKHumidity img').setAttribute("src", "images/drop-64.png")

            document.querySelector('#HKRainfall p').innerHTML= `${WR.rainfall.data[13].max}<sub>mm</sub>`

            document.querySelector('#HKRainfall img').setAttribute("src", "images/rain-48.png")

            
            


            if (WR.uvindex.data){
                document.querySelector('#HKUVLevel p').innerHTML= `${WR.uvindex.data[0].value}&nbsp;&nbsp;`
                document.querySelector('#HKUVLevel img').setAttribute("src", "images/UVindex-48.png")
            }
             //if there is no value then needa hide it
            

            if (WR.warningMessage){
                var warningmessages = ""
                for (let x of WR.warningMessage){
                    warningmessages+=x+"\n"
                }
                document.querySelector('#Warning').innerHTML = '<h3>Warning</h3>'
                function toggle(){
                    if (on){
                        on=false
                        document.querySelector('#Warning').innerHTML = '<h3>Warning</h3>'
                        document.querySelector('#LastUpdate p').style.display = "inline";

                    }else{
                        on=true
                        document.querySelector('#Warning').innerHTML = `<h3>Warning</h3><p>${warningmessages}</p>`
                        document.querySelector('#LastUpdate p').style.display = "none";
                    }
                }
                document.querySelector('#Warning').addEventListener('click',toggle)
            }  

            document.querySelector('#LastUpdate').innerHTML = `<p>Last Update: ${WR.updateTime.slice(11,16)}</p>`
            if (WR.updateTime.slice(11,19)>='18:00:00' || WR.updateTime.slice(11,19)<'06:00:00'){ 
                if (WR.rainfall.data[13].max){
                    document.querySelector('#HK').style.backgroundImage = "url('images/water-drops-glass-night.jpg')";
                }else{
                    document.querySelector('#HK').style.backgroundImage = "url('images/night-sky.jpg')";
                }
                document.querySelector("#HK").style.color = "white"
                

            }else{
                
                if (WR.rainfall.data[13].max){
                    document.querySelector('#HK').style.backgroundImage= "url('images/water-drops-glass-day.jpg')";                
                }else{
                    document.querySelector('#HK').style.backgroundImage = "url('images/blue-sky.jpg')";
                }
                document.querySelector("#HK").style.color = "black"
            }


            
            for (let x of WR.temperature.data){
                temperature_stations[x.place] = x.value;
                
            }
            var arr = []
            for (let x of WR.temperature.data){
                arr.push(x.place)
            }
            arr.sort()
            
            var options = ""
            for (let x of arr){
                options+=`<option value="${x}">${x}</option>`
            }

            

            document.querySelector('#LocationTemperatureLocations').innerHTML = `<option value=""></option>${options}`
            
            document.querySelector('#LocationTemperatureLocations').addEventListener("change", function() {
                if(document.querySelector('#LocationTemperatureLocations').value == "")
                {
                    document.querySelector('#LocationTemperature p').innerHTML = ""
                   

                }else{
                    document.querySelector('#LocationTemperature p').innerHTML =  `${temperature_stations[document.querySelector('#LocationTemperatureLocations').value]}<sup>°C</sup>`
                    

                }
            });    
            //newly added
            if (window.innerWidth<=500 && (!mobileSwitchTemp)){
                document.querySelector("#LocationTemperature h3").style.display = "none";
                document.querySelector("#LocationTemperature select").style.display = "none";
                document.querySelector("#LocationTemperature p").style.display = "none";
                document.querySelector("#LocationTemperature").style.height = "70px"


            }
            
            document.querySelector("#LocationTemperature").addEventListener("click",adjustLocationTemp)
            
            window.addEventListener("resize",adjustLocationTemp2)
            


            //newly added end at here 

            for (let x of WR.rainfall.data){
                rainfall_stations[x.place] = x.max;
                    
                
            }
            var arr2 = []
            for (let x of WR.rainfall.data){
                arr2.push(x.place)
    
            }
            arr2.sort()
            
            var options = ""
            for (let x of arr2){
                options+=`<option value="${x}">${x}</option>`
            }
            document.querySelector('#LocationRainfallDistricts').innerHTML = `<option value=""></option>${options}`
            
            document.querySelector('#LocationRainfallDistricts').addEventListener("change", function() {
                if(document.querySelector('#LocationRainfallDistricts').value == "")
                {
                    document.querySelector('#LocationRainfall p').innerHTML = ""

                }else{
                    document.querySelector('#LocationRainfall p').innerHTML =  `${rainfall_stations[document.querySelector('#LocationRainfallDistricts').value]}<sub>mm</sub>`

                }
            });  
            //newly added
            if (window.innerWidth<=500 && (!mobileSwitchRainfall)){
                document.querySelector("#LocationRainfall h3").style.display = "none";
                document.querySelector("#LocationRainfall select").style.display = "none";
                document.querySelector("#LocationRainfall p").style.display = "none";
                document.querySelector("#LocationRainfall").style.height = "70px"


            }
            
            document.querySelector("#LocationRainfall").addEventListener("click",adjustLocationRainfall)
            
            window.addEventListener("resize",adjustLocationRainfall2)
            


            //newly added end at here       


        } )
       


    })
    .catch (err => {console.log("WRError");});

    fetch("https://dashboard.data.gov.hk/api/aqhi-individual?format=json")
    .then(response => {
        response.json().then(AQ => {
            
            for (let x of AQ){
                aq_stations[x.station] = [x.aqhi,x.health_risk];
                    
                
            }
            var arr3 = []
            for (let x of AQ){
                arr3.push(x.station)
    
            }
            arr3.sort()
            
            var options = ""
            for (let x of arr3){
                options+=`<option value="${x}">${x}</option>`
            }
            document.querySelector('#LocationAirQualityAQStations').innerHTML = `<option value=""></option>${options}`
            
            document.querySelector('#LocationAirQualityAQStations').addEventListener("change", function() {
                if(document.querySelector('#LocationAirQualityAQStations').value == "")
                {
                    document.querySelector('#LocationAirQuality p').innerHTML = ""
                    document.querySelector('#LocationAirQuality p:nth-of-type(2)').innerHTML = ""

                }else{
                    document.querySelector('#LocationAirQuality p').innerHTML =  `Level: ${aq_stations[document.querySelector('#LocationAirQualityAQStations').value][0]}`
                    document.querySelector('#LocationAirQuality p:nth-of-type(2)').innerHTML = `Risk: ${aq_stations[document.querySelector('#LocationAirQualityAQStations').value][1]}`

                }
            });   
            
            
            //newly added
            if (window.innerWidth<=500 && (!mobileSwitchAirQuality)){
                document.querySelector("#LocationAirQuality h3").style.display = "none";
                document.querySelector("#LocationAirQuality select").style.display = "none";
                document.querySelector("#LocationAirQuality p").style.display = "none";
                document.querySelector("#LocationAirQuality p:nth-of-type(2)").style.display = "none";
                document.querySelector("#LocationAirQuality").style.height = "70px"


            }
            
            document.querySelector("#LocationAirQuality").addEventListener("click",adjustLocationAirQuality)
            
            window.addEventListener("resize",adjustLocationAirQuality2)
            


            //newly added end at here 


        
        })

    })
    .catch (err => {console.log("AQError");});


    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en")
    .then(response => {
        response.json().then(WF => {
            var count = 1
            for (let x of WF.weatherForecast){
                var date = x.week.slice(0,3)+ " "+x.forecastDate.slice(6,8) +"/" +x.forecastDate.slice(4,6)
                var forecastIcon = x.ForecastIcon
                var psr = x.PSR.split(" ").join("")
                var forecastMinTemp = x.forecastMintemp.value
                var forecastMaxTemp = x.forecastMaxtemp.value
                var forecastMinRH = x.forecastMinrh.value
                var forecastMaxRH = x.forecastMaxrh.value
                
                var forecastHTML = `<h3>${date}</h3><img src = "https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon}.png"></img><img src = "https://www.hko.gov.hk/common/images/PSR${psr}_50_light.png" ></img><h3>${forecastMinTemp}-${forecastMaxTemp} °C</h3><h3>${forecastMinRH}-${forecastMaxRH} %</h3> `

                document.querySelector(`#Forecasts div:nth-of-type(${count})`).innerHTML =  `${forecastHTML}`
                count+=1
            }
               

           

        })
    })
    .catch (err => {console.log("WFError");});



    function geoFindMe(){
        var output=document.querySelector("#MyData")

        if (!navigator.geolocation){
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>"
            return
        }
        function success(position){
            
            var myLatitude = position.coords.latitude
            var myLongitude = position.coords.longitude
            

            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${myLatitude}&lon=${myLongitude}`)
            .then(response => {
                response.json().then(MyLocation => {
                    var MyDataSuburbDistrict1 = ``
                    if (MyLocation.address.suburb){
                        MyDataSuburbDistrict1+=MyLocation.address.suburb
                    }else if(MyLocation.address.borough){
                        MyDataSuburbDistrict1+=MyLocation.address.borough
                    }else if (MyLocation.address.town){
                        MyDataSuburbDistrict1+=MyLocation.address.town
                    }else{
                        MyDataSuburbDistrict1+="Unknown"
                    }

                    MyDataSuburbDistrict1 +=", "

                    var MyDistrict = ""
                    var found = false

                    if (MyLocation.address.city_district){
                        MyDataSuburbDistrict1+=MyLocation.address.city_district
                        MyDistrict=MyLocation.address.city_district
                    }else{
                        
                        for (let x in MyLocation.address){
                            if (MyLocation.address[x].includes("District")){
                                MyDataSuburbDistrict1+=MyLocation.address[x]
                                found = true
                                MyDistrict=MyLocation.address[x]
                                break
                            }
                        }
                        if (!found){
                            MyDataSuburbDistrict1+="Unknown"
                        }

                    }



                    document.querySelector("#MyDataSuburbDistrict").innerHTML = `${MyDataSuburbDistrict1}` //not yet finished
                    
                    if (MyDistrict){
                        for (x in rainfall_stations){
                            if (MyDistrict.includes(x) || x.includes(MyDistrict)){
                                document.querySelector("#MyDataRainfall").innerHTML = `<p>${rainfall_stations[x]}<sub>mm</sub></p><img src = "images/rain-48.png"></img>`
                                break
                            }
                        }
                    }

                    
                    fetch(`https://ogciopsi.blob.core.windows.net/dataset/weather-station/weather-station-info.json`)
                    .then(response => {
                        response.json().then(WeatherStationInfo => {

                            var closestWeatherStation = [Infinity,0]

                            for (let x of WeatherStationInfo ){


                                const alpha = (x.longitude-myLongitude)*(Math.PI/180)*Math.cos((x.latitude+myLatitude)*(Math.PI/180)/2)
                                const beta = (x.latitude-myLatitude)*(Math.PI/180)
                                const delta = Math.sqrt(alpha*alpha+beta*beta)*6371
                                if (delta<closestWeatherStation[0]){
                                    closestWeatherStation[0]=delta
                                    closestWeatherStation[1]=temperature_stations[x.station_name_en]
                                  
                                }
                                 

                            }

                            document.querySelector("#MyDataTemperature").innerHTML=`<p>${closestWeatherStation[1]}<sup>°C</sup></p>`
                                




                        })
                    })
                    .catch (err => {console.log("WeatherStationInfoError");});


                    fetch(`data/aqhi-station-info.json`)
                    .then(response => {
                        response.json().then(aqhiStationInfo => {

                            var closestAqhiStation = [Infinity,0,0]

                            for (let x of aqhiStationInfo ){


                                const garma = (x.lng-myLongitude)*(Math.PI/180)*Math.cos((x.lat+myLatitude)*(Math.PI/180)/2)
                                const sigma = (x.lat-myLatitude)*(Math.PI/180)
                                const omega = Math.sqrt(garma*garma+sigma*sigma)*6371
                                if (omega<closestAqhiStation[0]){
                                    closestAqhiStation[0]=omega
                                    closestAqhiStation[1]=aq_stations[x.station][0]
                                    closestAqhiStation[2]=aq_stations[x.station][1]
                                  
                                }
                                 

                            }
                            document.querySelector("#MyDataAQHI").innerHTML=`<img src = "images/aqhi-${closestAqhiStation[2].toLowerCase().split().join("_")}.png"></img><div><p id="aqhiNum">${closestAqhiStation[1]}</p><p id="aqhiWord">${closestAqhiStation[2]}<p></div>`
                             

                        })
                    })
                    .catch (err => {console.log("aqhiStationInfoError");});






           


                    

                })
            })
            .catch (err => {console.log("GeoError");});



            


            return 

        }

        function error(){
            output.innerHTML = "<p>Unable to retrieve your location</p>"
            return
        }

        navigator.geolocation.getCurrentPosition(success,error)
    
    
    }

    geoFindMe()


           
  


};
