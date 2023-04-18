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

const images_studio_gallery = importAll(
  require.context(
    "../assets/img/studio_3_gallery/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const images_studio_slider = importAll(
  require.context(
    "../assets/img/studio_3_slider/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const studio_floorplan = importAll(
  require.context("../assets/img/floorplan/", false, /\.(png|jpe?g|svg|webp)$/)
);

// const url = endpoints[9].url

export const Studio3 = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>
          Studios prepped for all creative needs in Stockholm - Studio 3
        </title>
        <meta
          name="description"
          content="Studio 3 is accompanied by a large cyclorama wall, making it the largest studio through the lens of a camera."
        />
        <meta
          property="og:title"
          content="Studios prepped for all creative needs in Stockholm - Studio 3"
        />
        <meta
          property="og:description"
          content="Studio 3 is accompanied by a large cyclorama wall, making it the largest studio through the lens of a camera."
        />
        <link rel="canonical" href="https://springstudio.se/studio/3" />
      </Helmet>
      <StudioSingle
        /* content={url} */ transition={transition}
        title={"STUDIO"}
        preamble={
          "Studio 3 is the tinier option accompanied by a large cyclorama wall, making it the largest studio through the lens of a camera. It's a comfy fit for smaller productions or still life photo."
        }
        studio_number={"3"}
        slide_title={"DETAIL"}
        slide_text={
          "Thanks to the cyclorama wall Studio 3 is encouraging work that focuses on detail and photography."
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
          "Accompanied by the cyclorama wall studio 3 puts no limits on your production."
        }
        gallery_image={[
          images_studio_gallery["gallery_1.jpeg"],
          images_studio_gallery["gallery_2.jpeg"],
          images_studio_gallery["gallery_3.jpg"],
          images_studio_gallery["gallery_4.jpeg"],
          images_studio_gallery["gallery_5.jpeg"],
          images_studio_gallery["gallery_6.jpeg"],
          images_studio_gallery["gallery_7.jpeg"],
          images_studio_gallery["gallery_8.jpg"],
          images_studio_gallery["gallery_9.jpg"],
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
          "THE TINIER ONE WITH A HUGE CYCLORAMA WALL. FLOOR AREA: 110M² CEILING HEIGHT: 7M ELECTRICAL SUPPLY: 1X16A 1X32A 1X63A"
        }
        contact_title={"INTERESTED?"}
        contact_text={"Contact us or book studio right here!"}
        contact_cta_url={"/booking"}
        contact_cta_title={"Book studio 3"}
      />
    </>
  );
};
