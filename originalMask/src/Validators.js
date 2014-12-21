angular.module("ui.original.masks").service("Validators", function(){
    return {
    	
    	 //this cut off the most common invalid
    	commonValid: function (value, size) {
    		if (value.length != size) {		
    			return false;
    		}
    		
    		for (var j = 0; j < 9; j++) {
    			var pattern = "";
    			for (var i = 0; i < size; i ++) {
    				pattern += j;
        		}
    			
    			if (value == pattern) {
    				return true;
    			}
    		}
    	},
    
        cpf: function(documentNumber) {
    	   
        	var size = 11;
        	
    	    if (this.commonValid(documentNumber, size)) {
    	        return false;
    	    }
    	    
    	    var cpf = [];
    	    var resultP = 0;
    	    var resultS = 0;

    	    for (var i = 0; i < documentNumber.length; i++) {
    	        cpf[i] = parseInt(documentNumber.substring(i, i + 1));
    	    }
    	    for (var i = 0; i < 9; i++) {
    	        resultP += cpf[i] * (i + 1);
    	    }
    	    var divP = resultP % 11;
    	    divP = divP > 9 ? 0 : divP;

    	    if (divP != cpf[9]) {
    	        return false;
    	    } else {
    	        for (var i = 0; i < 10; i++) {
    	            resultS += cpf[i] * (i);
    	        }
    	        var divS = resultS % 11;
    	        divS = divS > 9 ? 0 : divS;

    	        if (divS != cpf[10]) {
    	            return false;
    	        }
    	    }
    	    return true;
    	}
    };    
});

