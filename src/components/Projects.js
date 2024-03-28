import projImg1 from '../assets/img/12.png';
import projImg2 from '../assets/img/7.PNG';
import projImg3 from '../assets/img/13.png';
import projImg4 from '../assets/img/2.PNG';
import projImg5 from '../assets/img/1.PNG';
import projImg6 from '../assets/img/6.PNG';
import projImg7 from '../assets/img/4.PNG';
import { Tab,Nav,Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";

export const Projects= () =>{

  const projectsArr = [
    {
      title: "Books Shop",
      description: "An ASP.NET Core 3.0 MVC application. Features include: Searching, shopping cart, authentication, managing users and roles, validation, CRUD resources. Front-end: Html and CSS.",
      imgUrl: projImg1,
      code:"https://gitlab.com/Joudhabib/books-shop/-/tree/master",
    },
    {
      title: "Coffee Shop",
      description: "An React Material UI 5 application.",
      imgUrl: projImg2,
      code:"https://gitlab.com/Joudhabib/coffeeshopreactproject/-/tree/master/",
    },
    {
      title: "Heart Disease Prediction",
      description: "Models to predict heart using supervised, unsupervised machine learning algorithm and deep learning algorithm.",
      imgUrl: projImg3,
      code:"https://gitlab.com/Joudhabib/heart-disease-prediction",
    },
    {
      title: "Social Media PlatForm",
      description: "An ASP.NET Core 5 RESTful API application. Features include: Comments, likes, votes(up,down), chat app real time using signalR, validation, searching, filtering,   paging, CRUD resources, authentication (OAuth) with JWT.",
      imgUrl: projImg4,
      code:"https://gitlab.com/Joudhabib/SocialMediaPlatForm/-/tree/master",
    },
    {
      title: "Brands Shop",
      description: "An ASP.NET Core 5 RESTful API application for shopping. Features include: Validation, searching, filtering, paging, CRUD resources, authentication (OAuth) with JWT, using autoMapper, unit testing and health checks.",
      imgUrl: projImg5,
      code:"https://gitlab.com/Joudhabib/brands",
    },
    {
      title: "Employees Management",
      description: "A NodeJs RESTful API application.Features include: Validation, searching, filtering, paging, CRUD resources, authentication (OAuth) with JWT, error handling.",
      imgUrl: projImg6,
      code:"https://gitlab.com/Joudhabib/employees-management",
    },
    {
        title: "Bands",
        description: "An ASP.NET Core 3.0 RESTful API application for orgnizing bands and albums.",
        imgUrl: projImg7,
        code:"https://gitlab.com/Joudhabib/bands/-/tree/master",
      },
  ];
    return(
       <section className="project" id="projects">
        <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                  
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      
                      <Row>
            {
                projectsArr.map((project, index)=>{
                    return(
                        <ProjectCard
                        key={index}
                        {...project}
                        />
                    )
                })
            }
          </Row>

         </Tab.Pane>
                
                  </Tab.Content>
                </Tab.Container> 
                </div>}
            </TrackVisibility>
          </Col>
            </Row>
        </Container>
    
       </section>
    )
}