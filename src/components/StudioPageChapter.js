import React from "react";
import { AngleDown } from "./AngleDown";
import ReactFullpage from "@fullpage/react-fullpage";
import { StudioPageContent } from "./StudioPageContent";
import Background_1 from "../assets/img/IMG_5140_Lowres.webp";
import Background_2 from "../assets/img/IMG_5198_Lowres.webp";
import Background_3 from "../assets/img/IMG_5286_Lowres.webp";

export const StudioPageChapter = () =>
  /*{
     posts, loading 
  }*/
  {
    return (
      <ReactFullpage
        //fullpage options
        licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE_KEY}
        scrollingSpeed={800} /* Options here */
        navigation={true}
        navigationPosition={"right"}
        keyboardScrolling={true}
        sectionSelector=".fullpage"
        navigationTooltips={["Studio 1", "Studio 2", "Studio 3"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* {posts.map((post, i) => {
              const { id, title, content, acf } = post;
              return (
                <section
                  id={`${post.id}`}
                  className={`main-section fullpage studio-page-section section${
                    i + 1
                  } studio${i + 1}`}
                  key={id}
                >
                  <StudioPageContent
                    id={id}
                    title={title}
                    content={content}
                    acf={acf}
                    index={i}
                  />
                  <AngleDown />
                </section>
              );
            })} */}

              <section
                className={"main-section fullpage studio-page-section section"}
              >
                <StudioPageContent
                  background={Background_3}
                  title={"studio 3"}
                  content={"THE TINIER ONE WITH A HUGE CYCLORAMA WALL."}
                  content2={"FLOOR AREA: 110M²"}
                  content3={"CEILING HEIGHT: 7M"}
                  content4={"ELECTRICAL SUPPLY: 1X16A, 1X32A, 1X63A"}
                  btn={"See more"}
                  btnUrl={"/studio/3"}
                />
                <AngleDown />
              </section>
              <section
                className={"main-section fullpage studio-page-section section"}
              >
                <StudioPageContent
                  background={Background_2}
                  title={"studio 2"}
                  content={"THE ONE WITH THE FLOOR AND BOXING OPPORTUNITY."}
                  content2={"FLOOR AREA: 250M²"}
                  content3={"CEILING HEIGHT: 7M"}
                  content4={"ELECTRICAL SUPPLY: 1X16A, 1X32A, 1X63A"}
                  btn={"See more"}
                  btnUrl={"/studio/2"}
                />
                <AngleDown />
              </section>
              <section
                className={"main-section fullpage studio-page-section section"}
              >
                <StudioPageContent
                  background={Background_1}
                  title={"studio 1"}
                  content={"THE ONE WITH THE WINDOWS AND DAYLIGHT."}
                  content2={"FLOOR AREA: 250M²"}
                  content3={"CEILING HEIGHT: 7M"}
                  content4={"ELECTRICAL SUPPLY: 1X16A, 1X32A, 1X63A"}
                  content5={"LARGE WINDOWS TO THE WEST"}
                  btn={"See more"}
                  btnUrl={"/studio/1"}
                />
                <AngleDown />
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  };
