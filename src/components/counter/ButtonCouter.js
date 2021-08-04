// dinh nghia class component
import React from 'react';

export class ButtonCounter extends React.Component {

  // render elements
  render() {
    return (
      <>
        {/* viet cac ma jsx o day */}
        <button
          type={this.props.type}
          onClick={() => this.props.click()}
        >
          {this.props.children}
        </button>
      </>
    )
  }
}