            
    /*            const clientId = 'PU3IY1PZEOOANTPSHKNMS5HFSMEGEQ1IAVJYGYM4YVZP3NGD';
    const clientSecret = '0V21IXU0EETE3SZJGGCP4T4R13NUTBJ0LMI5WQY45IMDPEKY';
    const url = 'https://api.foursquare.com/v2/venues/explore?near=';
                */            
    var url= 'https://api.foursquare.com/v2/venues/explore';
    var clientID = '0LXGDDPHKC2PIIXS2GX3YZ20AV4QW0WCSLHSS5KWDRLWIYUR';
    var clientSecret = 'HURDRSKPY0EOLLWJ3DZRD1AOIVMEJGBISQIU201200COOYM1';
    var limit = 10;
    var boba = 'boba';
                
    var foursquare = new Vue({                
        el: '#foursquare',                
        data: {                    
            message: 'Hello Vue!',  
            cityQuery: 'boston',   
            radiuskm: 10,      //The maximum supported radius is currently 100,000 meters         
            venues: []                
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
        }                
    })        
