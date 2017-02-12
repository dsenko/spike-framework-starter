app.modal.register("ConfirmDelete", {

	init : function(data){

        this.selector.close().click(function(e){
            e.preventDefault();
			app.modal.ConfirmDelete.hide();
		});

        if(data.approveCallback){
        	this.selector.ok().click(function(e){
        		e.preventDefault();
                app.modal.ConfirmDelete.hide();
                data.approveCallback();
			});
		}

	}


});