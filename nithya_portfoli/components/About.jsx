import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import{
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calender,
    Briefcase,
    University,
} from 'lucide-react';

const infoData =[
    {
        icon: <User2 size={20} />,
        text: 'Ryan Davis',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+012 345 6789',
    },  
    {
        icon: <MailIcon size={20} />,
        text: 'youremail@email.com',
    },  
    {
        icon: <Calender size={20} />,
        text: 'Born on 10 Mar, 1998',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master on Computer Science',
    },
    {
        icon: <HomeIcon size={20} />,
        text: '321 Blue Avenue, NY, USA',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Example University',
                qualification: 'Bachelor of Science',
                years: '2015 - 2018',
            },
            {
                university: 'Another University',
                qualification: 'Master of Arts',
                years: '2019 - 2021',
            },
            {
                university: 'Yet Another University',
                qualification: 'ph.D in computer Science',
                years: '2021 - 2025',
            },
        ],
    },

    {
        title: 'experience',
        data: [
            {
                university: 'ABC',
                qualification: 'Software Engineer',
                years: '2018 - 2020',
            },
            {
                university: 'XYZ Inc',
                qualification: 'Softwarw Engineer',
                years: '2020 - 2022',
            },
            {
                university: 'Tech Innovators',
                qualification: 'Lead Developer',
                years: '2022 - Present',
            },
        ],
    },
    

];


const SkillData = [];

const About = () => {
  return (
    <div>About</div>
  );
}

export default About ;