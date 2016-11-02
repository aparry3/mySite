var React = require('react');
var ContactBody = require('./ContactBody');

var Contact = React.createClass({
  render: function() {
    return (
      <div id="page-container">
        <ContactBody />
      </div>
    );
  }
});
module.exports = Contact;
