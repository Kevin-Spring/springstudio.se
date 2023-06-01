import React from "react";
import { StudioSingle } from "../components/StudioSingle";
import { Helmet } from "react-helmet";
// import { endpoints } from '../endpoints/endpoints'

// const url = endpoints[7].url

function importAll(importedItem) {
  let images = {};
  importedItem.keys().forEach((item, index) => {
    images[item.replace("./", "")] = importedItem(item);
  });
  return images;
}

const images_studio_slider = importAll(
  require.context(
    "../assets/img/studio_1_slider/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const images_studio_gallery = importAll(
  require.context(
    "../assets/img/studio_1_gallery/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const studio_floorplan = importAll(
  require.context("../assets/img/floorplan/", false, /\.(png|jpe?g|svg|webp)$/)
);

export const Studio1 = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>
          Studios prepped for all creative needs in Stockholm - Studio 1
        </title>
        <meta
          name="description"
          content="With a floor size of 250 square meters and it's large fullwidth windows located to the southwest, Studio 1 offers a great daylight solution."
        />
        <meta
          property="og:title"
          content="Studios prepped for all creative needs in Stockholm - Studio 1"
        />
        <meta
          property="og:description"
          content="With a floor size of 250 square meters and it's large fullwidth windows located to the southwest, Studio 1 offers a great daylight solution."
        />
        <link rel="canonical" href="https://springstudio.se/studios/studio-1" />
      </Helmet>
      <StudioSingle
        /* content={url}  */ transition={transition}
        title={"STUDIO"}
        preamble={
          "With it's large fullwidth windows located to the southwest, Studio 1 offers a great daylight solution. If daylight is not your thing the windows has large curtains which blocks sunlight and thanks to the floor size of 250 square meters a set can be created further in the studio, away from the windows."
        }
        studio_number={"1"}
        slide_title={"VERSITILITY"}
        slide_text={
          "Thanks to the large windows accompanied by the large curtains Studio 1 is a very versatile studio, allowing any kind of production to take place within. Just outside the studio lies two cozy lounge areas to setup catering, screens or just to have a moment off set."
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
          "Surrounded by comfy lounges and daylight windows - production in Studio 1 feels like a breeze."
        }
        gallery_image={[
          images_studio_gallery["gallery_1.jpg"],
          images_studio_gallery["gallery_2.jpg"],
          images_studio_gallery["gallery_3.jpg"],
          images_studio_gallery["gallery_4.jpeg"],
          images_studio_gallery["gallery_5.jpeg"],
          images_studio_gallery["gallery_6.jpg"],
          images_studio_gallery["gallery_7.jpg"],
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
          "THE ONE WITH THE WINDOWS AND DAYLIGHT. FLOOR AREA: 250M² CEILING HEIGHT: 7M ELECTRICAL SUPPLY: 1X16A 1X32A 1X63A LARGE WINDOWS TO THE WEST."
        }
        contact_title={"LOOKS COOL?"}
        contact_text={"Reach out or book the studio!"}
        contact_cta_url={"/contact"}
        contact_cta_title={"Book studio 1"}
      />
    </>
  );
};
