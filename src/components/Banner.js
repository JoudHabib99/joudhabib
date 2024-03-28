import { useState, useEffect } from "react";
import { Container, Row, Col,Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import navIcon3 from '../assets/img/joud.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner =() =>{
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const[text, setText]=useState('');
    const [delta,setDelta]=useState(300 - Math.random() * 100);
    const toRotate =["Computer Science Engineer", "Full Stack Developer"];
    const period=2000;

    useEffect(()=>{
       let ticker = setInterval(()=>{
            tick()
       },delta)
 
       return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = ()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta =>prevDelta/2)
        }

        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
return(
<section className="banner" id="home">
    <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={5}>
                <img src={navIcon3} className="profile" alt="Headder img" width={{xs: '35vh', md: '40vh'}}  height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
             </Col>
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">
              
                Ready for the Next Adventure!
                </span>
                <h1>{`Hi! I'm Joud Habib A `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Computer Science Engineer", "Full Stack Developer"]'><span className="wrap">{text}</span></span></h1>
                <p>I graduated from the University of Aleppo and I am devoted to developing software engineering solutions to real-world
problems, mainly skilled in backend development using ASP.NET Core, NodeJs, RESTful APIs and React.Js.</p>
               <button> <Nav.Link href="#connect" onClick={()=>console.log('connect')} >Let's connect<ArrowRightCircle size={24}/></Nav.Link>
               </button></div>}
            </TrackVisibility>
          </Col>
         
        </Row>
    </Container>
</section>

)
}