//Initial array of topics
var topics = ["Jimmy Fallon", "Tina Fey", "Justin Timberlake"];

function createButtons() {

	//Delete the content inside the buttons div before adding new buttons
	$(".buttons").empty();

	//Loop through the array of topics, then generate buttons for each topic in the array
	for (var i = 0; i < topics.length; i++){

		var topicBtn = $('<button>');

		//Adding a class of topic to our button

		//topicBtn.addClass("topic");

		topicBtn.click(displayTopicInfo);

		//Adding a data-attribute
		topicBtn.attr("data-name", topics[i]);

		topicBtn.text(topics[i]);

		$(".buttons").append(topicBtn);
		
	};
};

//This function handles events where the add topic button is clicked
$("#add-topic").on("click", function(event){

	//event.preventDefault() prevents submit button from trying to send a form.
	//Using a submitbutton instead of a regular button allows the user to hit
	//"Enter" instead of clicking the button if desireds
	event.preventDefault();

	//This grabs the text the user types in the input field
	newTopic = $("#topic-input").val().trim();

	//This adds the new topic to the topics array
	topics.push(newTopic);

	//The createButtons fuction is called, creatinging the list of topic buttons
	createButtons();

	$("#topic-input").val("");
	
});

//Calling the createButtons function to display the inital list of topics
createButtons();

function displayTopicInfo(){

	var topic = $(this).attr("data-name");	
	var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=bfDdf2nFss4QgroeR65LlzOJuHXPD2c0&limit=10";

	$.ajax({
		url:queryURL,
		method: 'GET'
	}).done(function(response) {

 		var results = response.data;
 		console.log(results[0].images);

 		$(".gifs").empty();

 		for (var i = 0; i < results.length; i++) {
			
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

			var gif = $("<img>").attr("src", gifURL)
			.attr("data-animate", animateURL)
			.attr("data-still", stillURL)
			.attr("data-state", "still");

			//Appending the gif
			topicDiv.append(gif);
			topicDiv.append(ratingDiv);

			//Appending the topicDiv and ratingDiv to the gifs div
			$(".gifs").append(topicDiv);

		};

	function animateGif() {

		$("img").on("click", function(){

			var state = $(this).attr("data-state");

			if (state === "still"){
				$(this).attr("src", $(this).attr("data-animate"));
				$(this).attr("data-state", "animate");

			} else {

				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");
			};
		});
	};

	animateGif();

	});

};

	
