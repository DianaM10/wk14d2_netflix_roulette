var React = require('react');
var ShowDetails = require('./ShowDetails');

var ShowList = React.createClass({
  render: function() {

    var showDetailElements = this.props.shows.map( function( showData, index ) {
      return <ShowDetails key={ index } show={ showData } />
    });

    return (
      <div>
        <h3>Show List </h3>
        { showDetailElements }
      </div>
      )
  }
});

module.exports = ShowList;
