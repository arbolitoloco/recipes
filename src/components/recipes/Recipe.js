import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe: { title, url, img, source } }) => {
  return (
    <div className='card text-center'>
      <img
        src={img}
        alt={title}
        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
      />
      <h3>{title}</h3>
      <p>{source}</p>
      <div>
        <button className='btn btn-dark my-1'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            Ver a receita
          </a>
        </button>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
