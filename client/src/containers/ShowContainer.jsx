var React = require('react');
var ActorSearch = require('../components/ActorSearch');
var ShowList = require('../components/ShowList');


var ShowContainer = React.createClass({

  getInitialState: function() {
    return {
      currentSearch: "",
      foundShows: []
    }
  },

  handleSearchTextChange: function( searchText ) {
    this.setState({
      currentSearch: searchText
    });
    if( searchText.length > 5) {
      var url = 'http://netflixroulette.net/api/api.php?actor=' + encodeURI(searchText);
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function() {
        var data = JSON.parse(request.responseText);
        this.setState({
          foundShows: data
        });
      }.bind( this );
      request.send();
    }
  },

  render: function() {
    return (
      <div>
        <h1>Netflix Roulette </h1>
        <ActorSearch
          onSearchTextChange={ this.handleSearchTextChange }
        />
      <ShowList shows={ this.state.foundShows }/>
      </div>
      )
  }
});

module.exports = ShowContainer;
