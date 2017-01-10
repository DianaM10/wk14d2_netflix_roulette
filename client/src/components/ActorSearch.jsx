var React = require('react');

var ActorSearch = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" placeholder="Enter actor name..."/>
      </div>
      )
  }
});

module.exports = ActorSearch;