/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { TCategory } from '../../../interface/types';

import './categoryPage.css';

type TCategoryState = {
  products: Array<any>;
  items: Array<any>;
};
class Category extends Component<TCategory> {
  constructor(props: TCategory) {
    super(props);
    this.updateCategoryPage = this.updateCategoryPage.bind(this);
  }

  state = {
    categories: [],
    products: [],
    items: [],
  };

  client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

  componentDidMount() {
    this.client
      .query({
        query: gql`
          query {
            categories {
              name
              products {
                name
                gallery
              }
            }
          }
        `,
      })
      .then((result) => {
        this.setState((state: TCategoryState) => {
          return { categories: result.data.categories };
        });
        this.updateCategoryPage();
        this.setState((state: TCategoryState) => {
          state.products = [];
          const newCategories = result.data.categories.filter(
            (item: any) => item.name === this.props.categoryName
          );
          return {
            products: [...state.products, ...newCategories[0].products],
          };
        });
        this.setState((state: TCategoryState) => {
          const productsImg = state.products.map((item) => {
            return { name: item.name, img: item.gallery[0] };
          });
          return { items: productsImg };
        });
      });
  }

  updateCategoryPage() {
    const newCategories = this.state.categories.filter((item: any) => {
      return item.name === this.props.categoryName;
    });
    if (newCategories.length) {
      this.setState(() => {
        const products = (newCategories[0] as any).products.map((item: any) => {
          return { name: item.name, img: item.gallery[0] };
        });
        return { items: products };
      });
    }
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.categoryName !== prevProps.categoryName) {
      this.updateCategoryPage();
    }
  }
  render() {
    return (
      <main className="category-block">
        <div onClick={() => console.log(this.state, 'state')}>Category name</div>
        <section className="category-block_main-section">
          {this.state.items.map((item: any, index) => {
            return (
              <div key={index} className="category-block-item">
                <div className="category-block-item_name">{item.name}</div>
                <div className="category-block-item_img-block">
                  <img
                    className="category-block-item_img-block-image"
                    src={item.img}
                    alt="picture"
                  />
                </div>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

export default Category;
