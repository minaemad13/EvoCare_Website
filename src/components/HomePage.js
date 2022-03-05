import React , {useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import QueryString from 'query-string';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        // const query = new URLSearchParams(window.location.search);
        const values = QueryString.parse(location.search);

       if (values.success) {
         // console.log('Order placed! You will receive an email confirmation.');
        }

       if (values.canceled) {
         // console.log(
          //  'Order canceled -- continue to shop around and checkout when youre ready.'
         // );
        }
      }, []);
    return (
        <section>
        <div className='product'>
          <img
            src='https://i.imgur.com/EHyR2nP.png'
            alt='The cover of Stubborn Attachments'
          />
          <div className='description'>
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
          </div>
        </div>
        <form action={'http://127.0.0.1:8000/testpayment/'}
              method='POST'>
          <button className='button' type='submit'>
            Checkout
          </button>
        </form>
      </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>


    );
};


export default HomePage;