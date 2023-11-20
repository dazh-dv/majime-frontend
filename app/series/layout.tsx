import AsideSearch from "@components/aside-search";
import { Container } from "react-bootstrap";

export default function SeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="d-block d-lg-flex gap-4 mt-5">
      <AsideSearch />
      <main>{children}</main>
    </Container>
  );
}
