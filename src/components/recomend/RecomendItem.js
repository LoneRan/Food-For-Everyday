import React from 'react';

const RecomendItem = ({ recomend: { title, sourceUrl, image } }) => {
  return (
    <div className='card text-center'>
      <ul>
        <a herf={sourceUrl}>
          <img
            src={`https://spoonacular.com/recipeImages/` + image}
            alt=''
            className='round-img'
            style={{ width: '60px' }}
          />
        </a>
      </ul>
      <h3>{title}</h3>

      <div>
        <a href={sourceUrl} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

export default RecomendItem;
