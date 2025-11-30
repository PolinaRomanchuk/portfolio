import type { ReactElement } from 'react';
import Arrow from '../../assets/arrow-down.svg';
import Photo1 from '../../assets/hero/img-10.png';
import Photo2 from '../../assets/hero/img-11.png';

const Hero = (): ReactElement => {
  return (
    <section className="flex ">
      <div className="bg-secondary container flex ">
        <div className="flex  gap-4 p-3  vertical-text items-center justify-content-center">
          <span className="text-light body-small">2025</span>
          <span className="bg-light w-[1px] h-[54rem] block"></span>
          <span className="text-light body-small">
            Best Photographer by MAX
          </span>
        </div>
        <div className="flex gap-2 py-5">
          <div className="flex flex-col p-3 gap-2 justify-between">
            <div className="flex flex-col gap-5 p-5 h-[45.8rem]">
              <div className="flex gap-5 mt-5 ">
                <div className="flex gap-3 flex-col">
                  <div className="flex body-decoration">
                    <span className="text-light">+</span>{' '}
                    <span className="text-light">487</span>
                  </div>
                  <span
                    className="text-light body-base"
                    style={{ textAlign: 'right' }}
                  >
                    Photo sessions
                  </span>
                </div>
                <div className="flex gap-3 flex-col">
                  <div className="flex body-decoration">
                    <span className="text-light">+</span>{' '}
                    <span className="text-light">356</span>
                  </div>
                  <span className="text-light body-base">
                    Satisfied clients
                  </span>
                </div>
              </div>
              <h1 className="h1 text-light">Professional photographer</h1>
              <h3 className="h3 text-light">
                Capture the Moment. Tell Your Story.
              </h3>
            </div>
            <div className="flex items-center pl-5">
              <span className="text-light body-base">Scroll down</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={Photo1}
              alt="photo"
              className="w-[220px] h-[220px] object-cover"
            />
          </div>
          <div className="py-3 flex flex-col justify-between items-end">
            <div>
              <img
                src={Photo2}
                alt="photo"
                className="w-[280px] h-[374px] object-cover"
              />
            </div>
            <span className="text-light body-base w-[220px] text-right">
              Hi! I’m Vera, a photographer. For me, photography is more than
              just an image.{' '}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
