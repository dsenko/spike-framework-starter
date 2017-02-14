'import $this as app.modal.ConfirmDelete';

app.modal.register("ConfirmDelete", {

	init : function(data){

        $this.selector.close().click(function(e){
            e.preventDefault();
            $this.hide();
		});

        if(data.approveCallback){
            $this.selector.ok().click(function(e){
        		e.preventDefault();
                $this.hide();
                data.approveCallback();
			});
		}

	}


});