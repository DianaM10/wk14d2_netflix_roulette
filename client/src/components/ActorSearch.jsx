var React = require('react');

var ActorSearch = React.createClass({

  getInitialState: function() {
    return {
      searchText: ""
    };
  },

  handleInputUpdated: function( e ) {
    var newSearchText = e.target.value;
    this.setState({
      searchText: newSearchText
    });
  },

  handleSearchClick: function() {
    this.props.onSearchTextChange( this.state.searchText );
  },

  render: function() {
    return (
      <div>
        <input type="text" value={ this.state.searchText } placeholder="Enter actor name..." onChange={ this.handleInputUpdated }/>
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
      )
  }
});

module.exports = ActorSearch;
