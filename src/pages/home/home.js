import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd } from "@/components/Shared";

const brandId = {
  Volkswagen: 1,
  Toyota: 2,
  "Mercedes-Benz": 4,
  Ford: 3,
};

export default function HomePage() {
  return (
    <>
      {/* SEO */}

      <BasicLayout>
        <Home.BannerLastGamePublished />
        <Separator height={100} />

        <Container>
          <Home.LatestGames title="Últimos lanzamientos" />
        </Container>
        <Separator height={100} />

        <BarTrust />
        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="Volkswagen"
            limit={3}
            brandId={brandId.Volkswagen}
          />
        </Container>
        <Separator height={100} />

        <BannerAd
          title="Registrate y obten los mejores precios"
          subtitle="¡Compara con otros juegos y elige el tuyo!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/images/img01.png"
        />
        <Separator height={50} />

        <Container>
          <Home.LatestGames title="Toyota" limit={3} brandId={brandId.Toyota} />
        </Container>
        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
