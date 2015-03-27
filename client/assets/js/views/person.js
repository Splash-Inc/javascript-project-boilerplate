"use strict"

var template = require("../../handlebars/person.hbs")

module.exports = Backbone.View.extend({
    className: "person",

    events: {},

    initialize: function (options) {
        this.$region = options.$region
        this.model = options.model

        this.render()
    },

    render: function () {
        var html = template(this.model.toJSON())

        this.$el.html(html)
        this.$region.append(this.$el)

        return this
    }
})