(function () {

    APP.Views.ClientListItem = Backbone.View.extend({


        tagName: "li",
        className: "list-group-item",

        template: _.template($("#clientListItemTemplate").html()),

        render: function () {

            var html = this.template(this.model.toJSON());

            this.$el.html(html);

            return this;

        }



    });



})()


