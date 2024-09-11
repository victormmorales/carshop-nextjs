import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import Link from "next/link";
import { Car } from "@/api";
import { Label } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./BannerLastGamePublished.module.scss";
import { ENV } from "@/utils";

const carCtrl = new Car();

export function BannerLastGamePublished() {
  const [car, setCar] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await carCtrl.getLastPublished();
        setCar(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!car) return null;

  const wallpaper = `${ENV.SERVER_HOST}${car.attributes.wallpaper.data.attributes.url}`;
  // console.log("car", car.attributes);
  const price = fn
    .calcDiscountedPrice(car.attributes.price, car.attributes.discount)
    .toLocaleString("es");

  return (
    <div className={styles.container}>
      <Image src={wallpaper} className={styles.wallpaper} />

      <Link className={styles.infoContainer} href={car.attributes.slug}>
        <Container>
          <span className={styles.date}>
            Nuevo
            {/* {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()} */}
          </span>

          <h2>{car.attributes.title}</h2>

          <p className={styles.price}>
            <label>-30%</label>
            <Label.Discount>-{car.attributes.discount}%</Label.Discount>
            <span className={styles.finalPrice}>{price}€</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
