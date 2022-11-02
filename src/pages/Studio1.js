import React from "react";
import { StudioSingle } from "../components/StudioSingle";
// import { endpoints } from '../endpoints/endpoints'
import slide_1 from "../assets/img/studio_1_slider/IMG_5047_Lowres-1024x683.jpeg";
import slide_2 from "../assets/img/studio_1_slider/IMG_5066_Lowres-1024x683.jpeg";
import slide_3 from "../assets/img/studio_1_slider/IMG_5100_Lowres-1024x683.jpeg";
import slide_4 from "../assets/img/studio_1_slider/IMG_5106_Lowres-1024x683.jpeg";
import slide_5 from "../assets/img/studio_1_slider/IMG_5144_Lowres-1024x683.jpeg";
import slide_6 from "../assets/img/studio_1_slider/IMG_5168_Lowres-1024x683.jpeg";
import slide_7 from "../assets/img/studio_1_slider/IMG_5169_Lowres-1024x683.jpeg";
import slide_8 from "../assets/img/studio_1_slider/IMG_5177_Lowres-1024x683.jpeg";
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

export const Studio1 = ({ transition }) => {
  return (
    <>
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
        slide_1={slide_1}
        slide_2={slide_2}
        slide_3={slide_3}
        slide_4={slide_4}
        slide_5={slide_5}
        slide_6={slide_6}
        slide_7={slide_7}
        slide_8={slide_8}
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
