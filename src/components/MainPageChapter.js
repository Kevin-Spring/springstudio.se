import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { AngleDown } from "./AngleDown";
import { MainPageContent } from "./MainPageContent";
import Background_1 from "../assets/img/IMG_5055_Lowres.webp";
import Background_2 from "../assets/img/IMG_5086_Lowres.webp";
import Background_3 from "../assets/img/IMG_5088_Lowres.webp";
import Background_4 from "../assets/img/IMG_5144_Lowres.webp";
import Background_5 from "../assets/img/IMG_5246_Lowres-e1635175892343.webp";

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
              background={Background_1}
              cta={"Contact"}
              ctaLink={"/booking"}
            />
            <AngleDown />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"about"}
              content={
                "Spring Studio provides rental studios for commercials, television, music rehearsals, film and photography productions. We are conveniently located just 15 minutes from Stockholm city, in Sätra."
              }
              background={Background_2}
              cta={"Say hi"}
              ctaLink={"/booking"}
            />
            <AngleDown />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"studios"}
              content={
                "With 3 excellent studios in different sizes up to 250 sq. meters, each with its' unique features, we are sure you will find something that suits your needs and budget."
              }
              background={Background_3}
              cta={"Have a Look"}
              ctaLink={"/studios"}
            />
            <AngleDown />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"Lounge"}
              content={
                "With a fully equipped kitchen and seating for at least 30 people it's easy to setup catering and have a nice relaxing time outside the studio."
              }
              background={Background_4}
              cta={"To the lounge"}
              ctaLink={"/lounge"}
            />
            <AngleDown />
          </section>
          <section
            className={"panel fullpage main-section main-page-section section"}
          >
            <MainPageContent
              title={"contact"}
              titleH1={false}
              heading={"Bookings:"}
              heading2={"Economy: "}
              heading3={"Adress:"}
              content={"janne@springstudio.se +46(0)70 746 72 33"}
              content2={"caroline@springstudio.se"}
              content3={"Stensätravägen 9 127 39 Stockholm Sweden"}
              background={Background_5}
              cta={"Contact"}
              ctaLink={"/booking"}
              facebook={"https://sv-se.facebook.com/SpringStudioSwe/"}
              instagram={"https://www.instagram.com/springstudiostockholm_/"}
              mapsLong={17.9286279}
              mapsLat={59.2846681}
            />
            <AngleDown />
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
