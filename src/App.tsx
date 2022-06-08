import { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/components/header';
import Category from './components/pages/categoryPage/categoryPage';
import ErrorRoute from './components/pages/errorPage/errorPage';
import { TAppState } from './interface/types';

class App extends Component {
  constructor(props: string) {
    super(props);
    this.changeCategoryName = this.changeCategoryName.bind(this);
  }

  state = {
    categoryName: 'all',
  };

  changeCategoryName(name: string) {
    console.log(name);
    this.setState((state: TAppState) => {
      return { ...state, categoryName: name };
    });
  }

  render() {
    return (
      <HashRouter>
        <Header changeCategoryName={this.changeCategoryName} />
        <Routes>
          <Route path="/" element={<Category categoryName={this.state.categoryName} />}></Route>
          <Route path="/*" element={<ErrorRoute />}></Route>
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
