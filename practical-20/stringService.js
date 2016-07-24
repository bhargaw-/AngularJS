app.factory('stringService', function(){
	return {
		processString : function(input){
			return "Custom service example "+input;
		}
	}
});
