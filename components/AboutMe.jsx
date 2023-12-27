import React from 'react'
import AnimatedBorder from './animatedBorder/AnimatedBorder'
import Separator from './Separator'
import SectionTitle from './SectionTitle'
import AboutMeBadge from './AboutMeBadge'
import Image from 'next/image'
import devIcon from '../public/img/devIcon.png'
import earthIcon from '../public/img/earthIcon.png'
import laptopIcon from '../public/img/laptopIcon.png'

function AboutMe() {
  return (
    <>
      <div
        id="about-me"
        className="flex flex-col-reverse sm:flex-row  flex-wrap mx-[-15px] justify-center items-center"
      >
        <div className="relative sm:flex w-full px-4 lg:max-w-[50%] lg:basis-2/4 mt-4 pb-4 flex-wrap">
          <div className=" mt-10">
            <Image src={devIcon} height={400} width={400} alt="Logo Dev" />
          </div>
        </div>

        <div className="relative w-full px-4 lg:max-w-[50%] lg:basis-2/4 mt-4 pb-4">
          <SectionTitle title={'ABOUT ME.'} />
          <h3 className="mt-0 leading-8 font-medium text-[1.75rem] mb-6 text-white">
            I am a web developer with 2 years of experience in real-world
            projects and 1 year as a freelancer.
          </h3>
          <div className=" mb-12 sm:mb-3">
            <AboutMeBadge />
          </div>
          <p className="my-0 sm:mb-4 mb-6">
            I have strong skills in web application development, particularly in
            JavaScript and React.js. In addition to my technical skills, I value
            teamwork and effective communication. I believe in the importance of
            collaboration and knowledge sharing to achieve exceptional results.
          </p>
          <div className="flex flex-wrap mx-[-15px] mb-10">
            <div className="relative px-4 basis-auto w-auto max-w-full">
              <div className="flex flex-nowrap items-center pt-3">
                <span className="min-w-[55px] font-semibold text-white text-5xl leading-4 ">
                  5K
                </span>
                <div className=" shrink grow pl-3 leading-5">
                  Projects <br />
                  Completed.
                </div>
              </div>
            </div>
            <div className="relative px-4 basis-auto w-auto max-w-full">
              <div className="flex flex-nowrap items-center pt-3">
                <span className="min-w-[55px] font-semibold text-white text-5xl leading-4 ">
                  3K
                </span>
                <div className=" shrink grow pl-3 leading-5">
                  Satisfied <br />
                  Clients.
                </div>
              </div>
            </div>
            <div className=" flex flex-col sm:flex-row ml-8 sm:ml-0 mt-10 sm:mt-0">
              <AnimatedBorder
                text={'Contact Me'}
                width={'175px'}
                href={'#contactMe'}
                isDownload={false}
              />
              <AnimatedBorder
                text={'Portfolio'}
                width={'175px'}
                href={'#projects'}
                isDownload={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
