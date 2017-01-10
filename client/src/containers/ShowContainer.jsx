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
    if( searchText.length > 5) {
      var url = 'http://netflixroulette.net/api/api.php?actor=' + encodeURI(searchText);
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function() {
        var data = JSON.parse(request.responseText);
        console.log("data: ", data);

      }
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
        <ShowList />
      </div>
      )
  }
});

module.exports = ShowContainer;
