(function () {

    window.APP = {

        Models: {},
        Collections: {},
        Views: {},
        Routers: {},

        Regions: {
            appHeader: $(".app-header"),
            appContent: $(".app-content"),
            appSidebar: $(".app-content-sidebar")
        },

        ViewsInstances: {}
    }

    APP.showMainView = function (view) {

        if (APP.ViewsInstances.mainView) {
            APP.ViewsInstances.mainView.remove();

        }
        APP.ViewsInstances.mainView = view;

    }
})()  