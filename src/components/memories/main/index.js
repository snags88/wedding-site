import React from 'react';
import IosHeart from 'react-ionicons/lib/IosHeart'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { PRIMARY_COLOR_HEX } from 'consts';

import MemoriesImg1 from 'images/memories/memory1.jpg';
import MemoriesImg2 from 'images/memories/memory2.jpg';
import MemoriesImg3 from 'images/memories/memory3.jpg';
import MemoriesImg4 from 'images/memories/memory4.jpg';
import MemoriesImg5 from 'images/memories/memory5.jpg';
import MemoriesImg6 from 'images/memories/memory6.jpg';
import MemoriesImg7 from 'images/memories/memory7.jpg';
import MemoriesImg9 from 'images/memories/memory9.jpg';
import MemoriesImg10 from 'images/memories/memory10.jpg';
import MemoriesImg11 from 'images/memories/memory11.jpg';
import MemoriesImg12 from 'images/memories/memory12.jpg';
import MemoriesImg13 from 'images/memories/memory13.jpg';
import MemoriesImg14 from 'images/memories/memory14.jpg';
import MemoriesImg15 from 'images/memories/memory15.jpg';
import MemoriesImg16 from 'images/memories/memory16.jpg';
import MemoriesImg17 from 'images/memories/memory17.jpg';
import MemoriesImg18 from 'images/memories/memory18.jpg';
import MemoriesImg19 from 'images/memories/memory19.jpg';

const MemoriesMain = () => {
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
                <img src={MemoriesImg1} alt="memory1" className="memories__img"/>
                <img src={MemoriesImg2} alt="memory2" className="memories__img"/>
                <img src={MemoriesImg3} alt="memory3" className="memories__img"/>
                <img src={MemoriesImg4} alt="memory4" className="memories__img"/>
                <img src={MemoriesImg5} alt="memory5" className="memories__img"/>
                <img src={MemoriesImg6} alt="memory6" className="memories__img"/>
                <img src={MemoriesImg7} alt="memory7" className="memories__img"/>
                <img src={MemoriesImg9} alt="memory9" className="memories__img"/>
                <img src={MemoriesImg10} alt="memory10" className="memories__img"/>
                <img src={MemoriesImg11} alt="memory11" className="memories__img"/>
                <img src={MemoriesImg12} alt="memory12" className="memories__img"/>
                <img src={MemoriesImg13} alt="memory13" className="memories__img"/>
                <img src={MemoriesImg14} alt="memory14" className="memories__img"/>
                <img src={MemoriesImg15} alt="memory15" className="memories__img"/>
                <img src={MemoriesImg16} alt="memory16" className="memories__img"/>
                <img src={MemoriesImg17} alt="memory17" className="memories__img"/>
                <img src={MemoriesImg18} alt="memory18" className="memories__img"/>
                <img src={MemoriesImg19} alt="memory19" className="memories__img"/>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesMain;
