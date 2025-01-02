import '../components/Contact.css';
import { animated, useInView, useSpring, useTrail } from 'react-spring';

function Contact(){
    const [ref, isInView ] = useInView(
        {
            rootMargin: '-50% 0% -50% 0px',
        },
    );

    const Anim = useSpring({
        from: { opacity: 0, innerHeight: 0, maxHeight: 0},
        to: { opacity: isInView? 1 : 0, 
            innerHeight: isInView? 100 : 0, 
            maxHeight: isInView? 180 : 0,
        },
        config:{ mass: 1, tension: 120,friction: 60, duration: 800 },
    });

    const Anim2 = useSpring({
        from: { opacity: 0, y: 100},
        to: { opacity: isInView? 1 : 0, 
            y: isInView? 0 : 100, 
        },
        delay: 100,
        config:{ mass: 1, tension: 120,friction: 60, duration: 800 },
    });

    const Anim3 = useSpring({
        from: { opacity: 0, y: 100},
        to: { opacity: isInView? 1 : 0, 
            y: isInView? 0 : 100, 
        },
        config:{ mass: 1, tension: 120,friction: 60, duration: 800 },
    });

    return (
        <div class="row ContactBackground m-0 p-0 d-flex justify-content-around align-items-stretch" id="contact-section" ref={ref}>
            <div class="col-12 p-4 m-0 d-flex justify-content-between flex-column"> 
                <div class="contactSpace "></div>
                <div class="row contactSubheadingSpace align-items-end  ml-2 m-0 p-4">
                    <animated.h1 class="ContactHeading pl-4 ml-4 d-none d-md-flex justify-content-start" style={Anim}>Let's</animated.h1>
                    <animated.h1 class="ContactHeading pl-4 ml-4 d-none d-md-flex justify-content-start" style={Anim}>connect!</animated.h1>
                    <animated.h1 class="ContactHeadingMobile p-0 m-0 d-md-none d-flex justify-content-start" style={Anim3}>Let's<br></br>connect!</animated.h1>
                    <animated.div class="row m-0 p-2 d-md-none" style={Anim2}>
                        <p class="text-contact p-0 m-0 d-flex justify-content-end">Feel free to reach out if you<br></br>wanna start a project or<br></br>collaborate with me</p>
                    </animated.div>
                </div>
                {/* MOBILE */}
                <div class="row mb-4 pb-4 m-0 p-0 d-md-none">
                    <a class="contactEmailTextMobile d-flex justify-content-center" href="mailto:alb.sandoval.lpz@gmail.com">
                        alb.sandoval.lpz@gmail.com
                    </a>
                </div>
                <div class="row align-items-center m-0 p-2 d-md-none d-flex">
                    <div class="col-6 m-0 px-4 d-flex flex-column justify-content-center">
                        <a class="m-0 px-4 text-contact d-flex justify-content-center" href="https://www.linkedin.com/in/alberto-sandoval-6b79ab14a" target="_blank">  
                            <div class="row m-0 p-0">
                                <div class="col-3 m-0 p-0  d-flex justify-content-center">
                                    <img class="logo" src='./LI-In-Bug.png'></img>
                                </div>
                                <div class="col-9 m-0 pr-4">
                                    <p class="m-0 p-0 text-contact-mobile">Linkedin</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-6 m-0 px-4 d-flex flex-column justify-content-center">
                        <a class="m-0 px-4 text-contact d-flex justify-content-center" href="https://github.com/Albertosd8" target="_blank">
                            <div class="row m-0 p-0">
                                <div class="col-3 m-0 p-0 d-flex justify-content-center">
                                    <img class="logo2" src='./github-mark-white.png'></img>
                                </div>
                                <div class="col-9 m-0 pr-4">
                                    <p class="m-0 p-0 text-contact-mobile">Github</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row align-items-center m-0 p-2 d-md-none d-flex">
                    <p class="m-0 p-0 d-flex align-self-center justify-content-center text-contact-mobile2">@ 2024 Alberto Sandoval</p>
                </div>
                {/* MOBILE */}
                <div class="row d-flex justify-content-around m-0 mb-4 p-4 p-0 d-none d-md-flex">
                    <animated.div class="col-md-4 p-0 d-flex justify-content-end" style={Anim2}>
                        <p class="text-contact d-none d-md-flex">Feel free to reach out if you<br></br>wanna start a project or<br></br>collaborate with me</p>
                    </animated.div>
                    <div class="col-md-5 p-0 d-flex">
                        <div class="row contact-email m-0 p-0 mb-1 h-75">
                            <a class="contactEmailText" href="mailto:alb.sandoval.lpz@gmail.com">
                                alb.sandoval.lpz@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row contact-info m-0 p-4 d-none d-md-flex align-items-center">
                    <div class="col-2 m-0 p-0 ">
                        <a class="m-0 p-0 text-contact" href="https://www.linkedin.com/in/alberto-sandoval-6b79ab14a" target="_blank">
                            <div class="row m-0 p-0 d-flex justify-content-center align-items-center">
                                <div class="col-3 m-0 p-0 d-flex justify-content-center">
                                    <img class="logo" src='./LI-In-Bug.png'></img>
                                </div>
                                <div class="col-9 m-0 p-0">
                                    <p class="m-0 p-0 text-contact">Linkedin</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-2  m-0 p-0">
                        <a class="m-0 p-0 text-contact" href="https://github.com/Albertosd8" target="_blank">
                            <div class="row m-0 p-0 d-flex justify-content-center align-items-center">
                                <div class="col-3 m-0 p-0 d-flex justify-content-center">
                                    <img class="logo2" src='./github-mark-white.png'></img>
                                </div>
                                <div class="col-9 m-0 p-0">
                                    <p class="m-0 p-0 text-contact">Github</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-5 m-0 p-0 d-flex justify-content-center align-self-center">
                        <p class="m-0 p-0 d-flex align-self-center text-contact">@ 2024 Alberto Sandoval</p>
                    </div>
                    <div class="col-3  m-0 p-0 d-flex justify-content-center align-self-center">
                        <p class="m-0 p-0 d-flex align-self-center text-contact">Guadalajara, México.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
