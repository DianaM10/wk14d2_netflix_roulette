var React = require('react');

var ShowDetails = React.createClass({
  render: function() {

    var show = this.props.show;

    return (
      <div>
        <h3><b>{ show.show_title }</b></h3>
        <p><b>Cast :</b> { show.show_cast }</p>
        <p><b>Summary :</b> <i>{ show.summary}</i></p>
        <img src={ show.poster }/>
      </div>
      )
  }
});

module.exports = ShowDetails;
