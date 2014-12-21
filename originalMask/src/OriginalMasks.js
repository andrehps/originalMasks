(function(){

	angular.module("ui.original.masks", []);

	var masks = [{subject:"cpf", size:11 }
	, {subject:"cpf", size:11 }
	, {subject:"rg", size:9 }
	, {subject:"cnpj", size:14 }
	, {subject:"email", size:null }
	];
	
	var defaultPrefix = "uiOriginal";

	for (var i = 0; i < masks.length; i++) {
		
		var directiveName = defaultPrefix+masks[i].subject;
		
		angular.module("ui.original.masks").directive(directiveName, ['Formatters', 'Validators',function(Formatters, Validators){
			return {
				restrict:"A",
				require: '?ngModel',
				link: function(scope, elm, attrs, ctrl) {
					elm.bind("keyup", function(){
						var value = Formatters.clean(ctrl.$viewValue);
						var isValid = Validators[masks[i]](value, masks[i].size);

						ctrl.$setViewValue(Formatters[masks[i].subject](value, masks[i].size));
						ctrl.$render();

						scope.$apply(function(){
							scope[attrs.validateModel] = isValid;   
						});
					});
				}
			};
		}]);
	}

})();
