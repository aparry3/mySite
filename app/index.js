var React = require('react');
var ReactDOM= require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var App = require('./containers/App');
var Main = require('./containers/Main');
var AboutMe = require('./containers/AboutMe');
var Projects = require('./containers/Projects');
var Contact = require('./containers/Contact');
var IndexRoute = require('react-router').IndexRoute;

var MainContainer = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={AboutMe}/>
          <Route path="projects" component={Projects}/>
          <Route path="contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
});
ReactDOM.render(
  <MainContainer />, document.getElementById('app')
);
