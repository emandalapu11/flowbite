import React from 'react'
import { Checkmark} from '@carbon/icons-react'

const Second = () => {
  return (
    <>
    <div class="second-card">
        <div class="second-left">
            
   <div class="max-w-sm p-6 bg-black">
    <a href="#">
         <h5 class="mb-2 text-xl font-bold tracking-tight
       text-white dark:text-white">How to quickly deploy  a static website.</h5>
    </a>
    <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">Static websites are now used to bootstrap
   lots of websites and are becoming the basis for a variety of tools that even 
   influence both web designers and developers.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
    text-blue-700  rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none 
    focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    </div>


        </div>
        <div class="second-middle">
            
<a href="#" class="block max-w-xs p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-100 
dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-100 dark:text-white">User Prompt</h5>
    <p class="font-normal text-gray-300 dark:text-gray-400">   Write a small marketing blurb
     about Soundwave Pro headphones.</p>
</a>
</div>
      <div class="second-right">
      <div class="second-right1">
        
<a href="#" class="block max-w-sm p-6 bg-gray-900  rounded-lg shadow 
hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-xl font-bold tracking-tight
   text-gray-100 dark:text-white">Output1</h5>
  <p class="font-normal text-gray-300 dark:text-gray-400">
   Introducing "SoundWave Pro" headphones:
  Your music's new best friend!Immerse yourself in crystal-clear audio with 
  Hi-Fi quality,active noise cancellation,and 30-hour battery life.Elevate 
  your audio experience at <b>wwww.SoundWaveProAudio.com</b></p>
</a>
<div class="alert1">
      <div id="alert-1" class="flex items-center p-4 mb-4 text-green-600 border border-green-300 rounded-lg bg-green-50 
      dark:bg-gray-800 dark:text-green-400" role="alert">

  <div class="ml-3 text-sm color-green font-medium">
    Aligns with your brand 
  </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 
     text-green-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 
    hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 
    dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
     <Checkmark /> 
  </button>
  
</div>
        </div> </div>
      <div class="second-right2">
        
<a href="#" class="block max-w-sm p-6 bg-gray-900   rounded-lg shadow 
hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-xl font-bold tracking-tight
   text-gray-100 dark:text-white">Output2</h5>
  <p class="font-normal text-gray-300 dark:text-gray-400">
  Introducing "SoundWave Pro" headphones:
  Your music's new best friend!Immerse yourself in crystal-clearaudio with 
  Hi-Fi quality,active noise cancellation, and 30-hour battery life.Elevate 
  your audio experience at <b>wwww.SoundWaveProAudio.com</b></p>
  
 </a>
<div class="alert2">
<div id="alert-1" class="flex items-center p-4 mb-4  border border-red-400 text-red-800 rounded-lg 
bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <div class="ml-3 text-sm font-medium">
    Doesn't align with brand
  </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-50
     text-red-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 
     inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400
      dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
  </button>
</div>
  </div> 

      
</div></div>
      
      </div>
      
    </>
  )
}

export default Second
