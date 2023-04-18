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

const lounge_slider = importAll(
  require.context(
    "../assets/img/lounge_slider/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

// const url = endpoints[10].url

export const KitchenLoungePage = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>
          Studios prepped for all creative needs in Stockholm - Lounge
        </title>
        <meta
          name="description"
          content="Set up catering in our kitchen or take some time off set and enjoy our lounge with stuffed with games, fresh drinks or hot drinks!"
        />
        <meta
          property="og:title"
          content="Studios prepped for all creative needs in Stockholm - Lounge"
        />
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
        slide_items={[
          lounge_slider["slide_1.jpeg"],
          lounge_slider["slide_2.jpeg"],
          lounge_slider["slide_3.jpeg"],
          lounge_slider["slide_4.jpeg"],
          lounge_slider["slide_5.jpeg"],
          lounge_slider["slide_6.jpeg"],
          lounge_slider["slide_7.jpeg"],
          lounge_slider["slide_8.jpeg"],
          lounge_slider["slide_1.webp"],
          lounge_slider["slide_2.webp"],
          lounge_slider["slide_3.webp"],
          lounge_slider["slide_4.webp"],
          lounge_slider["slide_5.webp"],
          lounge_slider["slide_6.webp"],
          lounge_slider["slide_7.webp"],
          lounge_slider["slide_8.webp"],
        ]}
        floorplan_title={"THE OVERLOOK"}
        floorplan_image={[
          lounge_slider["slide_9.jpg"],
          lounge_slider["slide_9.webp"],
        ]}
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
