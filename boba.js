var url= 'https://api.foursquare.com/v2/venues/explore';
var clientID = '0LXGDDPHKC2PIIXS2GX3YZ20AV4QW0WCSLHSS5KWDRLWIYUR';
var clientSecret = 'HURDRSKPY0EOLLWJ3DZRD1AOIVMEJGBISQIU201200COOYM1';
var limit = 10;
var boba = 'boba';

const openWeatherKey = '45dc1d2e92f646d108fe518401d1e210';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
var date= new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
            
var foursquare = new Vue({                
    el: '#foursquare',                
    data: {                    
        message: 'Hello Vue!',  
        cityQuery: 'boston',   
        radiuskm: 10,      //The maximum supported radius is currently 100,000 meters         
        venues: [],
        weather: [],
        icon: ''              
    },                
    methods: {                    
        //search location 
        searchBoba: function(){
            var endpoint = `${url}?client_id=${clientID}&client_secret=${clientSecret}&limit=${limit}&near=${this.cityQuery}&v=20210217&radius=${this.radiuskm*1000}&query=${boba}&sortByPopularity=0&openNow=0`;    
            fetch(endpoint)                    
            .then(response => response.json())                    
            .then(json => { 
                const venues = json.response.groups[0].items.map(item => item.venue);                           
                console.log(venues);                      
                this.venues = venues; 
            })
            


        },
        getWeather: function(){
            const urlToFetch = `${weatherUrl}?&q=${this.cityQuery}&APPID=${openWeatherKey}`;
            fetch(urlToFetch)                    
            .then(response => response.json())                    
            .then(json => { 
                console.log(json); 
                this.weather=json;                     
            })
        },
        kelvinToFahrenheit: function(k) {
            return ((k - 273.15) * 9 / 5 + 32).toFixed(1);
        },
        kelvinToCelsius: function(k) {
            return ((k - 273.15).toFixed(1));
        }
    },                
    created() {
        var endpoint = `${url}?client_id=${clientID}&client_secret=${clientSecret}&limit=${limit}&near=${this.cityQuery}&v=20210217&radius=${this.radiuskm*1000}&query=${boba}&sortByPopularity=0&openNow=0`;    
        fetch(endpoint)                    
        .then(response => response.json())                    
        .then(json => {                        
            const venues = json.response.groups[0].items.map(item => item.venue);
                       
            console.log(venues);
                        
            this.venues = venues;            
        })                
        var urlToFetch = `${weatherUrl}?&q=${this.cityQuery}&APPID=${openWeatherKey}`;
            fetch(urlToFetch)                    
            .then(response => response.json())                    
            .then(json => { 
                console.log(json);   
                this.weather=json; 
                this.icon=`https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`                    
                   
            })
    }                
})        
