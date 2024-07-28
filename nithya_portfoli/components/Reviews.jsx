'use client';

import Image from 'next/image';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
}from '@/components/ui/card';


//import swiper react components
import {Swiper , SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const reviewsData=[
    {
        avatar:'/reviews/avatar-1.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: '',
    }
]


const Reviews = () => {
  return (
    <div>Reviews</div>
  );
};

export default Reviews;