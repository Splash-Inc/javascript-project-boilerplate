"use strict"

var LandingView = require("../views/landing")
var PersonView = require("../views/person")

module.exports = {

    landing: function () {
        APP.newView(LandingView, {
            $region: APP.$content
        })
    },

    person: function (uid) {
        var PersonModel = APP.collections.person.findWhere({uid: uid})

        APP.newView(PersonView, {
            $region: APP.$content,
            model: PersonModel
        })
    }

}