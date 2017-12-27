//Initial array of searches
var searches = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

function renderButtons() {
	//Delete the content inside the search-view div before adding new movies
	$("#searches-view").empty();

	//Loop through the array of searches, then generate buttons for each search in the array
	for (var i = 0; i < searches.length; i++){

		var searchBtn = $('<button>');

		//Adding a class of dearch to our button
		searchBtn.addClass("search");
		searchBtn.click(displaySearchInfo);
		//Adding a data-attribute
		searchBtn.attr("data-name", searches[i]);

		searchBtn.text(searches[i]);

		$("#searches-view").append(searchBtn);
	};



};



//This function handles events wehre the add search button is clicked
$("#add-search").on("click", function(event){

	//event.preventDefault() prevents submit button from trying to send a form.
	//Using a submitbutton instead of a regular button allows the user to hit
	//"Enter" instead of clicking the button if desired
	event.preventDefault();

	//This grabs the text the user types in the input field
	search = $("#search-input").val().trim();

	//This adds the new search to the searches array
	searches.push(search);

	//The renderButtons fuciont is called, rendering the list of search buttons
	renderButtons();
});

//Calling the renderButtons function to display the inital list of searches
renderButtons();



function displaySearchInfo(){

	var search = $(this).attr("data-name");	
	var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=bfDdf2nFss4QgroeR65LlzOJuHXPD2c0&limit=10";

	$.ajax({
		url:queryURL,
		method: 'GET'
	}).done(function(response) {
 		console.log(response.data[0]);




	});

};


	// //creating a div to hold the search
	// var searchDiv = $("<div class='search'>");

	// //Storing the rating data
	// var rating =  response.rating;

	// //Creating an element to have the rating displyed
	// var pOne = $("<p>").text("Rating: " + rating);

	// //Display the rating
	// searchDiv.append(pOne);

	// //Retrieving the URL for the gif
	// var gifURL = response;
