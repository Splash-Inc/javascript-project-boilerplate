"use strict"

var RouteController = require("./controllers/route")

module.exports = Backbone.Router.extend({

    routes: {
        "": "landing",
        "person/:uid": "person"
    },

    preRoute: function(callback) {
        APP.destroyViews()
        APP.checkPrerequisites()
            .then(callback)
    },

    postRoute: function() {},

    route: function(route, name, callback) {
        var router = this

        if (!callback)
            callback = this[name]

        var f = function() {
            var args = arguments
            router.preRoute(function () {
                callback.apply(router, args)
                router.postRoute()
            })
        }
        return Backbone.Router.prototype.route.call(this, route, name, f)
    },

    landing: function () {
        RouteController.landing()
    },

    person: function (uid) {
        RouteController.person(uid)
    }

})