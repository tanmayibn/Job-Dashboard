import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          We're constructing the Digital University of the Future at The Future University, where we're cultivating the World's Largest Learning Community around the most esteemed educators globally. Through LIVE cohort-based courses focused on essential 21st-century skills, led by top experts in each field, we're revolutionizing education. Explore more at www.thefutureuniversity.co.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
      <p>We hold a strong belief in the power of community as the cornerstone of learning. Collaborating with peers is essential for achieving transformation.</p>
      <p>Active learning through hands-on experience is our primary focus. That's why our cohort-based courses prioritize practical assignments and projects.</p>
      <p>Access to top-tier instructors should be universal. Breaking geographical barriers ensures that individuals worldwide can benefit from the expertise of industry leaders.</p>
      <p>Influence holds more weight than traditional accreditation. By 2030, India is projected to have over 100 million content creators and internet entrepreneurs, whose credibility surpasses that of conventional university professors in teaching specific skills.</p>
      <p>Traditional education often neglects essential 21st-century skills such as financial management, tax filing, and social media management. At The Future University, we address this gap directly.</p>
      </div>
    </div>
  );
};

export default About;
