// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value
      const checkBox1 = () => {
        onToggleShowContent()
      }
      const checkLeft = () => {
        onToggleShowLeftNavbar()
      }
      const checkRight = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="cc-bg-container">
          <h1 className="cc-head">Layout</h1>
          <input
            type="checkbox"
            id="id1"
            checked={showContent}
            onChange={checkBox1}
          />
          <label htmlFor="id1" className="label-1">
            Content
          </label>
          <br className="br" />
          <input
            type="checkbox"
            id="id2"
            checked={showLeftNavbar}
            onChange={checkLeft}
          />
          <label htmlFor="id2" className="label-1">
            Left Navbar
          </label>
          <br />
          <input
            type="checkbox"
            id="id3"
            checked={showRightNavbar}
            onChange={checkRight}
          />
          <label htmlFor="id3" className="label-1">
            Right Navbar
          </label>
          <br />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
