var React = require('react');
var ReactDOM = require('react-dom');
var ShowContainer = require('./containers/ShowContainer');

window.onload = function(){
  ReactDOM.render(
    <ShowContainer />,
    document.getElementById('app')
  );
}
