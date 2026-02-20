import ritualCakesImage from './ritualcakes.png';
import glowNaturalsImage from './glownaturals.jpeg';
import visualClassroomImage from './visualclassroom.png';
import foodFlyImage from './foodfly.png';
import hiringHubImage from './hiring-hub.png';
import firebaseNotepadImage from './firebasenotepad.jpeg';
import resumeBuilderImage from './resume-builder.jpeg';

const projects = [
  {
    title: 'RITUAL CAKES Site',
    description:
      'Built using MERN stack with full-fledged customer and admin panel.',
    features:
      'Customer Panel, Admin Panel, Product Management, Order Tracking, Responsive Design',
    image: ritualCakesImage,
    live: 'https://ritual-cakes--alpha.vercel.app/',
    github: 'https://github.com/chinmaykoshe/ritual-cakes-new',
    category: 'major',
  },
  {
    title: 'GLOW NATURALS Site',
    description:
      'Built using REACT & FIREBASE stack with full-fledged customer and admin panel.',
    features:
      'Customer Panel, Admin Panel, Product Management, Order Tracking, Responsive Design',
    image: glowNaturalsImage,
    live: 'https://glownaturals.netlify.app/',
    github: 'https://github.com/chinmaykoshe/glow-naturals-new',
    category: 'major',
  },
  {
    title: 'Visual Classroom',
    description:
      'Developed an interactive course platform with progress tracking.',
    features:
      'Progress Tracking, Interactive UI, Responsive Layout, User Dashboard',
    image: visualClassroomImage,
    live: '',
    github: 'https://github.com/chinmaykoshe/visualclassrom',
    category: 'minor',
  },
  {
    title: 'FoodFly',
    description:
      'Functional food service website with user and admin portals.',
    features:
      'Restaurant Listings, Online Ordering, Admin Dashboard, User Reviews, Responsive UI',
    image: foodFlyImage,
    live: '',
    github: 'https://github.com/chinmaykoshe/foodfly',
    category: 'minor',
  },
  {
    title: 'Hiring Hub',
    description:
      'Built a two-sided hiring system for job seekers and recruiters.',
    features:
      'Job Posting, Candidate Profiles, Application Tracking, Admin Tools, Responsive Design',
    image: hiringHubImage,
    live: '',
    github: 'https://github.com/chinmaykoshe/hiring-hub',
    category: 'minor',
  },
  {
    title: 'Firebase Notepad',
    description:
      'Built an online quick notepad application with password and exporting.',
    features:
      'Quick notes, Firebase backend, password protection, export notes',
    image: firebaseNotepadImage,
    live: 'https://chinmaykoshe.github.io/firebase-notepad/',
    github: 'https://github.com/chinmaykoshe/Firebase-notepad',
    category: 'mini',
  },
  {
    title: 'Resume Builder',
    description:
      'Built an online resume builder application with export functionality.',
    features: 'Resume Templates, Export to PDF, Responsive Design',
    image: resumeBuilderImage,
    live: 'https://chinmaykoshe.github.io/resume-builder/',
    github: 'https://github.com/chinmaykoshe/resume-builder',
    category: 'mini',
  },
];

export default projects;