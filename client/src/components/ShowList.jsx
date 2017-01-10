var React = require('react');
var ShowDetails = require('./ShowDetails');

var ShowList = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Show List </h3>
        <ShowDetails />
      </div>
      )
  }
});

module.exports = ShowList;