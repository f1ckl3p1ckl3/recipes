import Image from 'react-bootstrap/Image';
import styles from '../styles/recipepage.module.css';

export default function RecipePage(props)
{
    var ingredientsList = props.ingredients;
    var methodList = props.method;
    const hasSections = ingredientsList.some(group => group.section);

    return(
        <div className={styles.recipeContainer}>
            
            <div className={styles.contentContainer}>
                
                <div className={styles.titleContainer}>
                    <h1>{props.title}</h1>
                </div>

                <div className={styles.servesContainer}>
                    <p>Serves: {props.serves}</p>
                </div>

                <div className={styles.sourceContainer}>
                    <p>Source: {props.source}</p>
                </div>
                
                <div className={styles.imageContainer}>
                    <Image src={props.image} fluid rounded class="fitting-image"/>
                </div>
                <div className={styles.descriptionContainer}>
                    <p>{props.extendedSummary}</p>
                </div>

                <div className={`${styles.ingredientsContainer} ${hasSections ? styles.withSections : styles.noSections}`}>
                    <h2>Ingredients:</h2>
                    {ingredientsList.map((group, index) => (
                        <ul key={index} className={styles.ingredientGroup}>
                        {group.section && (
                            <li className={styles.ingredientSection}>{group.section}</li>
                        )}
                        {group.items.map((item, i) => (
                            <li key={i} className={styles.ingredientItem}>{item}</li>
                        ))}
                        </ul>
                    ))}
                </div>

                <div className={styles.methodContainer}>
                    <h3>Method:</h3>
                    <p>
                        <ol>
                            {methodList.map((method) => (
                            <li>{method}</li>
                            ))}
                        </ol>
                    </p>
                </div>
            
            </div>

        </div>
    );
}
