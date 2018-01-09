//Initial array of topics
var topics = ["Jimmy Fallon", "Tina Fey", "Justin Timberlake"];

function activeBtn() {
<<<<<<< HEAD
=======

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
	$(".topic").click(function(){
		$('.topic').removeClass("active")
		$(this).addClass("active");	
	});
};

function createButtons() {
<<<<<<< HEAD
=======

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
	//Delete the content inside the buttons div before adding new buttons
	$(".buttons").empty();

	//Loop through the array of topics, then generate buttons for each topic in the array
	for (var i = 0; i < topics.length; i++){
<<<<<<< HEAD
=======

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
		var topicBtn = $('<button>');

		//Adding a class of topic to our button
		topicBtn.addClass("topic");

		topicBtn.click(displayTopicInfo);

		//Adding a data-attribute
		topicBtn.attr("data-name", topics[i])

		topicBtn.text(topics[i]);

		$(".buttons").append(topicBtn);	
	};

	activeBtn();
};

//This function handles events where the add topic button is clicked
$("#add-topic").click(function(event){
<<<<<<< HEAD
=======

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
	//event.preventDefault() prevents submit button from trying to send a form.
	//Using a submit button instead of a regular button allows the user to hit
	//"Enter" instead of clicking the button if desireds
	event.preventDefault();

	//This grabs the text the user types in the input field
	newTopic = $("#topic-input").val().trim();
	// newTopic = $('<button>');

	if (newTopic !== '') {
<<<<<<< HEAD
=======

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
		var newBtn = $('<button>');

		//Adding a class of topic to our button
		newBtn.addClass("topic");

		newBtn.click(displayTopicInfo);

		//Adding a data-attribute
		newBtn.attr("data-name", newTopic)

		newBtn.text(newTopic);	

		$(".buttons").append(newBtn);

		$("#topic-input").val("");

		activeBtn();
	};
});

//Calling the createButtons function to display the inital list of topics
createButtons();

function displayTopicInfo(){
<<<<<<< HEAD
	var topic = $(this).attr("data-name");	
	var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=bfDdf2nFss4QgroeR65LlzOJuHXPD2c0&limit=10";
=======

	var topic = $(this).attr("data-name");	
	var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=bfDdf2nFss4QgroeR65LlzOJuHXPD2c0&limit=10";

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
	$.ajax({
		url:queryURL,
		method: 'GET'
	}).done(function(response) {
<<<<<<< HEAD
 		var results = response.data;
 		$(".gifs").empty();

 		for (var i = 0; i < results.length; i++) {
=======

 		var results = response.data;

 		$(".gifs").empty();

 		for (var i = 0; i < results.length; i++) {
			
>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
			//creating a div to hold the topic
			var topicDiv = $("<div class='topic'>");

			//Storing the rating data
			var rating =  response.data[i].rating;

			//Creating an element to have the rating displyed
			var ratingDiv = $("<p>").text("Rating: " + rating);

			//Retrieving and storing the URLs for the gifs 
			var gifURL = response.data[i].images.fixed_height_still.url;
			var animateURL= response.data[i].images.original.url;
			var stillURL = response.data[i].images.fixed_height_still.url;

<<<<<<< HEAD
			//Giving gifs data-state attributes
=======
>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
			var gif = $("<img class='gifImg'>").attr("src", gifURL)
			.attr("data-animate", animateURL)
			.attr("data-still", stillURL)
			.attr("data-state", "still");

			//Appending the gif
			topicDiv.append(gif);
			topicDiv.append(ratingDiv);

			//Appending the topicDiv and ratingDiv to the gifs div
			$(".gifs").append(topicDiv);
<<<<<<< HEAD
		};

	function animateGif() {
		$(".gifImg").click(function(){
			var state = $(this).attr("data-state");

			//If data-state is still reset to animiate
			if (state === "still"){
				$(this).attr("src", $(this).attr("data-animate"));
				$(this).attr("data-state", "animate");
			//If data-state is not still reset to still
			} else {
=======

		};

	function animateGif() {

		$(".gifImg").click(function(){

			var state = $(this).attr("data-state");

			if (state === "still"){
				$(this).attr("src", $(this).attr("data-animate"));
				$(this).attr("data-state", "animate");

			} else {

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");
			};
		});
	};
<<<<<<< HEAD
	animateGif();
=======

	animateGif();

>>>>>>> 040d3600a7900160f96e69003550cd216b9097e6
	});
};


