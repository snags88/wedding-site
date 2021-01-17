import React from 'react';

import {
  RsvpSection,
} from './style';

const Success = () => {
  return (
    <RsvpSection id='rsvp' noBackground>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-10 offset-xl-1'>
            <div className='rsvp-box u-bg-white'>
              <div>
                <div className='text-center'>
                  <h3 className='rsvp-box__title'>Thank you for submitting your RSVP</h3>
                  <p className='rsvp-box__subtitle'>If you have any questions or your plans change, please contact Sherilyn or Seiji.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RsvpSection>
  );
};

export default Success;
