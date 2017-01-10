var React = require('react');
var ActorSearch = require('../components/ActorSearch');
var ShowList = require('../components/ShowList');


var ShowContainer = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Netflix Roulette </h1>
        <ActorSearch />
        <ShowList />
      </div>
      )
  }
});

module.exports = ShowContainer;