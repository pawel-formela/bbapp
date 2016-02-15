(function ($) {

    $.fn.pushStateLink = function () {

        if (!(Backbone.history && Backbone.history._hasPushState)) {
            return this;
        }

        return this.on("click", function (e) {

            var link = $(this),
                href = link.attr("href"),
                protocol = this.protocol + "//";
                
            console.log(link);
            console.log(href);
            console.log(protocol);
            
            if (href.slice(protocol.length) !== protocol) {
                e.preventDefault();

                Backbone.history.navigate(href, true);
            }

        });

    };

    $(document).ready(function () {

        $("a[pushstate-link]").pushStateLink();

    });

})(jQuery);