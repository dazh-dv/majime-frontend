import Slider from "./slider";
import { seriesSlider } from "@/data/series";

export default function SliderSec() {
  return (
    <>
      <Slider series={seriesSlider} />
    </>
  );
}
