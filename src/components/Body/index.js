// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="left">Left Navbar Menu</h1>
              <ul className="list-container">
                <li className="li">Item 1</li>
                <li className="li">Item 2</li>
                <li className="li">Item 3</li>
                <li className="li">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content">
              <h1 className="left">Content</h1>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right">
              <h1 className="left">Right Navbar</h1>
              <p className="ad-1">Ad 1</p>
              <p className="ad-1">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
