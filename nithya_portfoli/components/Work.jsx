'use client';
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules'

// components
import ProjectCard from '@/components/ProjectCard';

const ProjectCard = [
  {
    image:'/work/3.png',
    category: 'react js',
    name: 'Nexa website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/4.png',
    category: 'react js',
    name: 'Solstice Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/2.png',
    category: 'next js',
    name: 'Lumina Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
  {
    image:'/work/2.png',
    category: 'fullstack',
    name: 'Zenith Website',
    description:
       'lorem ipsum dolor sit amet consectetur adipisicing elit. cumpue, quis.',
    link: '/',
    github: '/',
  },
];

const work = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text */}
        <div>
          <h2>Latest Projects</h2>
          <p>lorem, ipsum dolor sit amet  consectetur
             adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default work;