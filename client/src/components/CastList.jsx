var React = require('react');

var CastList = React.createClass({

  render: function() {

    var castList = this.props.castString.split( ", " );
    var castElements = castList.map( function( castMember, index ) {
      return (
        <li><button>{ castMember }</button></li>
      );
    });

    return (
      <div>
        <p><b>Cast List</b></p>
        <ul>
          <li>{ castElements }</li>
        </ul>
      </div>
    )
  }

});

module.exports = CastList;
