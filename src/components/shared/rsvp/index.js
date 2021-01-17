import React from 'react';

import {
  RsvpSection,
  HiddenTextInput,
} from './style';

const Rsvp = ({ isRsvpPage }) => {
  const formName = 'rsvp-form-test';

  return (
    <RsvpSection id='rsvp' noBackground={isRsvpPage}>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-10 offset-xl-1'>
            <div className='rsvp-box u-bg-white'>
              <div>
                <div className='text-center'>
                  {!isRsvpPage
                      ? <h3 className='rsvp-box__title u-font-script'>be our guest!</h3>
                      : <h3 className='rsvp-box__title'>RSVP</h3>
                  }
                  <p className='rsvp-box__subtitle'>Please confirm your arrival by <mark className='font-weight-bold'>March 14, 2021</mark></p>
                </div>
                <form
                  method='POST'
                  action='/thank-you'
                  className='rsvp-form'
                  id='rsvp-form'
                  name={formName}
                  data-netlify='true'
                  netlify-honeypot='syrup'
                >
                  <input type='hidden' name='form-name' value={formName} />
                  <HiddenTextInput type='text' name='syrup' />
                  <div className='d-md-flex justify-content-between'>
                    <div className='rsvp-form__left'>
                      <div className='rsvp-form-field'>
                        <input type='text' name='fullname' placeholder='Full Name' required />
                      </div>
                      <div className='rsvp-form-field'>
                        <input type='email' name='email' placeholder='Your E-mail' required />
                        <p className='rsvp-form-field__error'>E-mail is incorrect.</p>
                      </div>
                      <div className='rsvp-form-field'>
                        <input type='number' name='guests' placeholder='Number of guests' min='0' max='10' required />
                      </div>
                      <div className='rsvp-form-field'>
                        <select name='attending' required>
                          <option value='' disabled selected>Are you attending?</option>
                          <option value='all'>Yes - Both!</option>
                          <option value='ceremony'>Yes - Ceremony only</option>
                          <option value='reception'>Yes - Reception only</option>
                          <option value='no'>No</option>
                        </select>
                      </div>
                    </div>
                    <div className='rsvp-form__right'>
                      <div className='rsvp-form-field h-50'>
                        <textarea
                          rows='4'
                          placeholder='Any accommodations such as wheelchair access or dietary restrictions?'
                          name='comments'
                        />
                      </div>
                      <div className='rsvp-form-field h-50'>
                        <textarea
                          rows='4'
                          placeholder='Your Message to the bride and groom'
                          name='message'
                        />
                      </div>
                    </div>
                  </div>
                  <button type='submit' className='rsvp-form-submit'>
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RsvpSection>
  );
};

export default Rsvp;
