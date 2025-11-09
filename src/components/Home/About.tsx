import type { ReactElement } from 'react';
import Photo1 from '../../assets/about/img-photographer-1.png';
import Photo2 from '../../assets/about/img-photographer-2.png';
import Photo3 from '../../assets/about/img-photographer-3.png';

const photoStyle = { width: '440px', height: '440px', objectFit: 'cover' };

const About = (): ReactElement => {
  return (
    <section
      className="container-xl d-flex py-5 d-flex gap-5"
      style={{ height: '750px' }}
    >
      <div className="d-flex flex-column gap-5 my-3 mx-2">
        <div>
          <img src={Photo1} alt="photo" style={photoStyle} />
        </div>
        <div className="d-flex flex-column gap-4">
          <h2 className="h2">about me</h2>
          <span className="body-base">
            Hi! I’m Vera, a photographer with 5 years of experience. For me,
            photography is more than just an image. It’s a way to feel the
            moment, capture the atmosphere, and freeze time. I work with people,
            stories, and emotions.
          </span>
        </div>
      </div>
      <div className="d-flex flex-column gap-5 my-3">
        <span>
          I shoot all across Europe. I love natural light, genuine emotions, and
          beautiful details. Each shot is a small piece of art. My goal is to
          create timeless images that tell your unique story.
        </span>
        <div>
          <img src={Photo2} alt="photo" style={photoStyle} />
        </div>
      </div>
      <div className="d-flex flex-column my-3 gap-5">
        <div>
          <img src={Photo3} alt="photo" style={photoStyle} />
        </div>
        <span>Seeing with heart. Shooting with soul.</span>
      </div>
    </section>
  );
};
export default About;
