var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
      sushi: sushiArr
    }
  },
  render: function() {
    // return (
      {this.state.sushi.map(function(element) {
        return <div>{element}</div>
      })}

      // for (var i = 0; i < this.state.sushi.length; i ++) {
      //   <div>
      //     {this.state.sushi[i]}
      //  </div>
      // }
  }
})

var sushiArr = [
  'Tamago', 'Sake', 'Maguro', 'Hamachi', 'Ebi',
  'Unagi', 'Tako', 'Ika', 'Ikura', 'Uni', 'Kani'
]

React.render(
  <App />, document.body)