(function () {

    APP.Views.CategoriesList = Backbone.View.extend({

        tagName: "ul",
        className: "app-items-list list-group",

        initialize: function (options) {

            this.options = options;
            this.listenTo(this.collection, "reset", this.render);

        },
        render: function () {



            this.collection.each(this.addOne, this);

            APP.Regions.appContent.append(this.el);

        },

        addOne: function (model) {

            var view = new APP.Views.CategoryListItem({ model: model });

            this.$el.append(view.render().el);

        }



    });


})()



