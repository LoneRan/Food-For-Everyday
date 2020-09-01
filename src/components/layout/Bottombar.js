import React from 'react';
import './footer.css';
import StickyFooter from 'react-sticky-footer';
const Bottombar = () => {
  return (
    <StickyFooter
      bottomThreshold={1000000}
      normalStyles={{
        backgroundColor: '#999999',
        padding: '2rem',
        width: '100%',
        position: 'absolute',
        top: '1100px',
        bottom: '0',
      }}
      stickyStyles={{
        width: '100%',
      }}
    >
      <div className='row'>
        <div className='col'>
          <h4>Masami OhLaLa</h4>
          <ul className='list-unstyled'>
            <li>123-456-7890</li>
            <li>Los Angeles, California</li>
            <li>ぉさだｆだふぁうぇ</li>
          </ul>
        </div>
        <div className='col'>
          <h4>STUFF</h4>
          <ul className='list-unstyled'>
            <li>FIGHT ON</li>
            <li>OTHER STUFF</li>
            <li></li>
          </ul>
        </div>
        <div className='col'>
          <h4>FOOD</h4>
          <ul className='list-unstyled'>
            <li>HEALTHY</li>
            <li>GAIN WEIGHT NOOOO</li>
            <li>CONTROL</li>
          </ul>
        </div>
      </div>
      <hr />

      <p className='col-sm'>
        &copy;{new Date().getFullYear()} FOODFORTODAY | All Rights Reserved |
        Terms of Service | Privacy
      </p>
    </StickyFooter>
  );
};

export default Bottombar;
