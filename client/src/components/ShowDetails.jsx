var React = require('react');

var ShowDetails = React.createClass({
  render: function() {

    var show = this.props.show;

    return (
      <div>
        <p><b>Show Title: </b>{ show.show_title }</p>
      </div>
      )
  }
});

module.exports = ShowDetails;
