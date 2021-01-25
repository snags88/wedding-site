import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import IosHeart from 'react-ionicons/lib/IosHeart'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { PRIMARY_COLOR_HEX } from 'consts';

const MemoriesMain = ({ data }) => {
  const memory1 = getImage(data.memory1);
  const memory2 = getImage(data.memory2);
  const memory3 = getImage(data.memory3);
  const memory4 = getImage(data.memory4);
  const memory5 = getImage(data.memory5);
  const memory6 = getImage(data.memory6);
  const memory7 = getImage(data.memory7);
  const memory9 = getImage(data.memory9);
  const memory10 = getImage(data.memory10);
  const memory11 = getImage(data.memory11);
  const memory13 = getImage(data.memory13);
  const memory14 = getImage(data.memory14);
  const memory15 = getImage(data.memory15);
  const memory16 = getImage(data.memory16);
  const memory17 = getImage(data.memory17);
  const memory18 = getImage(data.memory18);
  const memory19 = getImage(data.memory19);

  return (
    <section className="memories">
      <div className="container">
        <div class="row">
          <div className="col-sm-12">
            <div className="text-center u-m-t-n-3">
              <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--sm icon--primary animation-pulse"/>
              <IosHeart color={PRIMARY_COLOR_HEX} className="icon icon--md icon--primary animation-pulse"/>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ResponsiveMasonry columnsCountBreakPoints={{320: 1, 576: 2, 768: 3}}>
              <Masonry gutter="0">
                <GatsbyImage image={memory1} alt="memory1" className="memories__img"/>
                <GatsbyImage image={memory2} alt="memory2" className="memories__img"/>
                <GatsbyImage image={memory3} alt="memory3" className="memories__img"/>
                <GatsbyImage image={memory4} alt="memory4" className="memories__img"/>
                <GatsbyImage image={memory5} alt="memory5" className="memories__img"/>
                <GatsbyImage image={memory6} alt="memory6" className="memories__img"/>
                <GatsbyImage image={memory7} alt="memory7" className="memories__img"/>
                <GatsbyImage image={memory9} alt="memory9" className="memories__img"/>
                <GatsbyImage image={memory10} alt="memory10" className="memories__img"/>
                <GatsbyImage image={memory11} alt="memory11" className="memories__img"/>
                <GatsbyImage image={memory13} alt="memory13" className="memories__img"/>
                <GatsbyImage image={memory14} alt="memory14" className="memories__img"/>
                <GatsbyImage image={memory15} alt="memory15" className="memories__img"/>
                <GatsbyImage image={memory16} alt="memory16" className="memories__img"/>
                <GatsbyImage image={memory17} alt="memory17" className="memories__img"/>
                <GatsbyImage image={memory18} alt="memory18" className="memories__img"/>
                <GatsbyImage image={memory19} alt="memory19" className="memories__img"/>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesMain;

