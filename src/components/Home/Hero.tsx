import type { ReactElement } from 'react';
import Arrow from '../../assets/arrow-down.svg';
import Photo1 from '../../assets/hero/img-10.png';
import Photo2 from '../../assets/hero/img-11.png';

const Hero = (): ReactElement => {
  return (
    <section
      className="bg-secondary container-xl d-flex"
      style={{ height: '862px' }}
    >
      <div className="d-flex vertical-text gap-4 p-3">
        <span className="text-light body-small">2025</span>
        <span
          className="bg-light"
          style={{ width: '1px', height: '540px' }}
        ></span>
        <span className="text-light body-small">Best Photographer by MAX</span>
      </div>
      <div className="d-flex gap-2 py-5">
        <div className="d-flex flex-column p-3 gap-2 justify-content-between">
          <div
            className="d-flex flex-column gap-5 p-5"
            style={{ height: '458px' }}
          >
            <div className="d-flex gap-5 mt-5 ">
              <div className="d-flex gap-3 flex-column">
                <div className="d-flex body-decoration">
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
              <div className="d-flex gap-3 flex-column">
                <div className="d-flex body-decoration">
                  <span className="text-light">+</span>{' '}
                  <span className="text-light">356</span>
                </div>
                <span className="text-light body-base">Satisfied clients</span>
              </div>
            </div>
            <h1 className="h1 text-light">Professional photographer</h1>
            <h3 className="h3 text-light">
              Capture the Moment. Tell Your Story.
            </h3>
          </div>
          <div className="d-flex align-items-center ps-5">
            <span className="text-light body-base">Scroll down</span>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={Photo1}
            alt="photo"
            style={{ width: '220px', height: '220px', objectFit: 'cover' }}
          />
        </div>
        <div className="py-3 d-flex flex-column justify-content-between align-items-end">
          <div>
            <img
              src={Photo2}
              alt="photo"
              style={{ width: '280px', height: '374px', objectFit: 'cover' }}
            />
          </div>
          <span className="text-light" style={{ width: '220px' }}>
            Hi! I’m Vera, a photographer. For me, photography is more than just
            an image.{' '}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
