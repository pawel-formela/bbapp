(function () {

    APP.Views.MovieEdit = Backbone.View.extend({

        tagName: "div",
        template: _.template($("#movieEditNewTemplate").html()),

        initialize: function () {

            this.listenToOnce(this.model, "change", this.render);

        },

        render: function () {
            var html = this.template(this.model.toJSON());

            this.$el.html(html);

            APP.Regions.appContent.html(this.el);
            this.stickit();

            console.log("RENDER");

        },
        bindings: {
            "#movie-title": "title",
            "#movie-date": "date",
            "#movie-description": "description",
            "#movie-quantity": "quantity"
        },
        events: {

            "submit form": "updateMovie"
        },
        updateMovie: function (e) { 
            e.preventDefault();
            this.model.save({wait:true});
        }


    });


})()



