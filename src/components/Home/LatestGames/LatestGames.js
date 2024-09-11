import { useState, useEffect } from "react";
import { Car } from "@/api";
import { GridCars } from "@/components/Shared";

const carCtrl = new Car();

export function LatestGames(props) {
  const { title, limit = 9, brandId = null } = props;
  const [cars, setCars] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await carCtrl.getLatestPublished({
          limit,
          brandId,
        });
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!cars) return null;

  return (
    <div>
      <h2>{title}</h2>
      <GridCars cars={cars} />
    </div>
  );
}
