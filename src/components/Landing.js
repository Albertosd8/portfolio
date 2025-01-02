import '../components/Landing.css';
import { AddMovementToElement, EnterFrom } from '../hooks/AnimateElements.js';
import { animated } from 'react-spring';

function Landing(){
    const { AppearFromBelowAnimation, BringUpFromBelowAnimation } = EnterFrom();
    const { BounceElementAnimation } = AddMovementToElement();

    return(
        <div class="row m-0 p-0 d-flex landing-space" id="landing-section">
          {/* mobile */}
          <div class="row d-flex flex-column justify-content-around m-0 p-0 px-2 d-md-none">
            <animated.div class="row m-0 p-0 pt-4 m-0 d-flex justify-content-center align-items-start" style={BringUpFromBelowAnimation}>
              <p class="landing-title-mobile m-0 p-0">
                WEB<br></br>DEVELO-<br></br>PER &<br></br>SOFTWARE<br></br>ENGINEER
              </p>
            </animated.div>
            <animated.div class="row m-0 p-0" style={BringUpFromBelowAnimation}>
              <p class="landing-description-two-mobile m-0 p-0 d-flex justify-content-end">
                CRAFTING
              </p>
              <p class="landing-description-two-mobile m-0 p-0 d-flex justify-content-end">
                EXPERIENCES 
              </p>
            </animated.div>
            <div>
              <animated.p class="row landing-description-one-mobile m-0 p-0 my-4 d-flex justify-content-center" style={BounceElementAnimation}>
                &#8595; Scroll down
              </animated.p>
            </div>
            </div>
            {/* mobile */}
            <div class="row m-0 p-0 landing-empty-space d-none d-md-flex"></div>
            <div class="row m-0 px-4 d-flex align-items-end landing-empty-space d-none d-md-flex">
                <animated.p class="landing-title m-0 p-0 " style={AppearFromBelowAnimation}>
                    WEB DEVELOPER &
                </animated.p>
                <animated.p class="landing-title m-0 p-0" style={AppearFromBelowAnimation}>
                    SOFTWARE ENGINEER  
                </animated.p> 
            </div>
            <div class="row m-0 px-4 d-flex align-items-end d-none d-md-flex">
              <div class="col-9 m-0 p-0">
                <animated.p class="landing-description-one mb-4 m-0 p-0" style={BringUpFromBelowAnimation}>
                  CRAFTING EXPERIENCES
                </animated.p>
              </div>
              <animated.div class="col-1 m-0 p-0 d-flex justify-content-end" style={BringUpFromBelowAnimation}>
                <animated.p class="landing-description-two mb-4 m-0 p-0" style={BounceElementAnimation}>
                  &#8595;
                </animated.p>
              </animated.div>
              <animated.div class="col-2 m-0 p-0" style={BringUpFromBelowAnimation}>
                <animated.p class="landing-description-two mb-4 m-0 p-0 d-flex justify-content-center" style={BounceElementAnimation}>
                  Scroll down
                </animated.p>
              </animated.div>
          </div>
        </div>
    );
}

export default Landing;