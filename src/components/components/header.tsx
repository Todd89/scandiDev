import { Component } from 'react';
import { THeader } from '../../interface/types';

import './header.css';
class Header extends Component<THeader> {
  constructor(props: THeader) {
    super(props);
  }
  render() {
    return (
      <header className="header-block">
        <nav className="header-block-categories">
          <div className="header-block-categories_text-block">
            <span
              className="header-block-categories_text"
              onClick={(e) =>
                this.props.changeCategoryName((e.target as HTMLSpanElement).innerText)
              }
            >
              all
            </span>
          </div>
          <div className="header-block-categories_text-block">
            <span
              onClick={(e) =>
                this.props.changeCategoryName((e.target as HTMLSpanElement).innerText)
              }
              className="header-block-categories_text"
            >
              clothes
            </span>
          </div>
          <div className="header-block-categories_text-block">
            <span
              onClick={(e) =>
                this.props.changeCategoryName((e.target as HTMLSpanElement).innerText)
              }
              className="header-block-categories_text"
            >
              tech
            </span>
          </div>
        </nav>
        <div className="header-block-img"></div>
        <div className="header-block-settings">
          <div className="header-block-settings_dollad-img"></div>
          <div className="header-block-settings_bag-img"></div>
        </div>
      </header>
    );
  }
}

export default Header;
