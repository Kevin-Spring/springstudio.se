import React from "react";
import { StudioSingle } from "../components/StudioSingle";
import { Helmet } from "react-helmet";
// import { endpoints } from '../endpoints/endpoints'
import slide_1 from "../assets/img/lounge_slider/IMG_5082_Lowres-1024x683.jpeg";
import slide_2 from "../assets/img/lounge_slider/Studio_BO3_0948-HDRLowres-1024x683.jpeg";
import slide_3 from "../assets/img/lounge_slider/Studio_BO3_1133-HDRLowres-1024x683.jpeg";
import slide_4 from "../assets/img/lounge_slider/Studio_BO3_1195-HDRLowres-1024x683.jpeg";
import slide_5 from "../assets/img/lounge_slider/Studio_BO3_1203-HDRLowres-1024x683.jpeg";
import slide_6 from "../assets/img/lounge_slider/Studio_BO3_1238-HDRLowres-1024x683.jpeg";
import slide_7 from "../assets/img/lounge_slider/Studio_BO3_1307-HDRLowres-1024x683.jpeg";
import slide_8 from "../assets/img/lounge_slider/Studio_BO3_1334-HDRLowres-1024x683.jpeg";
import floorplan_image from "../assets/img/lounge_slider/Studio_BO4_9981-HDRlowres-1024x683.webp";

// const url = endpoints[10].url

export const KitchenLoungePage = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>Spring Studio | Lounge</title>
        <meta
          name="description"
          content="Set up catering in our kitchen or take some time off set and enjoy our lounge with stuffed with games, fresh drinks or hot drinks!"
        />
        <meta property="og:title" content="Spring Studio | Lounge" />
        <meta
          property="og:description"
          content="Set up catering in our kitchen or take some time off set and enjoy our lounge with stuffed with games, fresh drinks or hot drinks!"
        />
        <link rel="canonical" href="https://springstudio.se/lounge" />
      </Helmet>
      <StudioSingle
        /* content={url} */ transition={transition}
        title={"LOUNGE"}
        preamble={
          "With a fully equipped kitchen and seating for at least 30 people it's easy to setup catering and have a nice relaxing time outside the studio. Scattered around the building different types om lounge areas can be found, allowing hard working souls to have a cup of coffee in peace or have a meeting outside the creative whirl."
        }
        studio_number={""}
        slide_title={"THE STUDIO OASIS"}
        slide_text={
          "Take some time off set and treat yourself with a nice cup of coffee or liven up the mood and challenge a colleague to a game of foosball or dart found around the building."
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
        floorplan_title={"THE OVERLOOK"}
        floorplan_image={floorplan_image}
        floorplan_text={
          "The kitchen offers a view of both Studio 2 and 3 and allows easy communication between the set and the lounge."
        }
        contact_title={"ANY QUESTIONS?"}
        contact_text={
          "Let us know if you're curious about setting up catering in the kitchen or anything else, we're here to help!"
        }
        contact_cta_url={"/booking"}
        contact_cta_title={"Get in touch"}
      />
    </>
  );
};
