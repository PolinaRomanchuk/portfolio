import Photo from '../assets/portfolio/1.png';
import Photo2 from '../assets/portfolio/2.png';
import Photo3 from '../assets/portfolio/3.png';
import Photo4 from '../assets/portfolio/4.png';
import Photo5 from '../assets/portfolio/5.png';
import Photo6 from '../assets/portfolio/6.png';
import Photo7 from '../assets/portfolio/7.png';
import Photo8 from '../assets/portfolio/8.png';
import Photo9 from '../assets/portfolio/9.png';
import Photo10 from '../assets/portfolio/10.png';
import Photo11 from '../assets/portfolio/11.png';
import Photo12 from '../assets/portfolio/12.png';

type Photo = {
  id: number;
  url: string;
  style: object;
  containerstyle: object;
}[];

const LARGE_PORTRAIT = { width: '400px', height: '534px' };
const SQUARE = { width: '220px', height: '220px' };
const MEDIUM_PORTRAIT = { width: '280px', height: '370px' };

const CONTAINER_TALL = { height: '654px', width: '400px' };
const CONTAINER_SQUARE = {
  width: '220px',
  height: '654px',
  display: 'flex',
  alignItems: 'center',
};

const CONTAINER_MEDIUM = {
  width: '280px',
  height: '654px',
};

const PADDING_TOP_120 = { padding: '120px 0px 0px' };
const PADDING_BOTTOM_120 = { padding: '0px 0px 120px' };

export const photos: Photo = [
  {
    id: 1,
    url: Photo,
    style: LARGE_PORTRAIT,
    containerstyle: { ...CONTAINER_TALL, ...PADDING_TOP_120 },
  },
  {
    id: 2,
    url: Photo2,
    style: SQUARE,
    containerstyle: { ...CONTAINER_SQUARE },
  },
  {
    id: 3,
    url: Photo3,
    style: MEDIUM_PORTRAIT,
    containerstyle: { ...CONTAINER_MEDIUM, ...PADDING_TOP_120 },
  },
  {
    id: 4,
    url: Photo4,
    style: LARGE_PORTRAIT,
    containerstyle: { ...CONTAINER_TALL, ...PADDING_BOTTOM_120 },
  },
  {
    id: 5,
    url: Photo5,
    style: MEDIUM_PORTRAIT,
    containerstyle: { ...CONTAINER_MEDIUM, ...PADDING_TOP_120 },
  },
  {
    id: 6,
    url: Photo6,
    style: SQUARE,
    containerstyle: { ...CONTAINER_SQUARE },
  },
  {
    id: 7,
    url: Photo7,
    style: MEDIUM_PORTRAIT,
    containerstyle: { ...CONTAINER_MEDIUM },
  },
  {
    id: 8,
    url: Photo8,
    style: LARGE_PORTRAIT,
    containerstyle: { ...CONTAINER_TALL, ...PADDING_TOP_120 },
  },
  {
    id: 9,
    url: Photo9,
    style: SQUARE,
    containerstyle: { ...CONTAINER_SQUARE },
  },
  {
    id: 10,
    url: Photo10,
    style: MEDIUM_PORTRAIT,
    containerstyle: { ...CONTAINER_MEDIUM },
  },
  {
    id: 11,
    url: Photo11,
    style: MEDIUM_PORTRAIT,
    containerstyle: { ...CONTAINER_MEDIUM, ...PADDING_TOP_120 },
  },
  {
    id: 12,
    url: Photo12,
    style: LARGE_PORTRAIT,
    containerstyle: { ...CONTAINER_TALL },
  },
];
