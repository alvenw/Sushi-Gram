// App component - represents the whole app
App = React.createClass({
	getIntialState() {
		return {
			sushi: [
				'tamago',
				'sake',
				'maguro',
				'hamachi',
				'ebi',
				'unagi',
				'tako',
				'ika',
				'ikura'
			],
		};
	},

	render() {
		// var buttons = sushi.map(function(element) {
		// 	return (
		// 		<button name={element}>{element}</button>
		// 	)
		// }.bind(this));
		// return (
		// 	{buttons}
		// )	
		return this.state.sushi.map(function(element) {
			(
				<button name={element}>button</button>
			)
		});
	}
});