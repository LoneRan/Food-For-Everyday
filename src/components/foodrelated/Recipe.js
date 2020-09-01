import React from 'react';
import RecipeItem from './RecipeItem';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

const Recipe = ({ loading, recipes }) => {
  if (loading) {
    return <p1>111</p1>;
  } else {
    return (
      <div style={userStyle}>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
};
export default Recipe;
