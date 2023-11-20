import GroupsSec from "@components/sections/home/groups-sec";
import NewsSeries from "@components/sections/home/news-series";
import NoticeSec from "@components/sections/home/notices-sec";
import SliderSec from "@components/sections/home/slider-sec";
import TrendringSeriesSec from "@components/sections/home/trending-series-sec";
import UpdatesSec from "@components/sections/home/updates-sec";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container fluid="xxl" className="p-0">
        <SliderSec />
        <NoticeSec />
        <TrendringSeriesSec />
        <UpdatesSec />
        <NewsSeries />
      </Container>
      {/* <Container className="p-0">
        <NoticeSec />
        <TrendringSeriesSec />
        <UpdatesSec />
        <NewsSeries />
      </Container> */}
      <GroupsSec />
    </main>
  );
}
