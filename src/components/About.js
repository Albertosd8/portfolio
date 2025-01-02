import '../components/About.css';
import { animated, useInView, useTrail } from 'react-spring';
import { useRef, useState} from 'react';

function About(){

    const [ref, isInView ] = useInView(
      {
          rootMargin: '-45% 0% -45% 0px',
      },
    );

    const items = ['25 years old, freelance, based in Guadalajara,','Mexico, in love with nature and pixel addicted:', 'Into projects with modern approaches and enjoy ','working in a structured, efficient, and detail-oriented way. With a focus on creating impactful projects', 'with great design experience, movement and interaction.'];

    const trail = useTrail(items.length, {
        from:{
            y: 30,
            opacity: 0,
        },
        to: {
            y: isInView? 0 : 30,
            opacity: isInView? 1 : 0,
        },
        config: { mass: 1, tension: 120,friction: 60, duration: 150 },
    })

    return(
        <div class="row about p-4 m-0 d-flex justify-content-center align-items-center" ref={ref}>
                <div class="col-6 m-0 p-0 ContainerSpaceAbout d-none d-md-flex"></div>
                <div class="col m-0 p-0">
                    {trail.map((props, index) => 
                        <animated.p class="row text-about m-0 p-0"
                        key={index}
                        style={{...props}}>
                            {items[index]}
                        </animated.p>
                    )}
                </div>
        </div>
    );
}

export default About;