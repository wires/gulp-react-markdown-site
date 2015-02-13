var React = require('react');
var Router = require('react-router');

var App = require('./app');

// var PageContent = React.createClass({
//     render: function() {
//         return (<div id='content' dangerouslySetInnerHTML={__html: page.content}/>)
//     }
// })
// 
// var PageLink = React.createClass({
//     render: function() {
//         return (<li><a href={this.props.page.slug}>{this.props.page.title}</a></li>)
//     }
// })
// 
// var Pages = React.createClass({
//     render: function() {
//         var pages = this.props.pages.map(function(page){
//             return (<PageLink page={page}/>)
//         });
//         return (<nav><ul>{pages}</ul></nav>);
//     }
// })
// 
// var App = React.createClass({
//     render: function() {
//         return <p>no app</p>;
//     }
// })

function render() {
   React.render(<App/>, document.body);
}

window.addEventListener('DOMContentLoaded', render);
// window.addEventListener('resize', render);
