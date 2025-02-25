import Image from 'react-bootstrap/Image';
import styles from '../styles/recipepage.module.css';

export default function RecipePage(props)
{
    var ingredientsList = props.ingredients;
    var methodList = props.method;

    return(
        <div className={styles.body}>
            <h1>{props.title}</h1>
            <h6>{props.summary}</h6>
            <div className={styles.image}>
                <figure>
                <Image src={props.image} fluid rounded/>
                <figcaption><i>{props.title}</i></figcaption>
                </figure>
            </div>
            <h2>Ingredients:</h2>
            <p>
                <ul>
                {ingredientsList.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
                </ul>
                {/* {props.ingredients} */}
            </p>
            <h2>Method:</h2>
            <p>
                <ol>
            {methodList.map((method) => (
                    <li>{method}</li>
                ))}
                </ol>
            </p>
        </div>
    );
}