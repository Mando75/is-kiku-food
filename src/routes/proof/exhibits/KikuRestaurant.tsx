import styles from "../exhibits.module.scss";
import kikuRestaurant from "../../../assets/img/kiku-restaurant.png";

interface IKikuRestaurantProps {
  letter: string;
}

function KikuRestaurant({ letter }: IKikuRestaurantProps) {
  return (
    <details>
      <summary role="button">Exhibit {letter} - Kiku Restaurant</summary>
      <div className={styles.media}>
        <figure>
          <img src={kikuRestaurant} alt="A map of Kiku Restaurants in the US" />
        </figure>
      </div>
      <p>
        Kiku's relationship with food extends beyond sharing names. When
        searching for the term "Kiku" in Google maps, all of the top results are
        restaurants. Is Kiku actually the owner of a nationwide restaurant
        mega-conglomerate? Or do all these establishments specialize in serving
        Kiku-infused dishes? What is she hiding?
      </p>
    </details>
  );
}

export default KikuRestaurant;
