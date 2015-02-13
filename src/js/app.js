var React = require("react");

module.exports = React.createClass({
    render: function() {
        return (
            <div id="page">
              <nav>
                <ul>
                  <li><a href='#'>hello</a></li>
                </ul>
              </nav>
              
              <div id="content">
                <p>no content, is good content</p>
              </div>
            </div>
        );    
    }
});

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