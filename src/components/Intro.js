import './Intro.css';
import { useSpring, animated, useChain, useSpringRef } from 'react-spring';

const intro = () => {

    const useAnimation = ref => {
      const spring = useSpring({
        from: {opacity: 0, y: -20},
        to: {opacity: 1, y: 0},
        config:{mass: 1, tension: 120,friction: 60, duration: 1000},
        ref: ref,
      })
      return spring;
    }

    const LeaveOut = ref => {
      const spring = useSpring({
        from: {opacity: 1},
        to: {opacity: 0},
        delay: 3000
      })
      return spring;
    }

    const fade1Ref = useSpringRef();
    const fade2Ref = useSpringRef();
    const fadeOutRef = useSpringRef();
    const fade1 = useAnimation(fade1Ref);
    const fade2 = useAnimation(fade2Ref);
    const fade3 = LeaveOut(fadeOutRef);

    useChain([fade1Ref, fade2Ref, fadeOutRef] , [0.05,0.45, 0.9]);

    return(
      <animated.div class="row m-0 p-4 d-flex landing-intro" style={fade3}>
        <div class="row m-0 p-0 intro-empty-space"></div>
        <animated.div class="row m-0 my-3 p-0 d-flex align-items-end" style={fade1}>
          <p class="intro-description mb-4 m-0 p-0">
            SOFTWARE ENGINEER AND WEB DEVELOPER
          </p> 
        </animated.div>
        <animated.div class="p-0 m-0" style={fade2}>
          <p class="intro-title m-0 p-0">
            ALBERTO <br></br> SANDOVAL  
          </p>
        </animated.div>
      </animated.div>
    )

}

export default intro;