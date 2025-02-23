import Image from 'react-bootstrap/Image';

import styles from '../styles/recipepage.module.css';

export default function RecipePage(props)
{
    return(
        <div className={styles.body}>
            <h1>{props.title}</h1>
            <div className={styles.image}>
                <Image src={props.image} fluid rounded/>
            </div>
            <p>
                {props.text}
            </p>
        </div>
    );
}