
app.filter('gender',function() {
	return function(gender){
		switch(gender){
			case 1 :
				return 'Male';
			case 2 :
				return 'Female';
			case 3 :
				return "Don't disclose";
		}
	}
})

.filter('name',function(){
	return function(name){
		var nm = name.charAt(0).toUpperCase();
		return nm+name.substring(1).toLowerCase();
	}
});