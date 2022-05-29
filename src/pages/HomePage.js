import React, { Component } from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
export class HomePage extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Banner/>
          </Layout>
      </div>
    )
  }
}

export default HomePage