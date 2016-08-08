/*	HTML5 attribute boolean demo
******************************************************/
$(document).on("click", "a[data-loggedin]", function(){
	var outputlist = $("#output-list");

	var item = $(this);
	var loggedin = item.data().loggedin;

	if(loggedin)
	{
		var listitem = $("<li>Clicked Logged In Button</li>");
		outputlist.prepend(listitem);
	}	
	else
	{
		var listitem = $("<li>Clicked NOT Logged In Button</li>");
		outputlist.prepend(listitem);
	}
})


/*	HTML5 attribute number demo
******************************************************/
$(document).on("click", "button[data-count]", function(){
	var outputlist = $("#output-list");

	var button = $(this);
	var count = button.data().count;
	button.data().count = count + 1;

	var listitem = $("<li>" + button.text() + " new count: " + button.data().count + " </li>");
	outputlist.prepend(listitem);
})