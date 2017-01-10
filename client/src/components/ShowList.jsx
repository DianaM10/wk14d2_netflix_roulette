var React = require('react');
var ShowDetails = require('./ShowDetails');

var ShowList = React.createClass({

  render: function() {

    var shows = this.props.shows;
    var itemsToRender = undefined;
    console.log("shows:", shows);
    if (shows && shows.length > 0 ) {
      itemsToRender = shows.map( function( showData, index ) {
        return <ShowDetails
          key={ index }
          show={ showData }
        />
    }.bind( this ));
    } else {
      itemsToRender = <p>{ this.props.message }</p>;
    }

    return (
      <div>
        <h3>Show List </h3>
        { itemsToRender }
      </div>
      )
  }
});

module.exports = ShowList;
