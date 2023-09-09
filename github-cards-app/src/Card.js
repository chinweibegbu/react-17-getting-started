import React, { Component } from 'react';

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt='Profile' />
        <div className="info">
          {/* Use the React-specific style property */}
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
