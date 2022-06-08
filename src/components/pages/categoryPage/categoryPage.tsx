import { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { TCategory } from '../../../interface/types';

class Category extends Component<TCategory> {
  constructor(props: TCategory) {
    super(props);
  }
  componentDidMount() {
    const client = new ApolloClient({
      uri: 'http://localhost:4000/',
      cache: new InMemoryCache(),
    });
    client
      .query({
        query: gql`
          query {
            categories {
              name
              products {
                gallery
              }
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }
  render() {
    return (
      <main className="category-block">
        <div>Category name</div>
        <section>blocks</section>
      </main>
    );
  }
}

export default Category;
