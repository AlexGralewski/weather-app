(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=(a(14),a(4)),o=a(5),s=a(6),u=a(1),m=a(8),d=a(7);var h=function(e){var t=new Date(1e3*e),a=t.getHours(),n=t.getMinutes();return n<10&&(n="0"+n),a+":"+n};var f=function(e){return"01d"===e?l.a.createElement("i",{className:"fas fa-sun fa-5x"}):"01n"===e?l.a.createElement("i",{className:"fas fa-moon fa-5x"}):"02d"===e?l.a.createElement("i",{className:"fas fa-cloud-sun fa-5x"}):"02n"===e?l.a.createElement("i",{className:"fas fa-cloud-moon fa-5x"}):"03d"===e||"03n"===e||"04d"===e||"04n"===e?l.a.createElement("i",{className:"fas fa-cloud fa-5x"}):"09d"===e||"09n"===e?l.a.createElement("i",{className:"fas fa-cloud-showers-heavy fa-5x"}):"10d"===e?l.a.createElement("i",{className:"fas fa-cloud-rain fa-5x"}):"10n"===e?l.a.createElement("i",{className:"fas fa-cloud-moon-rain fa-5x"}):"11d"===e||"11n"===e?l.a.createElement("i",{className:"fas fa-bolt fa-5x"}):"13d"===e||"13n"===e?l.a.createElement("i",{className:"fas fa-snowflake fa-5x"}):"50d"===e||"50n"===e?l.a.createElement("i",{className:"fas fa-smog fa-5x"}):"No icon"};var p=function(e){var t=e.city,a=e.lat,n=e.long,r=e.currentTemp,c=e.currentDescription,i=e.currentIconId,o=e.currentSunrise,s=e.currentSunset,u=e.currentDisplay,m=f(i);return l.a.createElement("div",{className:"current-weather-display",style:{display:u}},l.a.createElement("div",{className:"current-title"},"Current weather:"),l.a.createElement("div",{className:"current-main"},l.a.createElement("div",{className:"current-temp"},r,"\xb0C"),l.a.createElement("div",{className:"current-weather"},l.a.createElement("div",{className:"current-icon"},m),l.a.createElement("div",{className:"current-description"},c),l.a.createElement("div",{className:"current-sunrise"},"Sunrise: ",o),l.a.createElement("div",{className:"current-sunset"},"Sunset: ",s))),l.a.createElement("button",null,"Go Back"),l.a.createElement("div",{className:"current-place"},l.a.createElement("div",{className:"current-lat-long"},"Latitude: ",a,", Longitude: ",n),l.a.createElement("div",{className:"current-city"},t)))},y=[{id:1,cityName:"warsaw",lat:"52.24",long:"21.02"},{id:2,cityName:"krak\xf3w",lat:"52.24",long:"21.02"},{id:3,cityNamePl:"\u0142\xf3d\u017a",lat:"52.24",long:"21.02"},{id:4,cityNamePl:"wroc\u0142aw",lat:"52.24",long:"21.02"},{id:5,cityNamePl:"pozna\u0144",lat:"52.24",long:"21.02"},{id:6,cityNamePl:"gda\u0144sk",lat:"52.24",long:"21.02"},{id:7,cityNamePl:"szczecin",lat:"52.24",long:"21.02"},{id:8,cityNamePl:"bydgoszcz",lat:"52.24",long:"21.02"},{id:9,cityNamePl:"lublin",lat:"52.24",long:"21.02"},{id:10,cityNamePl:"bia\u0142ystok",lat:"52.24",long:"21.02"},{id:11,cityNamePl:"katowice",lat:"52.24",long:"21.02"},{id:12,cityNamePl:"gdynia",lat:"52.24",long:"21.02"},{id:13,cityNamePl:"cz\u0119stochowa",lat:"52.24",long:"21.02"},{id:14,cityNamePl:"radom",lat:"52.24",long:"21.02"},{id:15,cityNamePl:"toru\u0144",lat:"52.24",long:"21.02"},{id:16,cityNamePl:"\u0142\xf3d\u017a",lat:"52.24",long:"21.02"}],g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={lat:"52.24",long:"21.02",city:"",country:"",part:"minutely,hourly",weatherApiKey:"692d3bd12adf77c08728b7324d9f2b14",weatherData:void 0,locationApiKey:"44f5f3ce977746e7ab89ddeae84b48d3",locationData:void 0,currentDisplay:"none",formsDisplay:"flex",returnButtonDisplay:"none"},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleLatLongSubmit=e.handleLatLongSubmit.bind(Object(u.a)(e)),e.handleCitySubmit=e.handleCitySubmit.bind(Object(u.a)(e)),e.handlePositionSubmit=e.handlePositionSubmit.bind(Object(u.a)(e)),e.handleReturnButton=e.handleReturnButton.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(i.a)({},a,n))}},{key:"handleLatLongSubmit",value:function(e){var t=this;e.preventDefault();var a="https://api.openweathermap.org/data/2.5/onecall?lat="+this.state.lat%180+"&lon="+this.state.long%180+"&exclude="+this.state.part+"&appid="+this.state.weatherApiKey;console.log(a);var n="https://api.opencagedata.com/geocode/v1/json?q="+this.state.lat%180+"+"+this.state.long%180+"&key="+this.state.locationApiKey;console.log(n),fetch(a).then((function(e){return e.json()})).then((function(e){t.setState({weatherData:e})})).catch((function(e){console.log(e)})),fetch(n).then((function(e){return e.json()})).then((function(e){t.setState({locationData:e})})).catch((function(e){console.log(e)})),this.setState({currentDisplay:"flex",formsDisplay:"none"})}},{key:"handleCitySubmit",value:function(e){var t,a=this;for(e.preventDefault(),t=0;t<y.length;t++)"warsaw"===y[t].city&&this.setState({lat:y[t].lat,long:y[t].long});var n="https://api.openweathermap.org/data/2.5/onecall?lat="+this.state.lat%180+"&lon="+this.state.long%180+"&exclude="+this.state.part+"&appid="+this.state.weatherApiKey;console.log(n),fetch(n).then((function(e){return e.json()})).then((function(e){a.setState({data:e})})).catch((function(e){console.log(e)}))}},{key:"handlePositionSubmit",value:function(e){e.preventDefault();var t=navigator.geolocation.getCurrentPosition((function(e){return console.log(e.coords.latitude),console.log(e.coords.longitude),[e.coords.latitude]}));console.log(t)}},{key:"handleReturnButton",value:function(e){console.log("ckicked"),e.preventDefault()}},{key:"render",value:function(){var e=this.state,t=e.city,a=e.lat,n=e.long,r=e.weatherData,c=e.locationData,i=e.currentDisplay,o=e.formsDisplay,s=e.returnButtonDisplay,u={};if(void 0!==r&&(u.temp=Math.round(r.current.temp-273.15),u.sunrise=h(r.current.sunrise),u.sunset=h(r.current.sunset),u.description=r.current.weather[0].description,u.iconId=r.current.weather[0].icon),console.log(u),void 0!==c)c.results[0].components.city,c.results[0].components.country;return l.a.createElement("div",{className:"weather-app"},l.a.createElement("div",{className:"forms",style:{display:o}},l.a.createElement("div",{className:"lat-long-form"},l.a.createElement("form",{onSubmit:this.handleLatLongSubmit},l.a.createElement("label",null,"Enter latitude:",l.a.createElement("br",null),l.a.createElement("input",{type:"number",step:"0.001",name:"lat",value:a,onChange:this.handleChange,required:!0})),l.a.createElement("label",null,"Enter longitude: ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",step:"0.001",name:"long",value:n,onChange:this.handleChange,required:!0})),l.a.createElement("button",null,"Get current weather"))),l.a.createElement("h1",null,"OR"),l.a.createElement("div",{className:"city-form"},l.a.createElement("form",{onSubmit:this.handleCitySubmit},l.a.createElement("label",null,"Enter a name of a city:",l.a.createElement("div",{className:"city-country-inputs"},l.a.createElement("input",{type:"text",name:"city",value:t,onChange:this.handleChange,required:!0}),l.a.createElement("select",{value:this.state.country,name:"country",onChange:this.handleChange,required:!0},l.a.createElement("option",{value:""},"Country"),l.a.createElement("option",{value:"poland"},"Poland"),l.a.createElement("option",{value:"england"},"England")))),l.a.createElement("button",null,"Get current weather"))),l.a.createElement("h1",null,"OR"),l.a.createElement("div",{className:"this-location-form"},l.a.createElement("button",{onClick:this.handlePositionSubmit},"Get current weather from your location"))),l.a.createElement(p,{city:t,lat:a,long:n,currentDisplay:i,currentTemp:u.temp,currentDescription:u.description,currentIconId:u.iconId,currentSunrise:u.sunrise,currentSunset:u.sunset}),l.a.createElement("button",{onClick:this.handleReturnButton,style:{display:s}},"Return"))}}]),a}(l.a.Component);var E=function(){return l.a.createElement("footer",null,l.a.createElement("div",null,"Developed by Aleksander Gralewski, 2020"),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("i",{className:"fab fa-linkedin-in"})))};var v=function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(E,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d82f3427.chunk.js.map