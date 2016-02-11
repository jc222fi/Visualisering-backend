"use strict";
export class User {
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
}
//
//var User = function(userName, city, lat, long){
//    if(userName && city && lat && long){
//            this.userName = userName;
//            this.city = city;
//            this.lat = lat;
//            this.long = long;
//    }else{
//        throw new Exeption();
//    }
//};
//
//module.exports = User


//Så här skapar man en ny instans från en annan fil
//import MyClass from 'MyClass';
//const inst = new MyClass();

