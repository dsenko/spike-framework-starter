app.component.register("Spinner", {

    global: true,

    init: function () {
    },

    show: function(){
        this.selector.spinner().show();
    },

    hide: function(){
        this.selector.spinner().hide();
    }

});
