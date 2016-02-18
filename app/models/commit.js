"use strict";

class Commit {
    constructor(owner, commitUser, timeStamp, code) {
        this._owner = owner;
        this._commitUser = commitUser;
        this._timeStamp = timeStamp;
        this._code = code;       
    }
    
     set owner(value) {
        if (!value) {
          throw Error('Owner must have a value');
        }
        if (typeof value !== 'string') {
          throw Error('Owner must be of string type');
        }
        this._owner = value;
    }
    
     set commitUser(value) {
        if (!value) {
          throw new Error('CommitUser must have a value');
        }
        if (typeof value !== 'string') {
          throw Error('CommitUser must be of string type');
        }
        this._commitUser = value;
    }
    
     set timeStamp(value) {
        if (!value) {
          throw new Error('TimeStamp must have a value');
        }
        if (typeof value !== 'date') {
          throw Error('TimeStamp must be of date type');
        } 
        this._timeStamp = value;
    }
    
     set code(value) {
        if (!value) {
          throw new Error('Code must have a value');
        }
         if (typeof value !== 'string') {
          throw new Error('Code must be of string type');
        }
        this._code = value;
    }
    
}
module.exports = Commit;
