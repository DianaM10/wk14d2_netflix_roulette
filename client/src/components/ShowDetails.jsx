var React = require('react');
var CastList = require('./CastList');

var ShowDetails = React.createClass({
  render: function() {

    var show = this.props.show;

    return (
      <div>
        <h3><b>{ show.show_title }</b></h3>
        <CastList
          castString={ show.show_cast }
        />
        <p><b>Summary :</b> <i>{ show.summary}</i></p>
        <img src={ show.poster }/>
      </div>
      )
  }
});

module.exports = ShowDetails;
