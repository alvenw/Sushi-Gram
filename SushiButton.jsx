SushiButton = React.createClass ({
	/*Sends request to api endpoint to retrieve
		images with sushi tags*/
	handleClick: function() {
		url = url + this.props.sushis;
		url = url + '?client_id=' + client_id;
		$.get(url, function(result) {
			console.log(result);
		});
	},
	//Renders the sushi buttons
	render: function() {
		return (
			<button onClick = {this.handleClick} style = {this.props.styles} 
			key = {this.props.key}>{this.props.sushis}</button>
		)
	}
})


var url = 'https://api.instagram.com/v1/tags/';