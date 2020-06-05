import React from 'react';
import Recipe from './Recipe';
import recipes_easy_light from '../data/recipes_easy_light.json';
// import PropTypes from 'prop-types';

const Recipes = ({
  state = {
    recipes: recipes_easy_light,
  },
}) => {
  // state = {
  //   recipes: [
  //     {
  //       title: 'Bolo De Cenoura Com Cobertura De Chocolate',
  //       url:
  //         'https://www.copymethat.com/r/FFx28Gy/bolo-de-cenoura-com-cobertura-de-chocola/',
  //       img:
  //         'https://cdn.copymethat.com/media/bolo_de_cenoura_com_cobertura_de_chocola_2020052419545572163365849.jpg',
  //       source: 'panelinha.com.br',
  //     },
  //     {
  //       title: 'Dadinhos De Tapioca Na Airfryer',
  //       url:
  //         'https://www.copymethat.com/r/YR86Q6o/dadinhos-de-tapioca-na-airfryer/',
  //       img:
  //         'https://cdn.copymethat.com/media/dadinhos_de_tapioca_na_airfryer_20200521160436608943k38w9.jpg',
  //       source: 'fritadeirasemoleo.blogspot.com',
  //     },
  //     {
  //       title: 'Refrigerator Bread, Again and Again',
  //       url:
  //         'https://www.copymethat.com/r/Cm9iBdi/refrigerator-bread-again-and-again/',
  //       img:
  //         'https://cdn.copymethat.com/media/refrigerator-bread-again-and-again-20200515064540531535m0hgu.jpg',
  //       source: 'themeaningofpie.com',
  //     },
  //   ],
  // };
  return ( <
    div className = 'grid-3' > {
      state.recipes.map((recipe) => ( <
        Recipe key = { recipe.url }
        recipe = { recipe }
        />
      ))
    } <
    /div>
  );
};

Recipes.defaultProps = {
  source: 'da Laura',
};

export default Recipes;