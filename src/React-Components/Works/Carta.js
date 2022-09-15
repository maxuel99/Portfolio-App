import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Carta = ({props}) => {
    return ( 
        <Card style={{ width: "18rem" }} className="card">
            <Card.Img
              variant="top"
              src={props.image}
              style={{ height: "285px" }}
            />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
              <Button variant="primary" onClick={props.onClick}>{props.btn}</Button>
            </Card.Body>
          </Card>
     );
}
 
export default Carta;