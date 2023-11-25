import React from 'react'
import './features.css'

import Feature from '../Helpers/Feature'

const featuresData = [
  {
    title: ' Good systems come before trendy tech.',
    text: 'We don’t bank on any one specific product. Instead, we understand that the system is as important as the technology.  A key part of that system is the people vested in its internal and external success.'
  },
  {
    title: 'Our approach is different.',
    text: 'By successfully integrating systems, people, and technology, we have made energy efficiency and sustainability accessible and affordable for all businesses. '
  },
  {
    title: 'Act today with tomorrow in mind.',
    text: 'Sustainable, smart and innovative solutions are the north star toward prosperity in the new digital and green economy. You can trust that the solutions we provide will not only reduce costs but also contribute to a more sustainable future.'
  }
]

const featuresRender = featuresData.map((feataure) => {
  return (
    <Feature
      title={feataure.title}
      text={feataure.text}
    />
  )
})

const Features = () => {
  return (
    <div className='features section__padding'>
      <div className='features-heading'>
        <h1 className='gradient__text'>
          Why Work with E2F Systems?
        </h1>
      </div>
      <div className='features-container'>
        {featuresRender}
      </div>
    </div>
  )
}

export default Features