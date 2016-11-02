var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Main = require('./Main');
var AboutMe = require('./AboutMe');
var Projects = require('./Projects');
var Contact = require('./Contact');



var MainContainer = React.createClass({
  render: function() {
    return (
      <Router>
        <Route component={Main}>
          <Route path="/" component={AboutMe}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
});

module.exports = MainContainer;
