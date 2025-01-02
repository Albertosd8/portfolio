import '../components/AboutDetail.css';
import { animated, useInView, useSpring} from 'react-spring';

function AboutDetail(){
    const [ref, isInView ] = useInView(
        {
          rootMargin: '-20% 0% -20% 0px'
        }, 
    ); 

    const Appearing = useSpring({
        from: { opacity: 0, x: 200},
        to: { 
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 200,
        },
        config:{mass: 1, tension: 120,friction: 60, duration: 500},
        delay: 100
    })

    const Appearing2 = useSpring({
        from: { x: -200, transform: 'rotateY(90deg)'},
        to: { 
            x: isInView ? 0 : -200,
            transform: isInView ? 'rotatey(0deg)' :'rotateY(90deg)'
        },
        config:{mass: 1, tension: 120,friction: 60, duration: 500},
    })

    const Appearing3 = useSpring({
        from: { x: 200},
        to: { 
            x: isInView ? 0 : 200,
        },
        config:{mass: 1, tension: 120,friction: 60, duration: 500, },
        delay:100
    })

    const text = 'My creative and tech journey began during my years of study.\n I had the opportunity to collaborate with talented people \nand work on projects that made an impact \non environmental and social issues. \nNow, I’m interested in taking on challenges and projects \nthat bring positive outcomes. \nOutside of work, I enjoy good coffee, listening to music, \nengaging in creative projects, and exploring new places.';



    return (
        <div class="row AboutDetailBackground m-0 p-0 d-flex justify-content-around align-self-center overflow-hidden" id="about-section" ref={ref}>
                <div class="col-5 ColumnImagesAboutDetail d-none d-md-flex">
                    <animated.div class="aboutImage2 p-0 m-0" style={Appearing2}></animated.div>
                    <animated.div class="aboutImage3 p-0 m-0" style={Appearing2}></animated.div>
                </div>
                <div class="col-md-7 p-4 ml-4 d-flex flex-column justify-content-center ">
                    <div class="row m-0 p-0 d-flex">
                        <animated.h1 class="AboutDetailHeading d-flex justify-content-start d-none d-md-flex  p-0" style={Appearing}>ABOUT</animated.h1>
                        <animated.h1 class="AboutDetailHeadingMobile d-md-none d-flex justify-content-start p-0" style={Appearing3}>ABOUT</animated.h1>
                    </div>
                    <div class="row m-0 p-0 d-flex">
                        <animated.p class="text-about p-0 m-0 pl-4" style={Appearing}>{text}</animated.p> 
                    </div>
                </div>
        </div>
    );
}

export default AboutDetail;