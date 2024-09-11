import { Car } from "@/api";

export { default } from "./search";

export async function getServerSideProps(context) {
  const {
    query: { s, page = 1 },
  } = context;

  const carCtrl = new Car();
  const response = await carCtrl.searchCars(s, page);

  return {
    props: {
      cars: response.data,
      pagination: response.meta.pagination,
      searchText: s,
    },
  };
}
