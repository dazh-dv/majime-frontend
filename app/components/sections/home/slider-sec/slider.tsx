/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./index.module.css";
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import type { serieSliderType } from "@/data/series";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Slider({ series }: { series: serieSliderType[] }) {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, EffectFade, Autoplay],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: false,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div id={styles.slider} className="swiper">
      <div className={styles.swiper_wrapper + " swiper-wrapper"}>
        {series.map((serie) => (
          <div
            key={serie.title}
            className={styles.swiper_slide + " swiper-slide"}
          >
            <div className={styles.slide_item}>
              <a href="/" className={styles.item_cover}>
                <img
                  className="manga-poster-img"
                  src={serie.banner}
                  alt={serie.title}
                />
              </a>
              <div className={styles.poster}>
                <a href="/">
                  <img
                    src={serie.banner}
                    alt={serie.title}
                    className="manga-poster-img"
                  />
                </a>
              </div>
              <div className={styles.item_content}>
                <div className={styles.sub_text}>Chapter: {serie.chapter}</div>

                <div className={styles.title_text}>
                  <a
                    title="Zom 100: Bucket List of the Dead"
                    href="/zom-100-bucket-list-of-the-dead-2235"
                  >
                    {serie.title}
                  </a>
                </div>
                <div className={styles.item_details}>
                  <div className={styles.item_description}>
                    {serie.description}
                  </div>
                  <div className={styles.list_genders}>
                    {serie.genders.map((gender) => (
                      <span key={gender}>{gender}</span>
                    ))}
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className={styles.read_buttons}>
                  <a
                    href="/read/zom-100-bucket-list-of-the-dead-2235"
                    className={
                      styles.button_slide_read + " " + styles.button_slide
                    }
                  >
                    Read Now
                  </a>
                  <a
                    href="/zom-100-bucket-list-of-the-dead-2235"
                    className={
                      styles.button_slide_info + " " + styles.button_slide
                    }
                  >
                    View Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="swiper-pagination"></div>

      <div className={styles.navigation}>
        <div className={styles.slide_button + " swiper-button-prev"}>
          <ChevronRightIcon />
        </div>
        <div className={styles.slide_button + " swiper-button-next"}>
          <ChevronLeftIcon />
        </div>
      </div>
    </div>
  );
}
