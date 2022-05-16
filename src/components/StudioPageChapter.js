import React from 'react';
import { AngleDown } from './AngleDown';
import ReactFullpage from '@fullpage/react-fullpage';
import { StudioPageContent } from './StudioPageContent';


export const StudioPageChapter = ({posts, loading}) => {

  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {process.env.REACT_APP_FULLPAGE_LICENSE_KEY}
    scrollingSpeed = {800} /* Options here */
    navigation = {true}
	  navigationPosition =  {'right'}
    keyboardScrolling = {true}
    sectionSelector= '.fullpage'
    navigationTooltips = {['Studio 1', 'Studio 2', 'Studio 3' ]}


    render={({ state, fullpageApi }) => {
      return (   
        <ReactFullpage.Wrapper>
            {posts.map((post, i) => {
              const { id, title, content, acf } = post
              return (
                <section id={`${post.id}`} className={`main-section fullpage studio-page-section section${i + 1} studio${i + 1}`} key={id}>
                  <StudioPageContent id={id} title={title} content={content} acf={acf} index={i} />
                  <AngleDown />
                </section>
              )
            })}
        </ReactFullpage.Wrapper>)
    }}
  />
  )
}
