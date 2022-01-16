import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { AngleDown } from './AngleDown';
import { MainPageContent } from './MainPageContent';


export const Slide = ({posts, loading}) => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {800} /* Options here */
    navigation = {true}
	  navigationPosition =  {'right'}
    keyboardScrolling = {true}
    sectionSelector= '.test'


    render={({ state, fullpageApi }) => {
      return (   
        <ReactFullpage.Wrapper>
            {posts.map((post, i) => {
              const { id, title, content, acf } = post
              return (
                <section id={`${post.id}`} className={`panel test main-section main-page-section section section${i + 1}`} key={id}>
                  <MainPageContent id={id} title={title} content={content} acf={acf} index={i} />
                  <AngleDown />
                </section>
              )
            })}
        </ReactFullpage.Wrapper>)
    }}
  />
);