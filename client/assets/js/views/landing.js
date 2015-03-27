"use strict"

var template = require("../../handlebars/landing.hbs")

module.exports = Backbone.View.extend({
    className: "landing",

    events: {},

    initialize: function (options) {
        this.$region = options.$region
        this.render()
    },

    render: function () {
        var html = template(APP.collections.person.toJSON())

        this.$el.html(html)
        this.$region.append(this.$el)

        return this
    }
})