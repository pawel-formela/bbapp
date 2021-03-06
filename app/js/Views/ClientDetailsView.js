(function () {

    APP.Views.ClientDetails = Backbone.View.extend({

        tagName: "div",

        template: _.template($("#clientDetailsTemplate").html()),

        initialize: function () {

            this.listenTo(this.model, "change", this.render);

        },

        render: function () {

            var html = this.template(this.model.toJSON());

            this.$el.append(html);

            APP.Regions.appContent.html(this.el);

        }

    });

})();