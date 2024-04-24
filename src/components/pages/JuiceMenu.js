import React from 'react';
import '../../App.css';
import JuiceCard from '../JuiceCard/JuiceCard';

export default function JuiceMenu() {

  const juiceData = [
    {
      id: 'j-1',
      name: 'Apple Juice',
      price: 150,
      description: 'Fresh apple juice from the farm',
      image: '/images/apple.jpg'
    },
    {
      id: 'j-2',
      name: 'Orange Juice',
      price: 150,
      description: 'Fresh orange juice from the farm',
      image: '/images/orange.jpg'
    },
    {
      id: 'j-3',
      name: 'Pineapple Juice',
      price: 150,
      description: 'Fresh pineapple juice from the farm',
      image: '/images/pine.jpg'
    },
    {
      id: 'j-4',
      name: 'Wildberry Juice',
      price: 150,
      description: 'Fresh wildberry juice from the farm',
      image: '/images/wild berry.jpg'
    },
    {
      id: 'j-5',
      name: 'Carrot Juice',
      price: 150,
      description: 'Fresh carrot juice from the farm',
      image: '/images/carrot.jpg'
    },
    {
      id: 'j-6',
      name: 'Grape Juice',
      price: 150,
      description: 'Fresh grape juice from the farm',
      image: '/images/grape.jpg'
    },
    {
      id: 'j-7',
      name: 'Watermelon Juice',
      price: 150,
      description: 'Fresh watermelon juice from the farm',
      image: '/images/watermelon-juice.jpg'
    },
    {
      id: 'j-8',
      name: 'Kiwi Juice',
      price: 150,
      description: 'Fresh kiwi juice from the farm',
      image: '/images/kiwi.jpg'
    },
    {
      id: 'j-9',
      name: 'Beetroot Juice',
      price: 150,
      description: 'Fresh beetrrot juice from the farm',
      image: '/images/beetroot.jpg'
    },
    {
      id: 'j-10',
      name: 'Muskmelon Juice',
      price: 150,
      description: 'Fresh muskmelon juice from the farm',
      image: '/images/Muskmelon-Orange-juice_wellnesscorner.jpg'
    }
  ]

  // return juice and one more section also

  return(
    <>
      <div id='juice-menu' className="juice-menu">
        <div className='header-title'>
          <h2>JUICE</h2>
        </div>

        <div className="card-container">
          {juiceData.map((juice, index) => (
            <JuiceCard
              key={juice.id}
              name={juice.name}
              price={juice.price}
              description={juice.description}
              image={juice.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}