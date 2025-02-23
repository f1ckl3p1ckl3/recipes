import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import styles from '../styles/uniquecard.module.css';

export default function UniqueCard(props)
{
    return (
        <Card className={styles.card}>
            <Link to={props.link} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    );
}