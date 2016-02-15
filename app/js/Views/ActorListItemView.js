(function () {

    APP.Views.ActorListItem = Backbone.View.extend({


        tagName: "li",
        className: "list-group-item",

        template: _.template($("#actorListItemTemplate").html()),

        render: function () {

            var html = this.template(this.model.toJSON());

            this.$el.html(html);

            return this;

        }



    });



})()


