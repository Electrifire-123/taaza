import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { className = "", type = "", buttonText, onClick } = this.props;
    return (
      <button
        className={className}
        type={type}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {buttonText}
      </button>
    );
  }
}

export default Button;
