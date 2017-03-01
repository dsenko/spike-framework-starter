'import $router as app.router';

app.abstract.register("Modal", {

    bindCancel: function(){

        $super.selector.close().click(function(e){
            e.preventDefault();
            $super.hide();
        });

    },

    bindOk: function(params){

        if(params.approveCallback){

            $super.selector.ok().click(function(e){
                e.preventDefault();
                $super.hide();
                params.approveCallback();
            });


        }

    }

});