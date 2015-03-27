"use strict"

// Handle initializing of any sub-view.
Backbone.View.prototype.newChildView = function (View, options) {
    // A private wrapper that acts like JO's activeViews wrapper.
    this.__childViews = this.__childViews || []
    this.__childViews.push(new View(options))
}

// Remove all subscriptions and DOM event handlers of a view.
Backbone.View.prototype.close = function () {
    // Close sub-views, a recursive call.
    if (this.__childViews && this.__childViews.length)
        for (var i = 0; i < this.__childViews.length; i++)
            this.__childViews[i].close()
    this.__childViews = []

    // Destroy.
    this.$el.remove()
    this.undelegateEvents()
    this.stopListening()
    this.unbind()
}