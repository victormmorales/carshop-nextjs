import { Brand, Car } from "@/api";

export { default } from "./brand";

export async function getServerSideProps(context) {
  const { query, params } = context;
  const { page = 1 } = query;
  const { brand } = params;

  const brandCtrl = new Brand();
  const responseBrand = await brandCtrl.getBySlug(brand);

  const carCtrl = new Car();
  const responseCar = await carCtrl.getCarsByBrandSlug(brand, page);

  return {
    props: {
      brand: responseBrand,
      cars: responseCar.data,
      pagination: responseCar.meta.pagination,
    },
  };
}
