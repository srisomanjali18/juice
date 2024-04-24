import React from 'react';
import JuiceCard from '../JuiceCard/JuiceCard';
import '../../App.css';

export default function Shakes() {
  const shakeData = [
    {
      id: 's-1',
      name: 'Mango Shake',
      price: 150,
      description: 'Fresh mango shake from the farm',
      image: '/images/img-6.jpg'
    },
    {
      id: 's-2',
      name: 'Sapota Shake',
      price: 150,
      description: 'Fresh sapota shake from the farm',
      image: '/images/sash.jpg'
    },
    {
      id: 's-3',
      name: 'blueberry Shake',
      price: 150,
      description: 'Fresh blueberry shake from the farm',
      image: '/images/blsh.jpg'
    },
    {
      id: 's-4',
      name: 'Strawberry Shake',
      price: 150,
      description: 'Fresh strawberry shake from the farm',
      image: '/images/strawberry-smoothie-fp.jpg'
    },
    {
      id: 's-5',
      name: 'Chocolate Shake',
      price: 180,
      description: 'Tasty chocolate shake straight from the cocoa beans',
      image: '/images/chocolate-milkshake-with-icecream-scaled.jpg'
    }
  ]

  const smoothisData = [
    {
      id: 's-1',
      name: 'Mango Smoothie',
      price: 150,
      description: 'Fresh mango smoothie from the farm',
      image: '/images/img-7.jpg'
    },
    {
      id: 's-2',
      name: 'Sapota Smoothie',
      price: 150,
      description: 'Fresh sapota smoothie  from the farm',
      image: '/images/sapota.jpg'
    },
    {
      id: 's-3',
      name: 'Strawberry Smoothie',
      price: 150,
      description: 'Fresh strawberry smoothie from the farm',
      image: '/images/strawberry-breakfast-smoothie-recipe-2097149-hero-02-5c1d4b2a46e0fb00014bf2ec.jpg'
    },
    {
      id: 's-4',
      name: 'Muskmelon Smoothie',
      price: 150,
      description: 'Fresh muskmelon smoothie from the farm',
      image: '/images/msh.jpg'
    },
    {
      id: 's-5',
      name: 'Blueberry Smoothie',
      price: 150,
      description: 'Fresh blueberry smoothie from the farm',
      image: '/images/4x3-blueberry-pie-smoothie.jpg'
    }
  ]


  const proteinData = [
    {
      id: 's-1',
      name: 'Protein Shake',
      price: 200,
      description: 'Have some protein shake to get some energy',
      image: '/images/protein.jpg'
    },
    {
      id: 's-2',
      name: 'Oatmeal Shake',
      price: 200,
      description: 'Have some oatmeal shake to get some energy',
      image: '/images/oatmeal.jpg'
    },
    {
      id: 's-3',
      name: 'Almond Shake',
      price: 200,
      description: 'Have some almond shake to get some energy',
      image: '/images/Almond-Blast-Shake-Recipe.jpg'
    },
    {
      id: 's-4',
      name: 'Extra Protein Shake',
      price: 250,
      description: 'Have some extra protein shake to get some extra energy',
      image: '/images/img-4.jpg'
    }
  ]


  return (
    <>
      <div id='shake-menu' className="shake-menu">
        <div className='header-title'>
          <h2>MILK SHAKES</h2>
        </div>
        <div className="card-container">
          {shakeData.map((juice, index) => (
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

      <div id='shake-menu' className="shake-menu">
        <div className='header-title'>
          <h2>SMOOTHIES</h2>
        </div>
        <div className="card-container">
          {smoothisData.map((juice, index) => (
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

      <div id='shake-menu' className="shake-menu">
        <div className='header-title'>
          <h2>PROTEIN SHAKES</h2>
        </div>
        <div className="card-container">
          {proteinData.map((juice, index) => (
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




