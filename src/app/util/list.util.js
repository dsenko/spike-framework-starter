app.util.register("List", {

    findByProperty: function(array, property, value){

        if(!array || !property){
            return null;
        }

        for(var i = 0; i < array.length; i++){

            if(array[i][property] === value){
                return array[i];
            }

        }

        return null;

    },

    findIndexByProperty: function(array, property, value){

        if(!array || !property){
            return null;
        }

        for(var i = 0; i < array.length; i++){

            if(array[i][property] === value){
                return i;
            }

        }

        return -1;

    },

    removeFromList: function(array, index){

        var newArr =[];

        for(var i = 0; i < array.length; i++){

            if(i !== index){
                newArr.push(array[i]);
            }

        }


        return newArr;

    }

});