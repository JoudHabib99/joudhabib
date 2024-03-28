import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import navIcon1 from '../assets/img/download (9).png';
import navIcon2 from '../assets/img/download (10).png';
import navIcon3 from '../assets/img/download (11).png';
import navIcon4 from '../assets/img/download (12).png';

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
 
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
return(
    <section className="skills" id="skills">
      <Container>
        <Row>
            <Col>
            <div className="skill-bx">
               <h2>
                Skills
               </h2>
               
               <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                 <img src={navIcon1} alt="Image"/>
                 <h5>Software engineer</h5>
               <p>* Web Development: Frontend and Backend.</p> 
            
                </div>
                <div className="item">
                 <img src={navIcon2} alt="Image"/>
                 <h5>Web development</h5>
                <p>* Backend: Asp.Net core, Node.js, Restful APIs and familiar with Flask and Php.</p> 
                 <p>* Frontend: React.js, HTML, CSS.</p>
                </div>
                <div className="item">
                 <img src={navIcon3} alt="Image"/>
                 <h5>Machine  learning</h5>
                 <p>* Machine  Learning: familiar with supervised and unsupervised techniques.</p>
                 <p>* Deep  Learning: familiar with supervised and unsupervised techniques.</p>
                </div>
                <div className="item">
                 <img src={navIcon4} alt="Image"/>
                 <h5>Data science</h5>
                 <p>*Good in data cleaning, processing, exporatory data analysis (EDA) and reporting.</p>
             
                </div>
               </Carousel>
               
            </div>
            </Col>
        </Row>
      </Container>
    </section>
)

}