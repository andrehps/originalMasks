angular.module("ui.original.masks").directive("uiOriginalCpf", ['Formatters', 'Validators',function(Formatters, Validators){
    var subject = "cpf"; 
	
	return {
        restrict:"A",
        require: '?ngModel',
        link: function(scope, elm, attrs, ctrl) {
            elm.bind("keyup", function(){
                var value = Formatters.clean(ctrl.$viewValue);
                var isValid = Validators[subject](value);
                
                ctrl.$setViewValue(Formatters[subject](value));
                ctrl.$render();
                
                scope.$apply(function(){
                    scope[attrs.validateModel] = isValid;   
                });
            });
        }
     };
}]);