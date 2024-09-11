import Link from "next/link";
import { map } from "lodash";
import { ENV } from "@/utils";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridCars.module.scss";

export function GridCars(props) {
  const { cars } = props;

  return (
    <div className={styles.gridCars}>
      {map(cars, (car) => (
        <Link
          key={car.id}
          href={`/${car.attributes.slug}`}
          className={styles.car}
        >
          <div>
            <img
              src={`${ENV.SERVER_HOST}${car.attributes.cover.data.attributes.url}`}
            />
            {car.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${car.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>

          <div>
            <span>
              {car.attributes.brand.data.attributes.title} -{" "}
              {car.attributes.title}
            </span>
            <span className={styles.price}>
              {fn
                .calcDiscountedPrice(
                  car.attributes.price,
                  car.attributes.discount
                )
                .toLocaleString("es")}
              €
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
