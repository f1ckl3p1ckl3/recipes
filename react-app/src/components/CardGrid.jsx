import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import risotto from '../assets/pumpkinrisotto.jpg';
import chillicon from '../assets/chillicon.jpg';
import chorizochicken from '../assets/chorizochicken.jpg';
import pesto from '../assets/pesto.jpg';
import lasagne from '../assets/lasagne.jpg';
import butterchicken from '../assets/butterchicken.jpg';
import bolognese from '../assets/bolognese.jpg';
import puttanesca from '../assets/puttanesca.jpg';
import UniqueCard from './UniqueCard';
import myData from '../recipes/pumpkinrisotto.json';


const images = [bolognese, chorizochicken, risotto, chillicon, lasagne, butterchicken, pesto, puttanesca];
const titles = ["Bolognese", "Chorizo Chicken", "Pumpkin and Chorizo Risotto", "Chilli Con Carne", "Lasagne", "Butter Chicken", "Basil Pesto", "Puttanesca"];
const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin, ex sollicitudin efficitur placerat, arcu odio iaculis magna, sed tincidunt nibh felis nec libero..."];
const link = ['/', '/session1', '/session2', '/session3'];


function CardGrid() {
  return (
    <Row xs={3} md={3} className="g-4">
      {Array.from({ length: titles.length }).map((_, idx) => (
        <Col key={idx}>
          <UniqueCard title={myData.title} text={text[0]} image={images[idx] } link={myData.url}/>
        </Col>
      ))}
    </Row>
  );
}

export default CardGrid;

