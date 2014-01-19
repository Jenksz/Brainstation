// my jQuery Functions

 $(document).ready(function(){
 	
 	/** Examples
	$("li").first().next().text("1000");

		$("a").click(function(event){
			alert("Thanks for visiting!");
			event.preventDefault();
		});

		$("a").addClass("test");

		$("a").removeClass("test");
	*/

		$("a").click(function(event) {
			event.preventDefault();
			$(this).hide("fast");
		});

	});
