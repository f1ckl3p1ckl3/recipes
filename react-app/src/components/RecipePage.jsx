import Image from 'react-bootstrap/Image';
import styles from '../styles/recipepage.module.css';

export default function RecipePage(props)
{
    var ingredientsList = props.ingredients;
    var methodList = props.method;

    return(
        <div className={styles.recipeContainer}>
            
            <div className={styles.contentContainer}>
                
                <div className={styles.titleContainer}>
                    <h1>{props.title}</h1>
                </div>

                <div className={styles.descriptionContainer}>
                    <p>{props.summary}</p>
                </div>

                
                <div className={styles.imageContainer}>
                    <Image src={props.image} fluid rounded class="fitting-image"/>
                </div>

                <div className={styles.ingredientsContainer}>
                <h2>Ingredients:</h2>
                <p>
                    <ul>
                    {ingredientsList.map((ingredient) => (
                        <li>{ingredient}</li>
                    ))}
                </ul>
                </p>
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





{/* 
        // <div className={styles.body}>
        //     <h1>{props.title}</h1>
        //     <h6>{props.summary}</h6>
        //     <div className={styles.image}>
        //         <figure>
        //         <Image src={props.image} fluid rounded class="fitting-image"/>
        //         <figcaption><i>{props.title}</i></figcaption>
        //         </figure>
        //     </div>
        //     <div class="container">
        //     <div className={styles.ingredients}>
        //     <h2>Ingredients:</h2>
        //     <p>
        //         <ul>
        //         {ingredientsList.map((ingredient) => ( */}
        {/* //             <li>{ingredient}</li>
        //         ))}
        //         </ul>
        //     </p>
        //     </div>
        //     </div> */}
        {/* //     <h2>Method:</h2>
        //     <p>
        //         <ol>
        //     {methodList.map((method) => ( */}
        {/* //             <li>{method}</li>
        //         ))}
        //         </ol>
        //     </p>
        // </div>
//     );
// } */}