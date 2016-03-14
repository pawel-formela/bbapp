(function () {

    APP.Views.ActorEdit = Backbone.View.extend({

        tagName: "div",
        template: _.template($("#actorEditNewTemplate").html()),
        
        initialize: function () {
            this.listenToOnce(this.model, "change", this.render);
        },

        render: function () {
            var html = this.template(this.model.toJSON());

            this.$el.html(html);

            APP.Regions.appContent.html(this.el);

            this.stickit();
        },
          bindings: {
            "#actor-name": "name"
        },

        events: {
            "submit form": "updateActor"
        },
        updateActor: function (e) { 
            e.preventDefault();
            this.model.save({},{wait:true});
        }

    
    });

})();