(function () {

    APP.Routers.Router = Backbone.Router.extend({

        routes: {
            "": "showMoviesList",
            "movies": "showMoviesList",
            "actors": "showActorsList",
            "categories": "showCategoriesList",
            "clients": "showClientsList",

            "movie/:id": "showMovieDetails",
            "actor/:id": "showActorDetails",
            "category/:id": "showCategoryDetails",
            "client/:id": "showClientDetails",

            "movie/:id/edit": "showMovieEdit",
            "actor/:id/edit": "showActorEdit",
            
             "movies/new": "showMovieNew",
        },

        showMoviesList: function () {

            var movies = new APP.Collections.MoviesList(),
                view = new APP.Views.MoviesList({
                    collection: movies
                });

            APP.showMainView(view);

            movies.fetch({
                reset: true,
                data: { limit: 5 }
            })

            APP.Views.Navigation.highlight('movies');
        },

        showActorsList: function () {

            var actors = new APP.Collections.ActorsList(),
                view = new APP.Views.ActorsList({
                    collection: actors
                });

            APP.showMainView(view);

            actors.fetch({
                reset: true,
                data: { limit: 5 }
            })

            APP.Views.Navigation.highlight('actors');
        },

        showCategoriesList: function () {

            var categories = new APP.Collections.CategoriesList(),
                view = new APP.Views.CategoriesList({
                    collection: categories
                });

            APP.showMainView(view);

            categories.fetch({
                reset: true
            })

            APP.Views.Navigation.highlight('categories');
        },

        showClientsList: function () {

            var clients = new APP.Collections.ClientsList(),
                view = new APP.Views.ClientsList({
                    collection: clients
                });

            APP.showMainView(view);

            clients.fetch({
                reset: true
            })

            APP.Views.Navigation.highlight('clients');
        },

        showMovieDetails: function (id) {

            var movie = new APP.Models.Movie({ _id: id }),
                view = new APP.Views.MovieDetails({ model: movie });

            APP.showMainView(view);

            movie.fetch();

            APP.Views.Navigation.highlight("movies");

        },

        showActorDetails: function (id) {

            var actor = new APP.Models.Actor({ _id: id }),
                view = new APP.Views.ActorDetails({ model: actor });

            APP.showMainView(view);

            actor.fetch();

            APP.Views.Navigation.highlight("actors");

        },
        showCategoryDetails: function (id) {

            var category = new APP.Models.Category({ _id: id }),
                view = new APP.Views.CategoryDetails({ model: category });

            APP.showMainView(view);

            category.fetch();

            APP.Views.Navigation.highlight("categories");

        },

        showClientDetails: function (id) {

            var client = new APP.Models.Client({ _id: id }),
                view = new APP.Views.ClientDetails({ model: client });

            APP.showMainView(view);

            client.fetch();

            APP.Views.Navigation.highlight("clients");

        },

        showMovieEdit: function (id) {


            var movie = new APP.Models.Movie({ _id: id }),
                view = new APP.Views.MovieEdit({ model: movie });

            APP.showMainView(view);

            movie.fetch();

            APP.Views.Navigation.highlight("movies");

        },
        
        showActorEdit: function (id) {


            var actor = new APP.Models.Actor({ _id: id }),
                view = new APP.Views.ActorEdit({ model: actor });

            APP.showMainView(view);

            actor.fetch();

            APP.Views.Navigation.highlight("actors");

        },
        
        
        showMovieNew: function (id) {


            var movie = new APP.Models.Movie(),
                view = new APP.Views.MovieNew({ model: movie });

            APP.showMainView(view);

        },


    })


})();