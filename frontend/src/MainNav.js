import React from 'react';
import './MainNav.css';
import img1 from './img/DreamShaper_v7_virat_kohali_cricketer_passport_size_siming_pho_0.jpg';
import img2 from './img/DreamShaper_v7_rohit_sharma_cricketer_passport_size_siming_pho_0.jpg';
import img3 from './img/DreamShaper_v7_KL_Rahul_cricketer_passport_size_siming_photo_i_0.jpg';
import img4 from './img/DreamShaper_v7_M_Shami_cricketer_passport_size_simling_photo_i_1.jpg';
import img5 from './img/DreamShaper_v7_rishabh_pant_cricketer_passport_size_simling_p_1.jpg';
import img6 from './img/DreamShaper_v7_Yuzi_Chahal_cricketer_passport_size_simling_pho_1.jpg';

function MainNav() {
  return (
    <div>
      <div className="container">
        <div className="left-section">
          <h1 className='heading-main'>Sports Fantasy Gaming</h1>
          <hr></hr>
          {/* <h3 className='heading-h3'>Make Your Winning Team Now</h3> */}
          <img className='blue-img' src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d4b178b31d5_home_hero_before.svg" ></img>
          <p className='heading-p'>Join the ultimate fantasy gaming experience and build your <br></br>dream team with the best cricketers from around  the world. <br></br>Compete with other players and win exciting prizes!</p>
          <img className='yellow-img' src="https://d8it4huxumps7.cloudfront.net/uploads/images/students/dotted-vector.svg" ></img>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="right-section">
          <div className="row">
            <img className='player-photo' src={img1} alt="Jasprit Bumrah" />
            <img className='player-photo'  src={img2} alt="Hardik Pandya" />
            <img className='player-photo'  src={img3} alt="KL Rahul" />
          </div>
          <div className="row">
            <img className='player-photo'  src={img4} alt="Mohammed Shami" />
            <img className='player-photo'  src={img5} alt="Rishabh Pant" />
            <img className='player-photo'  src={img6} alt="Yuzvendra Chahal" />
          </div>
        </div>
        <img className='mix-img' src="https://d8it4huxumps7.cloudfront.net/uploads/images/63de43bdce283_multi_color_dot.png?d=76x188"></img>
      </div>
    </div>
  );
}

export default MainNav;
