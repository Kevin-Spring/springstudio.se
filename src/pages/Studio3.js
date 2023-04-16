import React from "react";
import { StudioSingle } from "../components/StudioSingle";
import { Helmet } from "react-helmet";
import gallery_image_1 from "../assets/img/studio_3_gallery/IMG_5239_Lowres-1024x683.jpeg";
import gallery_image_2 from "../assets/img/studio_3_gallery/IMG_5241_Lowres-683x1024.jpeg";
import gallery_image_3 from "../assets/img/studio_3_gallery/IMG_5246_Lowres-e1635175892343-1024x624.webp";
import gallery_image_4 from "../assets/img/studio_3_gallery/IMG_5267_Lowres-1024x683.jpeg";
import gallery_image_5 from "../assets/img/studio_3_gallery/IMG_5270_Lowres-1024x683.jpeg";
import gallery_image_6 from "../assets/img/studio_3_gallery/IMG_5279_Lowres-1024x683.jpeg";
import gallery_image_7 from "../assets/img/studio_3_gallery/IMG_5286_Lowres-683x1024.webp";
import gallery_image_8 from "../assets/img/studio_3_gallery/IMG_5260_Lowres-683x1024.jpeg";
import gallery_image_9 from "../assets/img/studio_3_gallery/IMG_5289_Lowres-e1635171406362-1024x857.jpeg";
import floorplan_image from "../assets/img/floorplan/Spring_studio_planritning(ENG).jpg";
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
    "../assets/img/studio_3_slider/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

// const url = endpoints[9].url

export const Studio3 = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>Spring Studio | Studio 3</title>
        <meta
          name="description"
          content="Studio 3 is accompanied by a large cyclorama wall, making it the largest studio through the lens of a camera."
        />
        <meta property="og:title" content="Spring Studio | Studio 3" />
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
          "Accompanied by the cyclorama wall studio 3 puts no limits on your production."
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
