// App component - represents the whole app


App = React.createClass({
	render() {
		return (
			<div>
				{sushi.map(function(element, index) {
					return (
						<SushiButton styles = {button} sushis = {element}/>
					);
				}, this)}
			</div>
		);
	}
});

var sushi =  
[
	'tamago',
	'sake',
	'maguro',
	'hamachi',
	'ebi',
	'unagi',
	'tako',
	'ika',
	'ikura'
];

var button = {
	backgroundColor: '#FFFFFFF',
	width: '100px',
	height: '50px',
	borderRadius: '10px',
	margin: '0 auto'
}