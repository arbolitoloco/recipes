import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Recipes from './components/recipes/Recipes';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <main>
          <div className='container'>
            <h1 className='text-center'>Receitas Fáceis e Light</h1>
            <p className='text-center'>
              Lista de receitas selecionadas e guardadas no meu arquivo pessoal
              no aplicativo{' '}
              <a
                href='https://www.copymethat.com/'
                alt='Copy Me That'
                target='_blank'
                rel='noopener noreferrer'
              >
                Copy Me That
              </a>
              .
            </p>
            <p className='text-center'>
              Tem receita de outros sites e também receitas escritas por mim. As
              descrições das receitas às vezes contêm anotações minhas.
            </p>
            <p className='text-center'>
              É possível ver os links originais das receitas guardadas de outros
              sites clicando nas informações de cada receita.
            </p>
            <p className='text-center'>
              Para ver todas as minhas receitas, clique{' '}
              <a
                href='https://www.copymethat.com/recipebox/laura-p/841430'
                target='_blank'
                rel='noopener noreferrer'
              >
                aqui
              </a>
              .
            </p>
            <Recipes />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
