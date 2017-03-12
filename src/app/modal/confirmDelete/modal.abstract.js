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

        if ($super.approveCallback) {
            $super.approveCallback();
        }

    },

    /**
     * method
     * @param params
     */
    bindOk: function (params) {

        $super.selector.ok().click($super.realizeOk);

    }

});