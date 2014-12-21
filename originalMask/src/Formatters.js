angular.module("ui.original.masks").service("Formatters", function(){
    return {
    	clean: function(value) {
            return value.replace(/[^0-9]/g, "");
        },
        
        mask: function (subject) {
        	//do the regex to mask in the generic way all of data
        },
        
        cpf: function (number, size) {
        	//it will fix the error when the user holds number key, and the browser prints out 14 numbers.
        	// it, turns in just 11 numbers again, because the maxlength is 14 WITH dots.
        	if (number.length > size) {
        		number = number.substring(0,size);
        	}
        	
            number = number.replace(/(\d{3})(\d)/,"$1.$2");    //puts dot between 3 and 4
            number = number.replace(/(\d{3})(\d)/,"$1.$2");    //puts dot between 7 and 8
            number = number.replace(/(\d{3})(\d)/,"$1-$2");   //puts dot between 11 and 12
            return number;
        }
    };
                 
});