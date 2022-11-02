import React from "react";
import { StudioSingle } from "../components/StudioSingle";
// import { endpoints } from '../endpoints/endpoints'
import slide_1 from "../assets/img/studio_2_slider/IMG_5198_Lowres-1024x683.webp";
import slide_2 from "../assets/img/studio_2_slider/IMG_5199_Lowres-1024x683.webp";
import slide_3 from "../assets/img/studio_2_slider/IMG_5200_Lowres-1024x683.webp";
import slide_4 from "../assets/img/studio_2_slider/IMG_5320_Lowres-1024x683.jpeg";
import slide_5 from "../assets/img/studio_2_slider/IMG_5322_Lowres-1024x683.jpeg";
import slide_6 from "../assets/img/studio_2_slider/IMG_5333_Lowres-1024x683.jpeg";
import slide_7 from "../assets/img/studio_2_slider/IMG_5337_Lowres-1024x683.jpeg";
import slide_8 from "../assets/img/studio_2_slider/IMG_5338_Lowres-1024x683.jpeg";
import gallery_image_1 from "../assets/img/studio_2_gallery/IMG_5177_Lowres-1024x683.webp";
import gallery_image_2 from "../assets/img/studio_2_gallery/IMG_5183_Lowres-1024x683.webp";
import gallery_image_3 from "../assets/img/studio_2_gallery/IMG_5198_Lowres-1024x683.webp";
import gallery_image_4 from "../assets/img/studio_2_gallery/IMG_5207_Lowres-1024x683.jpeg";
import gallery_image_5 from "../assets/img/studio_2_gallery/IMG_5212_Lowres-683x1024.jpeg";
import gallery_image_6 from "../assets/img/studio_2_gallery/IMG_5252_Lowres-1024x683.jpeg";
import gallery_image_7 from "../assets/img/studio_2_gallery/IMG_5331_Lowres-1024x683.jpeg";
import gallery_image_8 from "../assets/img/studio_2_gallery/IMG_5336_Lowres-1024x683.jpeg";
import gallery_image_9 from "../assets/img/studio_2_gallery/IMG_5337_Lowres-1024x683.jpeg";
import floorplan_image from "../assets/img/floorplan/Spring_studio_planritning(ENG).jpg";

// const url = endpoints[8].url

export const Studio2 = ({ transition }) => {
  return (
    <>
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
          "With its' size and being located near the tall garage doors - film, music and green screen productions is the perfect fit for Studio 2."
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
          "THE ONE WITH THE FLOOR AND BOXING OPPORTUNITY (GREAT FOR GREEN SCREEN AND VIDEO PRODUCTION). FLOOR AREA: 250M² CEILING HEIGHT: 7M ELECTRICAL SUPPLY: 1X16A 1X32A 1X63A"
        }
        contact_title={"SOUNDS LIKE A MATCH?"}
        contact_text={"Send us a hello or book the studio!"}
        contact_cta_url={"/booking"}
        contact_cta_title={"Book studio 2"}
      />
    </>
  );
};
