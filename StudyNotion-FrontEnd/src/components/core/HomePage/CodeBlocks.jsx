import React from 'react'
import CTAButton from './CTAButton';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import backGR from "../../../assets/Images/blurGR1.jpg";


function CodeBlocks({
    direction,heading,subheading,ctabtn1,ctabtn2,codeBlock,backgroundGradient,codeColor
}){
  return (
    <div className={`flex ${direction} my-20  justify-between`}>

        {/*Section 1*/}

        <div className='w-[50%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 font-bold'>
                {subheading}
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className='flex gap-2 items-center'>
                    <div>{ctabtn1.text}</div>
                    <FaArrowRight/>
                    </div> 
                </CTAButton>

                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    <div>{ctabtn2.text}</div>
                </CTAButton>

            </div>
        </div>

        {/*Section 2*/}
        <div className='relative w-[40%] z-10  rounded-md'>

        <div class="rounded-md h-[100px] w-[200px] top-[50%] left-[50%]  transform -translate-x-[50%] -translate-y-[50%] absolute -z-10">
            <img src={backGR} alt=''></img>
        </div>

        <div className='rounded-md realtive flex flex-row w-full p-2 gap-1 justify-between backdrop-blur-3xl z-10'>

        <div className='rounded-md border-dotted border-blue-300 border-2 w-[10%] text-center flex flex-col text-richblack-400 font-inter font-bold'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>

        </div>

        <pre className={`w-[90%] flex flex-col font-bold ${codeColor}  font-mono`}>
        <TypeAnimation
        sequence={[codeBlock,1000,"" ]}

        repeat={Infinity}
        cursor={true}
        omitDeletionAnimation={true}
        />
        </pre>
        </div>
        </div>


    </div>
  )
}

export default CodeBlocks;
