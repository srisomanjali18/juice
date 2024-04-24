import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='explore-menu' className='cards'>
      <h1>Check out the Epic Menu We have!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text=' Life is too short not to indulge in a refreshing smoothie.'
              label='Smoothies'
              path='/shakes'
            />
            <CardItem
              src='images/img-2.jpg'
              text=' Sip, Sip, hooray! Milkshake magic in every gulp.'
              label='Milk Shakes'
              path='/shakes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text=' Haters gonna hate, but they cant resist fresh juice.'
              label='Fruit Juice'
              path='/juice'
            />
            <CardItem
              src='images/img-4.jpg'
              text=' Rise and shine! Time to fuel up with my favorite protein shake.'
              label='Protein Shakes'
              path='/shakes'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;



