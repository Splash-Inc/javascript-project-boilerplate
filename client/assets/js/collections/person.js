"use strict"

var PersonModel = require("../models/person")

module.exports = Backbone.Collection.extend({
    comparator: "uid",

    model: PersonModel,

    fetched: false,

    initialize: function () {},

    getPersons: function () {
        if (this.fetched)
            return false

        this.fetched = true

        var _this = this

        return Driver.getPersons().done(function (person) {
            _this.add(person)
        })
    }
})