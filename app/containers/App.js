var React = require('react');
var Main = require('./Main');
var Link = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <Main children={this.props.children} />
      </div>
    );
  }
});
function Nav() {
  return (
    <header>
    <div id="nav_container">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <NavHeader />
          <NavPages />
        </div>
      </nav>
    </div>
    </header>
  );
}
function NavHeader() {
  return (
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Aaron Parry</a>
      </div>
  );
}
function NavPages() {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/">About Me</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>

    </ul>
  );
}

module.exports = App;
