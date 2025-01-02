import '../components/Menu.css';
import { useSpring, animated} from 'react-spring';

function Menu(){

    const AppearFromUpside = useSpring({
      from: {opacity: 0, y: -15},
      to: {opacity: 1, y: 0},
      config:{mass: 1, tension: 120,friction: 60},
    })

    return (
        <animated.div class="row fixed-top m-4 p-4" style={AppearFromUpside}>
              <div class="col-7 ml-0 p-0">
                <a class="mb-4 ml-0 p-0 menu-logo" href="#landing-section">
                  A.SANDOVAL
                </a> 
              </div>
              <div class="col-5 ml-0 p-0 d-flex justify-content-center">
                <div class="container m-0 p-0 d-none d-md-flex justify-content-between">
                  <a class="mb-4 m-0 p-0 menu-secondpart" href="#projects-section">
                    PROJECTS
                  </a>
                  <a class="mb-4 m-0 p-0 menu-secondpart" href="#about-section">
                  ABOUT
                  </a>
                  <a class="mb-4 m-0 p-0 menu-secondpart" href="#contact-section">
                  CONTACT
                  </a>
                </div>
              </div>
        </animated.div>
    );
}

export default Menu;