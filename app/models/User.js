"use strict";
class User {
    constructor(userName, city, lat, long) {
        if(userName && city && lat && long){
            this.userName = userName;
            this.city = city;
            this.lat = lat;
            this.long = long;
        }else{
            throw new Exeption();
        }
    }
    
    set userName(value) {
        if (!value) {
          throw new Error('Username must have a value');
        }
        this._userName = value;
    }
    
     set city(value) {
        if (!value) {
          throw new Error('City must have a value');
        }
        this._city = value;
    }
    
     set lat(value) {
        if (!value || typeof value !== 'number') {
          throw new Error('Latitude must have a numeric value');
        }
        this._lat = value;
    }
    
     set long(value) {
        if (!value || typeof value !== 'number') {
          throw new Error('Longitude must have a numeric value');
        }
        this._long = value;
    }
}

module.exports = User;

/*var User = function(userName, city, lat, long){
    if(userName && city && lat && long){
            this.userName = userName;
            this.city = city;
            this.lat = lat;
            this.long = long;
    }else{
        throw new Exeption();
    }
};

module.exports = User;*/


//Så här skapar man en ny instans från en annan fil
//import MyClass from 'MyClass';
//const inst = new MyClass();
