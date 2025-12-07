import type { ReactElement } from 'react';
import Photo1 from '../../assets/about/img-photographer-1.png';
import Photo2 from '../../assets/about/img-photographer-2.png';
import Photo3 from '../../assets/about/img-photographer-3.png';

const About = (): ReactElement => {
  return (
    <section className="container flex gap-[4rem] min-h-[75rem] px-[2rem] py-[6rem]">
      <div className="flex flex-col gap-[4rem] justify-between">
        <div className="w-[44rem] h-[44rem]">
          <img
            src={Photo1}
            alt="photo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-[1.2rem] min-h-[14.8rem] justify-between">
          <h2 className="h2 h-[4rem]">about me</h2>
          <span className="body-base">
            Hi! I’m Vera, a photographer with 5 years of experience. For me,
            photography is more than just an image. It’s a way to feel the
            moment, capture the atmosphere, and freeze time. I work with people,
            stories, and emotions.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[4rem]">
        <span className="body-base">
          I shoot all across Europe. I love natural light, genuine emotions, and
          beautiful details. Each shot is a small piece of art. My goal is to
          create timeless images that tell your unique story.
        </span>
        <div className="w-[44rem] h-[44rem]">
          <img
            src={Photo2}
            alt="photo"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[4rem]">
        <div className="w-[44rem] h-[44rem]">
          <img
            src={Photo3}
            alt="photo"
            className="object-cover w-full h-full"
          />
        </div>
        <span className="body-base">
          Seeing with heart. Shooting with soul.
        </span>
      </div>
    </section>
  );
};
export default About;
