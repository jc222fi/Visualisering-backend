"use strict";
class User {
    
    constructor(userName, city, lat, long) {
        this._userName = userName;
        this._city = city;
        this._lat = lat;
        this._long = long;       
    }
    
    set userName(value) {
        if (!value) {
          throw Error('Username must have a value');
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
