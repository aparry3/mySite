var React = require('react');

var ContactCard = React.createClass({
  propTypes: {
    socialMedia: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    logo: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired
  },

  render: function() {
    var style:{
      backgroundImage: props.logo,
      backgroundSize: "cover",
      height: "100px",
      width: "100px"
    };
    return (
      <a className="social-link" href={this.props.url}>
        <div style={style} className="contact-card" id={this.props.socialMedia}>
          <h1>{this.props.socialMedia}</h1>
        </div>
      </a>
    );
  }
});
module.exports = ContactCard;
