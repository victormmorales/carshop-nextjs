import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridCars, Separator, NoResult, Pagination } from "@/components/Shared";

export default function BrandPage(props) {
  const { cars, brand, pagination } = props;
  const hasProducts = size(cars) > 0;

  return (
    <>
      <BasicLayout relative>
        <Container>
          <Separator height={50} />
          <h2>{brand.attributes.title}</h2>
          {hasProducts ? (
            <>
              <GridCars cars={cars} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                pageSize={pagination.pageSize}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult
              text={`La marca ${brand.attributes.title} aun no tiene coches 🚘`}
            />
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
