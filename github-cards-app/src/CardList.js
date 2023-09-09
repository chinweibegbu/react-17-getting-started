import React from 'react';
import Card from './Card';

const CardList = ({ profiles }) => {
  return (
    <div>
      {/* Use the spread operator to assign props */}
      {profiles.map((profile) => <Card key={profile.id} {...profile} />) }
      )
    </div>
  );
}

export default CardList;
