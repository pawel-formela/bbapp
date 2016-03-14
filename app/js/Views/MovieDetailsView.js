(function () {

    APP.Views.MovieDetails = Backbone.View.extend({

        tagName: "div",

        template: _.template($("#movieDetailsTemplate").html()),

        initialize: function () {

            this.listenTo(this.model, "change", this.render);

        },

        render: function () {

            var html = this.template(this.model.toJSON());

            this.$el.append(html);

            APP.Regions.appContent.html(this.el);

        },
        
        events: {
            "click .edit": "showEdit"

        },
        
        showEdit: function () {

            APP.router.navigate("/movie/" + this.model.get("_id") + "/edit", { trigger: true });

        }

    });

})();