"use strict"
// Extend prototypes, register helpers etc.
require("./extensions")

var Router = require("./router")
var PersonCollection = require("./collections/person")

var APP = (function() {

    function checkPrerequisites () {
        /*
        var fooDependency = new $.Deferred()
        fooDependency.resolve()

        var barDependency = new $.Deferred()
        barDependency.resolve()

        var dependentOnFooAndBar = new $.Deferred()
        dependentOnFooAndBar.resolve()

        return $.when(fooDependency, barDependency)
            .then(dependentOnFooAndBar)
        */

        return $.when(personCollection.getPersons())
    }

    function prepareRegions (list) {
        var _regs = {}, i = 0
        for (i; i < list.length; i++)
            _regs["$" + list[i]] = $("[data-appregion='" + list[i] + "']")

        return _regs
    }

    function destroyViews () {
        for (var i = 0; i < activeViews.length; i++)
            activeViews[i].close()
        activeViews = []
    }

    /* Wrapper for declaring view initializations.
     * Use always this wrapper when instantiating a new view. */
    function newView (View, options) {
        activeViews.push(new View(options))
    }

    var activeViews = []

    var regions = prepareRegions([
        "content", "header",
        "footer", "sidebar"
    ])

    var personCollection = new PersonCollection()

    return $.extend({

        checkPrerequisites: checkPrerequisites,

        destroyViews: destroyViews,

        newView: newView,

        router: new Router(),

        collections: {
            person: personCollection
        }

    }, regions);

})()

global.APP = APP

Backbone.history.start()

module.exports = APP