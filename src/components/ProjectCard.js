import {  Col,Card } from 'react-bootstrap';
import codeimg from '../assets/img/17.png';
export const ProjectCard = ({title, description, imgUrl,code})=> {
    return(
        <Col > 
            <Card className="card">
             <img src={imgUrl} className='imgbx' />
             <div className="card-body">
                <h4>{title}</h4>
                 <span className='des'>
                    {description}
                 </span>
                 </div>
                 <div  className='code' >
                 <a href={code}><img src={codeimg} alt="" /></a>
   
                 </div>
          
            </Card>
        </Col>
    )
}

