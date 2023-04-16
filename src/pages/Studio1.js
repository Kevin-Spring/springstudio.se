import React from "react";
import { StudioSingle } from "../components/StudioSingle";
import { Helmet } from "react-helmet";
// import { endpoints } from '../endpoints/endpoints'
import gallery_image_1 from "../assets/img/studio_1_gallery/IMG_5055_Lowres-1024x683.webp";
import gallery_image_2 from "../assets/img/studio_1_gallery/IMG_5086_Lowres-1024x683.webp";
import gallery_image_3 from "../assets/img/studio_1_gallery/IMG_5088_Lowres-1024x683.webp";
import gallery_image_4 from "../assets/img/studio_1_gallery/IMG_5097_Lowres-683x1024.jpeg";
import gallery_image_5 from "../assets/img/studio_1_gallery/IMG_5129_Lowres-683x1024.jpeg";
import gallery_image_6 from "../assets/img/studio_1_gallery/IMG_5140_Lowres-1024x683.webp";
import gallery_image_7 from "../assets/img/studio_1_gallery/IMG_5144_Lowres-1024x683.webp";
import gallery_image_8 from "../assets/img/studio_1_gallery/IMG_5269_Lowres-1024x683.jpeg";
import gallery_image_9 from "../assets/img/studio_1_gallery/IMG_5308_Lowres-1024x683.jpeg";
import floorplan_image from "../assets/img/floorplan/Spring_studio_planritning(ENG).jpg";

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

export const Studio1 = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>Spring Studio | Studio 1</title>
        <meta
          name="description"
          content="With a floor size of 250 square meters and it's large fullwidth windows located to the southwest, Studio 1 offers a great daylight solution."
        />
        <meta property="og:title" content="Spring Studio | Studio 1" />
        <meta
          property="og:description"
          content="With a floor size of 250 square meters and it's large fullwidth windows located to the southwest, Studio 1 offers a great daylight solution."
        />
        <link rel="canonical" href="https://springstudio.se/studio/1" />
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
        slideItems={[
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
        gallery_image_1={gallery_image_1}
        gallery_image_2={gallery_image_2}
        gallery_image_3={gallery_image_3}
        gallery_image_4={gallery_image_4}
        gallery_image_5={gallery_image_5}
        gallery_image_6={gallery_image_6}
        gallery_image_7={gallery_image_7}
        gallery_image_8={gallery_image_8}
        gallery_image_9={gallery_image_9}
        floorplan_title={"FLOORPLAN"}
        floorplan_image={floorplan_image}
        floorplan_text={
          "THE ONE WITH THE WINDOWS AND DAYLIGHT. FLOOR AREA: 250M² CEILING HEIGHT: 7M ELECTRICAL SUPPLY: 1X16A 1X32A 1X63A LARGE WINDOWS TO THE WEST."
        }
        contact_title={"LOOKS COOL?"}
        contact_text={"Reach out or book the studio!"}
        contact_cta_url={"/booking"}
        contact_cta_title={"Book studio 1"}
      />
    </>
  );
};
