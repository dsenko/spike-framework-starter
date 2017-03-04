'import $router as app.router';

app.abstract.register("Modal", {

    /**
     * some import
     */
    bindCancel: function () {

        $super.selector.close().click(function (e) {
            e.preventDefault();
            $super.hide();
        });

    },

    realizeOk: function (e) {
        e.preventDefault();
        $super.hide();
        params.approveCallback();
    },

    /**
     * method
     * @param params
     */
    bindOk: function (params) {

        if (params.approveCallback) {
            $super.selector.ok().click($super.realizeOk.bind($super));
        }

    }

});