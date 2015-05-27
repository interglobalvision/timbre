/* ---------------------------------------------------- +/

## Helpers ##

Functions that need to be available both on the server and client. 

/+ ---------------------------------------------------- */

isEmpty = function(value) {
    if (value && value !== ''){
        return true;
    }
    return false;
};

isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    }
    return false;
};

isValidPassword = function(password) {
    if (password.length < 6) {
        return false;
    }
    return true;
};

areSimilarPasswords = function(password, confirm) {
    if (password !== confirm) {
        return false;
    }
    return true;
};