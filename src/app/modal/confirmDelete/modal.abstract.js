'import $router as app.router';

app.abstract.register("Modal", {

    /**
     * some import
     */
    bindCancel: function () {

        var self = this;

        self.selector.close().click(function (e) {
            e.preventDefault();
            self.hide();
        });

    },

    realizeOk: function (e) {
        e.preventDefault();
        this.hide();

        if (this.approveCallback) {
            this.approveCallback();
        }

    },

    /**
     * method
     * @param params
     */
    bindOk: function (params) {

        this.selector.ok().click(this.realizeOk.bind(this));

    }

});