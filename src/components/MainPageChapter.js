import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { AngleDown } from "./AngleDown";
import { MainPageContent } from "./MainPageContent";

function importAll(importedItem) {
  let images = {};
  importedItem.keys().forEach((item, index) => {
    images[item.replace("./", "")] = importedItem(item);
  });
  return images;
}

const images_chapter_1 = importAll(
  require.context(
    "../assets/img/main_page/chapter_1/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);
const images_chapter_2 = importAll(
  require.context(
    "../assets/img/main_page/chapter_2/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);
const images_chapter_3 = importAll(
  require.context(
    "../assets/img/main_page/chapter_3/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);
const images_chapter_4 = importAll(
  require.context(
    "../assets/img/main_page/chapter_4/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);
const images_chapter_5 = importAll(
  require.context(
    "../assets/img/main_page/chapter_5/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

export const MainPageChapter = (
  {
    /* posts, loading */
  }
) => (
  <ReactFullpage
    //fullpage options
    licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE_KEY}
    scrollingSpeed={800} /* Options here */
    navigation={true}
    navigationPosition={"right"}
    keyboardScrolling={true}
    sectionSelector=".fullpage"
    navigationTooltips={["Spring", "About", "Studios", "Lounge", "Contact"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* {posts.map((post, i) => {
              const { id, title, content, acf } = post
              return (
                <section id={`${post.id}`} className={`panel fullpage main-section main-page-section section section${i + 1}`} key={id}>
                  <MainPageContent id={id} title={title} content={content} acf={acf} index={i} />
                  <AngleDown />
                </section>
              )
            })} */}

          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"Spring Studio"}
              titleH1={true}
              background={[
                images_chapter_1["chapter_1,w_730.jpg"],
                images_chapter_1["chapter_1,w_730.webp"],
                images_chapter_1["chapter_1,w_1281.jpg"],
                images_chapter_1["chapter_1,w_1275.webp"],
                images_chapter_1["chapter_1,w_1692.jpg"],
                images_chapter_1["chapter_1,w_1839.webp"],
                images_chapter_1["chapter_1,w_2048.jpg"],
                images_chapter_1["chapter_1,w_2048.webp"],
              ]}
              cta={"Contact"}
              ctaLink={"/booking"}
            />
            <AngleDown fullpage_api={fullpageApi} />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"about"}
              content={
                "Spring Studio provides rental studios for commercials, television, music rehearsals, film and photography productions. We are conveniently located just 15 minutes from Stockholm city, in Sätra."
              }
              background={[
                images_chapter_2["chapter_2,w_730.jpg"],
                images_chapter_2["chapter_2,w_730.webp"],
                images_chapter_2["chapter_2,w_1281.jpg"],
                images_chapter_2["chapter_2,w_1275.webp"],
                images_chapter_2["chapter_2,w_1692.jpg"],
                images_chapter_2["chapter_2,w_1839.webp"],
                images_chapter_2["chapter_2,w_2048.jpg"],
                images_chapter_2["chapter_2,w_2048.webp"],
              ]}
              cta={"Say hi"}
              ctaLink={"/booking"}
            />
            <AngleDown fullpage_api={fullpageApi} />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"studios"}
              content={
                "With 3 excellent studios in different sizes up to 250 sq. meters, each with its unique features, we are sure you will find something that suits your needs and budget."
              }
              background={[
                images_chapter_3["chapter_3,w_730.jpg"],
                images_chapter_3["chapter_3,w_730.webp"],
                images_chapter_3["chapter_3,w_1281.jpg"],
                images_chapter_3["chapter_3,w_1275.webp"],
                images_chapter_3["chapter_3,w_1692.jpg"],
                images_chapter_3["chapter_3,w_1839.webp"],
                images_chapter_3["chapter_3,w_2048.jpg"],
                images_chapter_3["chapter_3,w_2048.webp"],
              ]}
              cta={"Have a Look"}
              ctaLink={"/studios"}
            />
            <AngleDown fullpage_api={fullpageApi} />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"Lounge"}
              content={
                "With a fully equipped kitchen and seating for at least 30 people it's easy to setup catering and have a nice relaxing time outside the studio."
              }
              background={[
                images_chapter_4["chapter_4,w_730.jpg"],
                images_chapter_4["chapter_4,w_730.webp"],
                images_chapter_4["chapter_4,w_1281.jpg"],
                images_chapter_4["chapter_4,w_1275.webp"],
                images_chapter_4["chapter_4,w_1692.jpg"],
                images_chapter_4["chapter_4,w_1839.webp"],
                images_chapter_4["chapter_4,w_2048.jpg"],
                images_chapter_4["chapter_4,w_2048.webp"],
              ]}
              cta={"To the lounge"}
              ctaLink={"/lounge"}
            />
            <AngleDown fullpage_api={fullpageApi} />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"contact"}
              titleH1={false}
              content=""
              heading={"Bookings:"}
              heading_2={"Economy: "}
              heading_3={"Adress:"}
              email_1={"janne@springstudio.se"}
              phone={"+4670 746 72 33"}
              email_2={"caroline@springstudio.se"}
              address={"Stensätravägen 9 127 39 Stockholm Sweden"}
              background={[
                images_chapter_5["chapter_5,w_730.jpg"],
                images_chapter_5["chapter_5,w_730.webp"],
                images_chapter_5["chapter_5,w_1281.jpg"],
                images_chapter_5["chapter_5,w_1275.webp"],
                images_chapter_5["chapter_5,w_1692.jpg"],
                images_chapter_5["chapter_5,w_1839.webp"],
                images_chapter_5["chapter_5,w_2048.jpg"],
                images_chapter_5["chapter_5,w_2048.webp"],
              ]}
              cta={"Contact"}
              ctaLink={"/booking"}
              facebook={"https://sv-se.facebook.com/SpringStudioSwe/"}
              instagram={"https://www.instagram.com/springstudiostockholm_/"}
              mapsLong={17.9286279}
              mapsLat={59.2846681}
            />
            <AngleDown fullpage_api={fullpageApi} reverse={true} />
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
