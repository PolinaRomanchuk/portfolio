import type { ReactElement } from 'react';
import Arrow from '../../assets/arrow-down.svg';
import Photo1 from '../../assets/hero/img-10.png';
import Photo2 from '../../assets/hero/img-11.png';

const Hero = (): ReactElement => {
  return (
    <section className="flex">
      <div className="container flex bg-secondary min-h-[86.2rem] gap-[2rem]">
        <div className="flex items-center gap-[1.2rem] py-[3rem] vertical-text justify-center ">
          <span className="text-light body-small">2025</span>
          <span className="bg-light w-[1px] h-[54rem] block"></span>
          <span className="text-light body-small">
            Best Photographer by MAX
          </span>
        </div>
        <div className="flex gap-[4rem] px-[2rem]">
          <div className="flex flex-col gap-[16rem] pt-[16rem] pb-[6rem] max-w-[74rem]">
            <div className="flex flex-col gap-[4rem] h-[45.8rem]">
              <div className="flex gap-[6rem]">
                <div className="flex gap-[0.8rem]">
                  <div className="flex body-decoration text-light">+</div>
                  <div className="flex flex-col gap-[0.8rem]">
                    <span className="text-light body-decoration h-[5.4rem]">
                      487
                    </span>
                    <span className="text-light body-base">Photo sessions</span>
                  </div>
                </div>
                <div className="flex gap-[0.8rem]">
                  <div className="flex body-decoration text-light">+</div>
                  <div className="flex flex-col gap-[0.8rem]">
                    <span className="text-light body-decoration h-[5.4rem]">
                      356
                    </span>
                    <span className="text-light body-base">
                      Satisfied clients
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="h1 text-light">Professional photographer</h1>
              <h3 className="h3 text-light">
                Capture the Moment. Tell Your Story.
              </h3>
            </div>
            <div className="flex items-center gap-[0.8rem] cursor-pointer">
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

          <div className="flex flex-col items-end justify-between py-[6rem]">
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
