"use strict"

// Useful for showing index numbers starting from 1 instead of 0.
Handlebars.registerHelper("plusone", function(value, options) {
    return parseInt(value) + 1;
})