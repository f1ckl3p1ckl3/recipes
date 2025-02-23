import CardGrid from './CardGrid';
import styles from '../styles/homepage.module.css';

export default function HomePage() {
    return (
        <div>
        <div className={styles.body}>
            <h1> simple homepage </h1>
            <CardGrid />
        </div>
        <h2></h2>
        </div>

    );
}