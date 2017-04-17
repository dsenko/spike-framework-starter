'import $this as app.modal.ConfirmDelete';

app.modal.register("ConfirmDelete", {

    inherits: [
        app.abstract.Modal
    ],

	init : function(params){

        $this.approveCallback = params.approveCallback;

        $this.bindCancel();
        $this.bindOk();

	}


});