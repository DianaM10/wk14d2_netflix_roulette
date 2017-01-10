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
    this.props.onSearchTextChange( newSearchText );
  },

  render: function() {
    return (
      <div>
        <input type="text" value={ this.state.searchText } placeholder="Enter actor name..." onChange={ this.handleInputUpdated }/>
      </div>
      )
  }
});

module.exports = ActorSearch;
