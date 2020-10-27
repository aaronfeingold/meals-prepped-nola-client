import React from 'react';
import '.././Footer/Footer.css';

function SubscriptionInput() {
    return (
      <>
        <p className='footer-subscription-heading'>
          Email Subscription Coming soon!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </>
    )
  }

  export default SubscriptionInput;



