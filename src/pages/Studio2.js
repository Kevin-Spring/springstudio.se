import React from "react";
import { StudioSingle } from "../components/StudioSingle";
import { Helmet } from "react-helmet";
// import { endpoints } from '../endpoints/endpoints'

function importAll(importedItem) {
  let images = {};
  importedItem.keys().forEach((item, index) => {
    images[item.replace("./", "")] = importedItem(item);
  });
  return images;
}

const images_studio_slider = importAll(
  require.context(
    "../assets/img/studio_2_slider/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const images_studio_gallery = importAll(
  require.context(
    "../assets/img/studio_2_gallery/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const studio_floorplan = importAll(
  require.context("../assets/img/floorplan/", false, /\.(png|jpe?g|svg|webp)$/)
);
// const url = endpoints[8].url

export const Studio2 = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>
          Studios prepped for all creative needs in Stockholm - Studio 2
        </title>
        <meta
          name="description"
          content="Studio 2 offers a 250 square meter wide creative area and allows a smooth workflow for productions with a large amount of gear or large sets."
        />
        <meta
          property="og:title"
          content="Studios prepped for all creative needs in Stockholm - Studio 2"
        />
        <meta
          property="og:description"
          content="Studio 2 offers a 250 square meter wide creative area and allows a smooth workflow for productions with a large amount of gear or large sets."
        />
        <link rel="canonical" href="https://springstudio.se/studio/2" />
      </Helmet>
      <StudioSingle
        /* content={url} */ transition={transition}
        title={"STUDIO"}
        preamble={
          "Located near the 4m high garage doors trucks and gear can easily be rolled into the studio. Allowing a smooth work flow for the productions with a large amount of gear or large sets. Studio 2 offers a 250 square meter wide creative area with curtains alongside the walls creating a gigantic black box with a beautiful patina on the stone floor."
        }
        studio_number={"2"}
        slide_title={"CREATIVITY"}
        slide_text={
          "Studio 2 is the perfect studio for creative ideas. Everything from production rehearsals, living rooms on fire, to water pools has taken place in the 250 meter wide box of creative spirit."
        }
        slides={true}
        slide_items={[
          images_studio_slider["slide_1.jpeg"],
          images_studio_slider["slide_2.jpeg"],
          images_studio_slider["slide_3.jpeg"],
          images_studio_slider["slide_4.jpeg"],
          images_studio_slider["slide_5.jpeg"],
          images_studio_slider["slide_6.jpeg"],
          images_studio_slider["slide_7.jpeg"],
          images_studio_slider["slide_8.jpeg"],
          images_studio_slider["slide_1.webp"],
          images_studio_slider["slide_2.webp"],
          images_studio_slider["slide_3.webp"],
          images_studio_slider["slide_4.webp"],
          images_studio_slider["slide_5.webp"],
          images_studio_slider["slide_6.webp"],
          images_studio_slider["slide_7.webp"],
          images_studio_slider["slide_8.webp"],
        ]}
        gallery_title={"Setting"}
        gallery_text={
          "With its' size and being located near the tall garage doors - film, music and green screen productions is the perfect fit for Studio 2."
        }
        gallery_image={[
          images_studio_gallery["gallery_1.jpg"],
          images_studio_gallery["gallery_2.jpg"],
          images_studio_gallery["gallery_3.jpg"],
          images_studio_gallery["gallery_4.jpeg"],
          images_studio_gallery["gallery_5.jpeg"],
          images_studio_gallery["gallery_6.jpeg"],
          images_studio_gallery["gallery_7.jpeg"],
          images_studio_gallery["gallery_8.jpeg"],
          images_studio_gallery["gallery_9.jpeg"],
          images_studio_gallery["gallery_1.webp"],
          images_studio_gallery["gallery_2.webp"],
          images_studio_gallery["gallery_3.webp"],
          images_studio_gallery["gallery_4.webp"],
          images_studio_gallery["gallery_5.webp"],
          images_studio_gallery["gallery_6.webp"],
          images_studio_gallery["gallery_7.webp"],
          images_studio_gallery["gallery_8.webp"],
          images_studio_gallery["gallery_9.webp"],
        ]}
        floorplan_title={"FLOORPLAN"}
        floorplan_image={[
          studio_floorplan["floorplan.jpg"],
          studio_floorplan["floorplan.webp"],
        ]}
        floorplan_text={
          "THE ONE WITH THE FLOOR AND BOXING OPPORTUNITY (GREAT FOR GREEN SCREEN AND VIDEO PRODUCTION). FLOOR AREA: 250M² CEILING HEIGHT: 7M ELECTRICAL SUPPLY: 1X16A 1X32A 1X63A"
        }
        contact_title={"SOUNDS LIKE A MATCH?"}
        contact_text={"Send us a hello or book the studio!"}
        contact_cta_url={"/contact"}
        contact_cta_title={"Book studio 2"}
      />
    </>
  );
};
