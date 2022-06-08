import { Component } from 'react';
import { Link } from 'react-router-dom';
import './errorPage.css';

class ErrorRoute extends Component {
  render() {
    return (
      <div className="error-page">
        <p>
          This page does not exist. Go <Link to="/"> Start page </Link>
        </p>
        <div className="error">404</div>
      </div>
    );
  }
}
export default ErrorRoute;
