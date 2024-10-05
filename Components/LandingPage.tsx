import React from 'react';  
import Statue from '../public/Images/King_POwer_Statue.png';  
import SkyBet from '../public/Images/sky-bet-championship-logo.png'; 
import Directions from '../public/Images/Directions.png'; 
import Trophy from '../public/Images/Trophy Gallery.png';
import Programs from "../public/Images/Program.png";
import YoungHeroes from '../public/Images/YoungHeroes.png';
import Training from '../public/Images/WomensTraining.png';
import FirstTeam from '../public/Images/Mens_first_team.png';
import Welcome from '../public/Images/Welcome.png';
import KingPower from '../public/Images/KingPowerStadium.jpg';
import AD from '../public/Images/AD.png'
import ButtonPlay from '../public/Images/play.svg'
import TrophyLift from '../public/Images/UpTrophy.png'
import Champs from '../public/Images/PremierLegueChampions.jpg'
import Selfie from '../public/Images/Selfie.jpg'
import Store from '../public/Images/Store.png'
import Team from '../public/Images/Team.png'
import Filter from '../public/Images/filter.svg'
import Image from 'next/image';

function ImageGrid() {  
  return (  
    <div className='bg-white font-reem-kufi md:pb-20 text-black'>
      <div className="relative">  
        <img src={Statue.src} alt="Statue" className="w-full h-auto" />  
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1 md:p-4 text-darkBlue bg-white flex items-center">  
          <img src={SkyBet.src} alt="Sky Bet Logo" className="h-8 px-2 md:h-full" />
          <h1 className="text-4xl font-deutschlander mr-2 md:text-8xl">Sky Bet CHAMPIONS</h1>  
        </div>  
      </div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white p-5 md:px-20">  
        {[
          { src: Trophy, alt: "Trophy" },
          { src: YoungHeroes, alt: "Young Heroes" },
          { src: Directions, alt: "Directions" },
          { src: FirstTeam, alt: "First Team" },
          { src: Training, alt: "Training" },
          { src: Programs, alt: "Programs" },
          { src: Welcome, alt: "Welcome" },
          { src: KingPower, alt: "King Power" },
        ].map((image, index) => (
          <div key={index} className="flex flex-col items-center">  
            <Image src={image.src} alt={image.alt} className="mb-1 w-full h-3/4" />  
            <p className="text-center text-black text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
          </div>  
        ))}
      </div> 
      <div className="flex items-center justify-center relative">
            <div className="flex-grow h-1 bg-darkBlue ml-20" />
            <div className="border-4 border-darkBlue p-2 text-center text-3xl text-black pr-28">
                More News        
            </div>
            <div className="flex-grow h-1 bg-darkBlue mr-20" />
        </div> 
        <div className='bg-darkBlue h-20 md:h-72 text-center mt-8 flex justify-center'>
          <img src={AD.src} alt="AD" className="h-full  md:h-full py-2 md:py-10" />
        </div>
        <div className='flex flex-col md:flex-row mx-4 md:mx-20 my-4 md:my-8 shadow-custom'>  
            <div className='pr-10 p-10 bg-lightGray w-full md:w-2/6  '>  
                <h1 className='text-darkBlue text-2xl font-semibold tracking-wider'>Features</h1>  
                <h2 className='text-black font-deutschlander text-6xl md:w-full tracking-wide'>SEASON 23/24</h2>  
                <h3 className='text-black font-deutschlander text-6xl tracking-wide'>SKY BET</h3>  
                <h4 className='text-black font-deutschlander text-6xl tracking-wide'>CHAMPIONSHIP</h4>  
                <h5 className='text-black font-deutschlander text-6xl tracking-wide'>CHAMPIONS</h5>  
                <img src={ButtonPlay.src} alt="play" className="h-10 md:h-36 py-5" />  
            </div>  
            <div className='relative w1/2 md:w-4/6'>  
                <img src={TrophyLift.src} alt="trophy lift" className="h-full md:h-full object-cover" />  
                <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent'></div>  
                <div className='absolute bottom-0 left-0 right-0 text-white text-center p-2'>  
                    <p className='text-lg md:text-4xl text-left ml-10 mb-10'>We're Back in the Premier League, Celebrating the Triumph of Football Excellence!</p>  
                </div>  
            </div>  
        </div>
       <div className='flex mx-20 text-black text-xl font-semibold'>  
    <div className='w-1/5 h-1/2'>
      <Image src={Selfie} alt="Selfie" />
      <div className='flex'><img src={ButtonPlay.src} alt="play" className="h-10 md:h-12 pt-5" /> 
    <h1 className='pt-5'> Watch:  A Nice</h1> </div>
    <h1>goal on our way to the Premier League.</h1> </div> 
    <div  className='w-1/5 h-1/2 pl-5'>
      <Image src={Champs} alt="Champs" />
      <div className='flex'><img src={ButtonPlay.src} alt="play" className="h-10 md:h-12 pt-5" /> 
    <h1 className='pt-5'> Watch:  Every </h1> </div>
    <h1>Way To Finish The Season.</h1> </div> 
    <div className='w-1/5 h-1/2 pl-5'>
      <Image src={Store} alt="Store" />
      <div className='flex'><img src={ButtonPlay.src} alt="play" className="h-10 md:h-12 pt-5" /> 
    <h1 className='pt-5'>  Watch:  Take a</h1> </div>
    <h1>walk into our  fan store.</h1>  </div> 
    <div className='relative w-2/5 pl-5 h-1/2'>  
        <Image src={Team} alt="Team" className='h-full w-full object-cover' />  
        <div className='absolute inset-0 ml-5 bg-gradient-to-t from-blue-600 to-transparent pointer-events-none'></div>  
        <div className='absolute bottom-0 left-0 right-0 text-white text-center p-2'>  
            <p className='text-lg md:text-2xl text-left ml-10 mb-10 font-light'>We're Back in the Premier League, Celebrating the Triumph of Football Excellence!</p>  
        </div>  
    </div>  
</div>

<div className="flex items-center justify-center relative pt-10">
            <div className="flex-grow h-1 bg-darkBlue ml-20" />
            <div className="border-4 border-darkBlue p-2 text-center text-3xl text-black pr-28">
                More Videos        
            </div>
            <div className="flex-grow h-1 bg-darkBlue mr-20" />
        </div> 
        <div className='mx-20'><h1 className='text-4xl mt-20 font-bold'>Next Events</h1>
        <div className='flex'><img src={Filter.src} alt="filter" className="h-10 md:h-14 py-5" /> <h1 className='text-xl font-bold py-4 pl-3'>Filter teams (1)</h1></div>
        <div className='flex space-x-16'> 
          <div className='flex-col w-1/3'>
            <div className='bg-darkBlue'>hello</div>
            <div></div>
          </div>
          <div className='flex-col w-1/3'>
            <div className='bg-darkBlue'>hello</div>
            <div></div>
          </div>
          <div className='flex-col w-1/3'>
            <div className='bg-darkBlue'>hello</div>
            <div></div>
          </div>
        </div>
        
        </div>
    </div> 
  );  
}  

export default ImageGrid;