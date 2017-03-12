'import $this as app.modal.ConfirmDelete';

app.modal.register("ConfirmDelete", {

    inherits: [
        app.abstract.Modal
    ],

	init : function(params){

        app.log('modal rootSelector');
        console.log($this.rootSelector());

        $this.approveCallback = params.approveCallback;

        $this.bindCancel();
        $this.bindOk();

	}


});