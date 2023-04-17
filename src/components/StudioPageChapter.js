import React from "react";
import { AngleDown } from "./AngleDown";
import ReactFullpage from "@fullpage/react-fullpage";
import { StudioPageContent } from "./StudioPageContent";

function importAll(importedItem) {
  let images = {};
  importedItem.keys().forEach((item, index) => {
    images[item.replace("./", "")] = importedItem(item);
  });
  return images;
}

const images_chapter_1 = importAll(
  require.context(
    "../assets/img/studio_page/chapter_1/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);
const images_chapter_2 = importAll(
  require.context(
    "../assets/img/studio_page/chapter_2/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);
const images_chapter_3 = importAll(
  require.context(
    "../assets/img/studio_page/chapter_3/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

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
                  title={"studio 3"}
                  content={"THE TINIER ONE WITH A HUGE CYCLORAMA WALL."}
                  content2={"FLOOR AREA: 110M²"}
                  content3={"CEILING HEIGHT: 7M"}
                  content4={"ELECTRICAL SUPPLY: 1X16A, 1X32A, 1X63A"}
                  btn={"To studio 3"}
                  btnUrl={"/studio/3"}
                />
                <AngleDown fullpage_api={fullpageApi} />
              </section>
              <section
                className={"main-section fullpage studio-page-section section"}
              >
                <StudioPageContent
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
                  title={"studio 2"}
                  content={"THE ONE WITH THE FLOOR AND BOXING OPPORTUNITY."}
                  content2={"FLOOR AREA: 250M²"}
                  content3={"CEILING HEIGHT: 7M"}
                  content4={"ELECTRICAL SUPPLY: 1X16A, 1X32A, 1X63A"}
                  btn={"To studio 2"}
                  btnUrl={"/studio/2"}
                />
                <AngleDown fullpage_api={fullpageApi} />
              </section>
              <section
                className={"main-section fullpage studio-page-section section"}
              >
                <StudioPageContent
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
                  title={"studio 1"}
                  content={"THE ONE WITH THE WINDOWS AND DAYLIGHT."}
                  content2={"FLOOR AREA: 250M²"}
                  content3={"CEILING HEIGHT: 7M"}
                  content4={"ELECTRICAL SUPPLY: 1X16A, 1X32A, 1X63A"}
                  content5={"LARGE WINDOWS TO THE WEST"}
                  btn={"To studio 1"}
                  btnUrl={"/studio/1"}
                />
                <AngleDown fullpage_api={fullpageApi} reverse={true} />
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  };
