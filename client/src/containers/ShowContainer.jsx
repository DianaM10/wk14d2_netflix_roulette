var React = require('react');
var ActorSearch = require('../components/ActorSearch');
var ShowList = require('../components/ShowList');


var ShowContainer = React.createClass({

  getInitialState: function() {
    return {
      currentSearch: ""
    }
  },

  handleSearchTextChange: function( searchText ) {
    this.setState({
      currentSearch: searchText
    });
  },

  render: function() {
    return (
      <div>
        <h1>Netflix Roulette </h1>
        <ActorSearch
          onSearchTextChange={ this.handleSearchTextChange }
        />
        <ShowList />
      </div>
      )
  }
});

module.exports = ShowContainer;
