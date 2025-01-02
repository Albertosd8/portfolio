import '../components/Projects.css';
import { animated, useScroll} from 'react-spring';
import { useRef, useState } from 'react';

const desc1 = 'Built an API for analyzing environmental data about the air quality in the Guadalajara metropolitan area. The residents in the Guadalajara metropolitan area are suffering from the effects of bad air quality and global warming, we can analyze the negative effects of forest fires and deforestation through the data of satellite images, the API analyzes these images and it’s possible to achieve a proper analysis by using as well the AIQ (Air Quality Index) which provides us a reference to measure how healthy is the air quality.';
const desc2 = 'Built a mobile application using Flutter that works as an intermediary between customers and establishments. Most of the time we encounter ourselves with long lines for ordering food or coffee while trying to get through our day with enough energy, being aware that time is our most valuable currency we came up with a solution, allowing customers to get their orders in time.';
const desc3 = 'Built a web application using AngularJS and JavaScript that works as an intermediary between artisans and customers. Due to the covid-19 pandemic artisans in Mexico weren’t able to earn income as they usually do with the tourist flow, this empowers local businesses by allowing them to expand to other markets.';

const pname1 = 'API for environmental data analysis';
const pname2 = 'EATESO App';
const pname3 = 'Artisan website';

const image1 = "./api_project.png";
const image2 = "./app_project.png";
const image3 = "./website_project.png";

function Project_leftview({number, name,description,image}){
    return(
        <div class="row m-0 my-4 py-4 p-0 d-flex align-items-start">
            <div class="col-md-6 m-0 p-0 px-4">
                <img class="project-image" src={image}></img>
            </div>
            <div class="col-md-6 m-0 mt-4 p-0 px-4">
                <div class="row m-0 pb-4 d-flex align-items-baseline">
                    <div class="col-1 m-0 p-0">
                        <h2 class="project-title-number m-0 p-0">{number}</h2>
                    </div>
                    <div class="col-11 m-0 p-0">
                        <h2 class="project-title-text m-0 p-0">{name}</h2>
                    </div>
                </div>
                <p class="project-description mt-4 p-0">{description}</p>
            </div>
        </div>
    );
}
function Project_rightview({number, name,description,image}){
    return(
        <div class="row m-0 my-4 pt-4 p-0 d-flex align-items-start">
            <div class="col-md-6 m-0 p-0 px-4">
                <div class="row m-0 py-4 d-flex align-items-baseline">
                    <div class="col-1 m-0 p-0">
                        <h2 class="project-title-number m-0 p-0">{number}</h2>
                    </div>
                    <div class="col-11 m-0 p-0">
                        <h2 class="project-title-text m-0 p-0">{name}</h2>
                    </div>
                </div>
                <p class="project-description mt-4 p-0">{description}</p>
            </div>
            <div class="col-md-6 m-0 p-0 px-4 order-first order-md-1">
                <img class="project-image" src={image}></img>
            </div>
        </div>
    );
}

function Projects(){
    const [scrollVal, setScrollVal] = useState(true);
    const [scrollValCard1, setScrollValCard1] = useState(true);
    const [scrollValCard2, setScrollValCard2] = useState(true);
    const [scrollValCard3, setScrollValCard3] = useState(true);

    const { scrollYProgress } = useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            setScrollVal(scrollYProgress*120);
            //Obtain project container element
            var projectSectionElement = document.getElementById('projects-section');
            //Divide height of element into 3 (number of projects being displayed)
            var IndividualProjectHeight = projectSectionElement.offsetHeight/3;
            //Percentage value to use for counting degrees, which makes the project card flip
            var DegreePercentageValue = 80/100;
            //Get position value that starts from 0, if it's less than zero, don't count it
            var sumCount = (scrollY-(projectSectionElement.offsetTop))+IndividualProjectHeight; 
            //Value of going from 0% to 100% of startind and ending the flip
            var CounterTo100 = sumCount/(IndividualProjectHeight/100);
            //Value of progression from 0 to limit angle
            var ProgressionValue = DegreePercentageValue * CounterTo100;
            
            //Cases
            if(ProgressionValue < 0){
                setScrollValCard1(90);
                setScrollValCard2(90);
                setScrollValCard3(90);
            } else if((ProgressionValue >= 0) && (ProgressionValue <= 80)){
                setScrollValCard1(80-ProgressionValue);
            } else if((ProgressionValue >= 60) && (ProgressionValue <= 135)){
                setScrollValCard2(150-ProgressionValue);
            } else if((ProgressionValue >= 130) && (ProgressionValue <= 200)){
                setScrollValCard3(210-ProgressionValue);
            } 
          },
    })

    return(
        <div class="row m-0 p-4 projects" id="projects-section">
            <div class="col-12 m-0 p-0">
                <div class="row m-0 p-0 projects-empty-space"></div>
                <div class="row m-0 p-0 project-container-header">
                    <animated.h2 class="projects-heading" style={{transform: `translate(${scrollVal}px)`}}>
                        SELECTED WORK
                    </animated.h2>
                </div>
                <hr class="projects-heading-line"></hr>
                <div class="row m-0 p-0" style={{transform: `rotateX(${scrollValCard1}deg)`}}>
                    <Project_leftview number={'001'} name={pname1} description={desc1} image={image1}/> 
                </div>
                <div class="row m-0 p-0" style={{transform: `rotateX(${scrollValCard2}deg)`}}>
                    <Project_rightview number={'002'} name={pname2} description={desc2} image={image2}/>    
                </div>
                <div class="row m-0 p-0 project-empty-separation"></div>
                <div class="row m-0 p-0" style={{transform: `rotateX(${scrollValCard3}deg)`}}>
                    <Project_leftview number={'003'} name={pname3} description={desc3} image={image3}/>   
                </div>
            </div>
        </div>
    );
}

export default Projects;