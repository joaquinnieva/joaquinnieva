import IconCoder from '../components/IconCoder/IconCoder'
import IconDesigner from '../components/IconDesigner/IconDesigner'
import {
  CODER_DESCRIPTION,
  CODER_TITLE,
  DESIGNER_DESCRIPTION,
  DESIGNER_TITLE
} from './constants'
import images from './images'

export const coderProgress = [
  { image: images.html, progress: '92', name: 'HTML' },
  { image: images.css, progress: '95', name: 'CSS' },
  { image: images.javascript, progress: '90', name: 'Javascript' },
  { image: images.sass, progress: '75', name: 'Sass' },
  { image: images.react, progress: '91', name: 'React.js' },
  { image: images.firebase, progress: '81', name: 'Firebase' },
  { image: images.tailwind, progress: '90', name: 'Tailwind' },
  { image: images.bootstrap, progress: '88', name: 'Bootstrap' },
  { image: images.redux, progress: '83', name: 'Redux' },
  { image: images.next, progress: '86', name: 'Next.js' },
  { image: images.express, progress: '78', name: 'Express.js' },
  { image: images.node, progress: '70', name: 'Node.js' },
  { image: images.mongo, progress: '66', name: 'MongoDB' },
  { image: images.mysql, progress: '60', name: 'MySQL' },
  { image: images.angular, progress: '75', name: 'Angular' },
]

export const designerProgress = [
  { image: images.figma, progress: '84', name: 'Figma' },
  { image: images.photoshop, progress: '70', name: 'Photoshop' },
  { image: images.illustrator, progress: '62', name: 'Illustrator' },
]

export const skillsViews = [
  {
    icon: <IconCoder />,
    title: CODER_TITLE,
    text: CODER_DESCRIPTION,
    skills: coderProgress,
  },
  {
    icon: <IconDesigner />,
    title: DESIGNER_TITLE,
    text: DESIGNER_DESCRIPTION,
    skills: designerProgress,
  },
]
