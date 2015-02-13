var React = require('react');
var Router = require('react-router');

var App = require('./app');

function render() {
   React.render(<App/>, document.body);
}

window.addEventListener('DOMContentLoaded', render);
// window.addEventListener('resize', render);
