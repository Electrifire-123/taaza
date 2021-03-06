import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';

export class Layout extends Component {
  render() {
    return (
        <div>
          <Header/>
            {this.props.children}
          <Footer/>
        </div>
    )
  }
}

export default Layout