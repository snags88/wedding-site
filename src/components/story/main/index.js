import React from 'react';
import IosHeart from 'react-ionicons/lib/IosHeart'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { PRIMARY_COLOR_HEX } from 'consts';

import { STORY_CONTENT } from '../content';

const StoryMain = ({ data }) => {
  const timeline1Img = getImage(data.timeline1);
  const timeline2Img = getImage(data.timeline2);
  const timeline3Img = getImage(data.timeline3);

  return (
    <section className="story" id="story">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="story-timeline d-md-flex">

              <div className="story-timeline__col story-timeline__col--left">
                <div className="story-timeline__text">
                  <h4>
                    <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--sm icon--primary u-bg-white d-none d-md-block"/>
                    {STORY_CONTENT.part1.title}
                  </h4>
                  <p>{STORY_CONTENT.part1.body}</p>
                </div>

                <GatsbyImage image={timeline2Img} alt={STORY_CONTENT.part2.title} className="d-none d-md-block"/>
                <GatsbyImage image={timeline1Img} alt={STORY_CONTENT.part1.title} className="d-md-none"/>
                {/*Only visible on mobile device*/}
                <div className="story-timeline__text d-md-none">
                  <h4>{STORY_CONTENT.part2.title}</h4>
                  <p>{STORY_CONTENT.part2.body}</p>
                </div>
                {/*Only visible on desktop device*/}
                <div className="story-timeline__text d-none d-md-block">
                  <h4>
                    <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--sm icon--primary u-bg-white d-none d-md-block"/>
                    {STORY_CONTENT.part3.title}
                  </h4>
                  <p>{STORY_CONTENT.part3.body}</p>
                </div>
              </div>

              <div className="story-timeline__col story-timeline__col--right">
                <GatsbyImage image={timeline1Img} alt={STORY_CONTENT.part1.title} className="d-none d-md-block" />
                <GatsbyImage image={timeline2Img} alt={STORY_CONTENT.part2.title} className="d-md-none"/>
                {/*Only visible on desktop devices*/}
                <div className="story-timeline__text d-none d-md-block">
                  <h4>
                    {STORY_CONTENT.part2.title}
                    <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--sm icon--primary u-bg-white d-none d-md-block"/>
                  </h4>
                  <p>{STORY_CONTENT.part2.body}</p>
                </div>
                {/*Only visible on mobile device*/}
                <div className="story-timeline__text d-md-none">
                  <h4>{STORY_CONTENT.part3.title}</h4>
                  <p>{STORY_CONTENT.part3.body}</p>
                </div>
                <GatsbyImage image={timeline3Img} alt={STORY_CONTENT.part3.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryMain;
