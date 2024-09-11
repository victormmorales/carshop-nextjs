import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridCars, NoResult, Pagination, Separator } from "@/components/Shared";

export default function SearchPage(props) {
  const { cars, pagination, searchText } = props;
  const hasResult = size(cars) > 0;

  useEffect(() => {
    document.getElementById("search-cars").focus();
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />
          <h2>Buscando... {searchText}</h2>
          <Separator height={50} />
          {hasResult ? (
            <>
              <GridCars cars={cars} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                pageSize={pagination.pageSize}
                totalPages={pagination.pageCount}
              />
              <Separator height={30} />
            </>
          ) : (
            <>
              <Separator height={100} />
              <NoResult text="No se han encontrado resultados 🚘" />
              <Separator height={250} />
            </>
          )}
        </Container>
      </BasicLayout>
    </>
  );
}
