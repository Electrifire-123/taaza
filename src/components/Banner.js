import React, { Component } from 'react'
import bannerImage from '../Images/banner2.jpg'
import Button from './Button'
export class Banner extends Component {
  render() {
    return (
      <div className='banner'>
          <section className='banner_text'>
            <h2>Welcome To Taaza Khabare</h2>
            <h3>One place to all the latest Updates</h3>
            <p>Taaza Khabare is a nonprofit that elevates diverse voices that are often avoided by the mainstream media and builds bridges through bipartisan content. We celebrate the entrepreneur and their hustle and highlight the importance of financial knowledge and empowerment.</p>
            
            <Button buttonText="Expore More" />
          </section>
            <section className='banner_img'>
                <img src={bannerImage} alt="Banner-logo" width="100%"/>
            </section>
      </div>
    )
  }
}

export default Banner