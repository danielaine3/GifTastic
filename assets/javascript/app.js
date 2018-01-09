//Initial array of topics
var topics = ["Jimmy Fallon", "Tina Fey", "Justin Timberlake"];

function activeBtn() {
	$(".topic").click(function(){
		$('.topic').removeClass("active")
		$(this).addClass("active");	
	});
};

function createButtons() {
	//Delete the content inside the buttons div before adding new buttons
	$(".buttons").empty();
	//Loop through the array of topics, then generate buttons for each topic in the array
	for (var i = 0; i < topics.length; i++){
		var topicBtn = $('<button>');
		//Adding a class of topic to our button
		topicBtn.addClass("topic");
		//When topicBtn clicked run displayTopicInfo function
		topicBtn.click(displayTopicInfo);
		//Adding a data-attribute
		topicBtn.attr("data-name", topics[i]);
		topicBtn.text(topics[i]);
		//Add topic button to end of buttons div
		$(".buttons").append(topicBtn);	
	};
	activeBtn();
};

//This function handles events where the add topic button is clicked
$("#add-topic").click(function(event){
	//event.preventDefault() prevents submit button from trying to send a form.
	//Using a submit button instead of a regular button allows the user to hit
	//"Enter" instead of clicking the button if desireds
	event.preventDefault();
	//This grabs the text the user types in the input field
	newTopic = $("#topic-input").val().trim();
	//If newTopic is not blank
	if (newTopic !== '') {
		//Set newBtn variable up as a button
		var newBtn = $('<button>');
		//Adding a class of topic to our button
		newBtn.addClass("topic");
		newBtn.click(displayTopicInfo);
		//Adding a data-attribute
		newBtn.attr("data-name", newTopic)
		newBtn.text(newTopic);	
		//Add the newBtn to the end of the buttons div
		$(".buttons").append(newBtn);
		//Clear the topic input
		$("#topic-input").val("");
		//Run activeBtn function
		activeBtn();
	};
});

//Calling the createButtons function to display the inital list of topics
createButtons();

function displayTopicInfo(){
	var topic = $(this).attr("data-name");	
	var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=bfDdf2nFss4QgroeR65LlzOJuHXPD2c0";
	$.ajax({
		url:queryURL,
		method: 'GET'
	}).done(function(response) {
 		var results = response.data;
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
			//Giving gifs data-state attributes
			var gif = $("<img class='gifImg'>").attr("src", gifURL)
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
			$(".gifImg").click(function(){
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