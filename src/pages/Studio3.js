import React from "react";
import { StudioSingle } from "../components/StudioSingle";
import slide_1 from "../assets/img/studio_3_slider/IMG_5252_Lowres-1024x683.jpeg";
import slide_2 from "../assets/img/studio_3_slider/IMG_5262_Lowres-1024x683.jpeg";
import slide_3 from "../assets/img/studio_3_slider/IMG_5267_Lowres-1024x683.jpeg";
import slide_4 from "../assets/img/studio_3_slider/IMG_5279_Lowres-1024x683.jpeg";
import slide_5 from "../assets/img/studio_3_slider/Studio3_BO4_4573-HDRLowres-1024x683.jpeg";
import slide_6 from "../assets/img/studio_3_slider/Studio3_BO4_4741-HDR-kopieraLowres-1024x683.jpeg";
import slide_7 from "../assets/img/studio_3_slider/Studio3_BO4_4796-HDRLowres-1024x683.jpeg";
import slide_8 from "../assets/img/studio_3_slider/Studio3_BO4_4831-HDR-kopieraLowres-1024x683.jpeg";
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

// const url = endpoints[9].url

export const Studio3 = ({ transition }) => {
  return (
    <>
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
