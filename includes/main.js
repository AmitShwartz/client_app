$('#get').click(function(){
	var a = $(':input').serializeArray();
  	$.get("http://localhost/service_calculator/calculate.php/",
					a,
					function( data ) {
						 $(".result").text(data.retVal);
						 console.log( "Return data: " + data.retVal);
					});
});

$('#post').click(function(){
	var a = $(':input').serializeArray();
  	$.post("http://localhost/service_calculator/calculate.php/",
					a,
					function( data ) {
						 $(".result").text(data.retVal);
						 console.log( "Return data: " + data.retVal);
					});
});

$('#put').click(function(){
	var a = $(':input').serializeArray();
	$.each(a, function( i, key ) {
		if(key.name == "a[func]")
			key.name = "func";
		else
			key.name = "num"+i;
	});
  	$.ajax({
	    url: 'http://localhost/service_calculator/calculate.php/',
	    data: a,
	    type: 'PUT',
	    success: function(data){
	        $(".result").text(data.retVal);
	        console.log("Return data: " + data.retVal);
	    }
	});
});
		     

