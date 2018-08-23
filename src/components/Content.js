import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

export default class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func,
  }

  render() {
    return (
      <div>
        <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
        <ThemeSwitch
          themeColor={this.props.themeColor}
          onSwitchColor={this.props.onSwitchColor}
        />
      </div>
    )
  }
}
