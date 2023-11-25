import React from 'react'
import Article from '../Helpers/Article'
import './blog.css'


import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'
import blog04 from '../assets/blog04.png'
import blog05 from '../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog section__padding'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening,
          We are blogging about it.
        </h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container_groupA'>
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="Reducing Energy Waste & Cost: Exploring Solutions at E2F Systems Event" />
        </div>
        <div className='blog-container_groupB'>
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="Reducing Energy Waste & Cost: Exploring Solutions at E2F Systems Event" />
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="Reducing Energy Waste & Cost: Exploring Solutions at E2F Systems Event" />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="Reducing Energy Waste & Cost: Exploring Solutions at E2F Systems Event" />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="Reducing Energy Waste & Cost: Exploring Solutions at E2F Systems Event" />
        </div>
      </div>
    </div>
  )
}

export default Blog