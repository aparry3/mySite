var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div style={{display: 'block', background: 'blue'}} className="container">
        {this.props.children}
      </div>
    );
  }
});
module.exports = Main;
