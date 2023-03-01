import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Object Detection",
    desc: "Object detection with YOLOv5 and Tensorflow.",
    img: "/static/projects/iStock-1148029566.jpg",
    link: "https://github.com/MachineLearningReply/ODIST",
    github: "https://github.com/MachineLearningReply/ODIST",
    tags: ["Tensorflow", "Sagemaker", "MLOps", "ResNet50", "MobileNet", "SkipNet"],
  },
  {
    id: 1,
    title: "Object Tracking",
    desc: "Object for tennis players and their movements.",
    img: "/static/projects/iStock-1061025122.jpg",
    link: "https://github.com/MachineLearningReply/ODIST",
    github: "https://github.com/MachineLearningReply/ODIST",
    tags: ["Tensorflow", "TPUs", "Video", "Non Max Suppression", "Realtime"],
  },
  {
    id: 2,
    title: "Instance counting",
    desc: "Instance counting for monitoring the number of people in a room.",
    img: "/static/projects/iStock-1166363659.jpg",
    link: "https://github.com/MachineLearningReply/ODIST",
    github: "https://github.com/MachineLearningReply/ODIST",
    tags: ["CNN", "Dialated Convulutions", "Instance Segmentation", "TensorRT"],
  },
  {
    id: 3,
    title: "Awsome ML Projects",
    desc: "More to come!",
    img: "/static/projects/iStock-1292304537.jpg",
    link: "https://github.com/MachineLearningReply/ODIST",
    github: "https://github.com/MachineLearningReply/ODIST",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Deep Learning at Scale",
    desc: "Blog post on how to train deep learning models at scale.",
    img: "/static/projects/iStock-1292304537.jpg",
    github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  // {
  //   id: 5,
  //   title: "Detecting rotten pees",
  //   desc: "How to detect rotten pees in a frozen bunch.",
  //   img: "/static/projects/iStock-1292304537.jpg",
  //   github: "https://github.com/BraydenTW/8ball-rust",
  //   tags: ["Rust", "CLI", "Game"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe 😭",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects