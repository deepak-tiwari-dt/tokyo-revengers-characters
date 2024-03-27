import styles from "../Card/Card.module.css";
import { characters } from "../../db/characters";
import parse from "html-react-parser";

const Card = () => {
  return (
    <div className={styles.hero}>
      {characters.map((character, index) => (
        <div key={index}>
          <h2 className={styles.character}>{`Character ${index + 1}`}</h2>
          <h3 className={styles.title}>{character.name}</h3>
          <div className={styles.cardContent}>
            <p className={styles.characterInfo}>
              {parse(character.description)}
            </p>
            <span className={styles.imgWrapper}>
              <img
                src={character.image}
                alt={character.name}
                className={styles.img}
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
