var React = require('react');
var ContactCard = require('../components/ContactCard');

var ContactBody = React.createClass({
  render: function() {
    return <ContactCard username="aparry3" logo="../public/linkedinlogo.png" socialMedia="linkedin" url="https://www.linkedin.com/in/aaron-parry-003"/>;
  }
});
module.exports = ContactBody;
