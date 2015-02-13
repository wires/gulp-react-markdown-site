var React = require('react');
var Router = require('react-router');

var _ = require('lodash');
var ps = require('../precompile/content.json');

var Page = React.createClass({
    mixins: [ Router.State ],
    render: function() {
        var label = this.getParams().label;
        var page = label && ps[label];
        if(page)
            return (<div id='content' dangerouslySetInnerHTML={{__html: page.body}}/>);

        return (<p>404 — IZ NOT F0UND</p>)
    }
})

var App = React.createClass({
    render: function() {

        // build array of <Link> elts
        var projects = _.map(ps, function(project, label){
            return (<li><Router.Link
                style={{color: project.color}}
                to="page"
                params={{label: label }}>{project.title}</Router.Link></li>);
        });

        return (
            <div id='page'>
              <nav id='projects'>
                <ul>
                  {projects}
                </ul>
              </nav>

              <div id='content'>
                <Router.RouteHandler/>
              </div>
            </div>
        );
    }
});


var Index = React.createClass({
    render: function(){ return (<p>This page, under construction much</p>); }
});

var routes = (
  <Router.Route handler={App}>
    <Router.DefaultRoute handler={Index}/>
    <Router.Route name="page" path="p/:label/" handler={Page}/>
  </Router.Route>
);

function render(Handler) {
   React.render(<Handler/>, document.body);
}

window.addEventListener('DOMContentLoaded', function(){
    Router.run(routes, render);
});
